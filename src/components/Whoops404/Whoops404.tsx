import React from 'react'
import {useLocation} from "react-router";

const Whoops404 = () => {
    let location = useLocation()
    return (
        <div>
            <h3> 404 Resource not found at {location.pathname}</h3>
        </div>
    )
}

export default Whoops404