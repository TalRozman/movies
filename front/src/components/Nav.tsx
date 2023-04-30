import React from 'react'
import { data } from '../data'

const Nav = () => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a href="/" className="navbar-brand">Movies</a>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Genres</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        {data.genres.map((gnr, index) =>
                                            <li key={index} style={{textAlign:"center",textDecoration:"none"}}><a style={{textDecoration:"none",color:"black"}} href={"/movies/" + gnr} >{gnr}</a></li>
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>)
}

export default Nav