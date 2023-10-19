import Header from "./components/Header";
// import ClaimReq from "./components/ClaimReq";
import Form from "./components/user/Form";
import Users from "./components/user/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {

  const [user, setUser] = useState([]);



  return (
    <div className="">


      {/* <ClaimReq />
      <Form /> */}

      <BrowserRouter>
        <Routes>
          <Route index element={
            <>
              <Header />
              {<Users user1={user} setUser={setUser} />}
            </>

          }>
          </Route>
          <Route path='/' element={<Header />}>
            <Route path="user" element={
              <Users user1={user} setUser={setUser} />
            } />
            <Route path="form" element={<Form  user={user} setUser={setUser}/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
