import React from "react";
import OSAvi from "../images/OS-Avi.jpeg";

export default function Info() {
    return (
        <div>
            <img src={OSAvi} alt="" />
            <h1>Owethu Sotomela</h1>
            <button>Email</button>
            <button>LinkedIn</button>
        </div>
    )
}