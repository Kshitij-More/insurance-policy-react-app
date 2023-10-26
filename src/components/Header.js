import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link  className="navbar-brand" to='user'>Users</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='form'>Add Policies</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link"to='claimPolicy'>Claim Policies</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to='claimSettlement'>Claim Settlement</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}

export default Header