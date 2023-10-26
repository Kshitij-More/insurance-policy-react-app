
import { useForm } from 'react-hook-form';
import PolicyForm from './PolicyForm';
import { useEffect, useState } from 'react';

function Policy({ user, setUser }) {

  const [policy, setPolicy] = useState([]);
  const [reqAmmount, setReqAmmount]= useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    fetchPolicy();
  }, [])


  const onSubmitHandler = (data) => {


    console.log("Plicy Form Data");
    console.log(data);
    // console.log(policy);

    fetch('http://localhost:8080/Policies', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        name: user[data.pId - 1].name
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => response.json()).then((result) => {
      alert("Record updated")
      fetchPolicy();
    })

    // Matser table userPolicyId

    fetch('http://localhost:8080/userPolicyId', {
      method: 'POST',
      body: JSON.stringify({

        uId: data.pId,
        pId: data.pId
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })


    reset();
  };


  async function fetchPolicy() {
    try {
      const res = await fetch('http://localhost:8080/Policies');
      const data = await res.json();
      setPolicy(data);

    } catch {
      alert("API Failed to fetch Data.")
      setPolicy([{},]);
    }

  }


  function deletPolicy(Id) {

    console.log("Pid", Id);
    let deleteId = Id;

    fetch("http://localhost:8080/Policies?pId=" + Id).then((response) => response.json())
      .then((data) => {
        deleteId = data[0].id;
        console.log("deleteid", deleteId);
        console.log("datap", data);
        console.log("data iD", data[0].id);
        fetch("http://localhost:8080/Policies/" + deleteId, { method: 'DELETE' })
          .then((response) => response.json())
          .then((result) => {
            alert("Record deleted")
            fetchPolicy();
          })

      });

  }


  function claimHandler(cId){
      console.log("ReqAmt",reqAmmount);
      console.log("CID",cId);
  }

  return (
      <PolicyForm
      handleSubmit={handleSubmit}
      onSubmitHandler={onSubmitHandler}
      register={register}
      user={user}
      policy={policy}
      deletPolicy={deletPolicy}
      errors={errors}
      claimHandler ={claimHandler}
      reqAmmount={reqAmmount}
      setReqAmmount={setReqAmmount}
      />
  );
}

export default Policy;
