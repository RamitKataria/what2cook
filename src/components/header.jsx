import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props) {
    const MyPaths = [
        {name: "Home", path: "/"},
        {name: "About Us", path: "/about-page"}
    ]
    return (
        <header>
            <ol style={{ textDecoration: "none", display: "flex", flex: "row", margin: '1rem'}}>

            <img
                style={{ width: "100px", margin: "0", padding: "0.1rem"}}
                src="/src/logo.svg"
                alt="What2Cook"/>

                {MyPaths.map((e) => {
                return (
                    <nav class="d-flex flex-row m-3">
                        <Link
                        to={e.path}
                        style={{ textDecoration: "none", fontSize: "1rem", margin: "3rem" }}
                        >
                        {e.name}
                        </Link>
                    </nav>
                );
                })}
            </ol>
      </header>
    )
}