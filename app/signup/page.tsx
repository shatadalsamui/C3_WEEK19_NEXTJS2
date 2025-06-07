"use client"
import axios from "axios";
import {useState} from "react";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={"w-screen h-screen flex justify-center items-center"}>
            <div className={"border p-2"}>
                <input type={"text"} className={"text-black"} placeholder={"username"} onChange={e => {
                    setUsername(e.target.value);
                }}></input>
                <input type={"password"} className={"text-black"} placeholder={"password"} onChange={e => {
                    setPassword(e.target.value);
                }}></input>
                <button onClick={() => {
                    axios.post("/api/v1/signup", {
                        username,
                        password
                    });
                    window.location.href = "/signin";
                }}>
                    Sign up
                </button>
            </div>
        </div>
    )
}