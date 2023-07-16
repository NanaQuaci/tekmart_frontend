import React from 'react'
import { Link } from 'react-router-dom'

const ThirdHeader = () => {
        return (
                <div className="navbar navbar-expand-lg navbar-light bg-light rounded shadow" aria-label="Twelfth navbar example">
                        <div className="container-sm">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
                                        <ul className="navbar-nav">
                                                <li className="nav-item dropdown">
                                                        <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Computing</Link>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdown04">
                                                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                        </ul>
                                                </li>

                                                <li className="nav-item dropdown">
                                                        <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Fashion</Link>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdown04">
                                                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                        </ul>
                                                </li>

                                                <li className="nav-item dropdown">
                                                        <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Shoes</Link>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdown04">
                                                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                        </ul>
                                                </li>

                                                <li className="nav-item dropdown">
                                                        <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Tablets</Link>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdown04">
                                                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                        </ul>
                                                </li>

                                                <li className="nav-item dropdown">
                                                        <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Health</Link>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdown04">
                                                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                        </ul>
                                                </li>

                                                <li className="nav-item dropdown">
                                                        <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Electronics</Link>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdown04">
                                                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                        </ul>
                                                </li>

                                                <li className="nav-item dropdown">
                                                        <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Stationary</Link>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdown04">
                                                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                        </ul>
                                                </li>

                                                <li className="nav-item dropdown">
                                                        <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Provisions</Link>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdown04">
                                                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                        </ul>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </div>
        )
}

export default ThirdHeader
