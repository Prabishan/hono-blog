import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const Auth = ({ type }: { type: "signin" | "signup" }) => {

    const [AuthInput, setAuthInput] = React.useState({
        username: "",
        email: "",
        password: ""
    });

    const handleAuthInput = (e: any) => {
        console.log(e)
        setAuthInput({ ...AuthInput, [e.target.id]: e.target.value })
    }
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="min-h-96 min-w-96 ">
                {type === "signup" ?

                    <div className=" flex flex-col items-center mb-8 ">
                        <div className="text-3xl font-extrabold ">
                            Create an account
                        </div>
                        <div className="">
                            Already have an account?
                            <Link className="pl-2 underline" to={"/signin"}>Login</Link>
                        </div>
                    </div>
                    :
                    <div className=" flex flex-col items-center mb-8 ">
                        <div className="text-3xl font-extrabold ">
                            Log in to your account
                        </div>
                        <div className="">
                            Create an account?
                            <Link className="pl-2 underline" to={"/signup"}>Sign up</Link>
                        </div>
                    </div>
                    }
                <div className=" flex flex-col gap-2">
                    <div className="font-bold">
                        Email
                    </div>

                    <Input type="email" id="email" placeholder="m@example.com" onChange={(e) => handleAuthInput(e)} />
                    <div className="font-bold">
                        Password
                    </div>
                    <Input type="password" id="password" placeholder="" onChange={(e) => handleAuthInput(e)} />
                    <Button className="" onClick={() => { console.log("signup") }}>{type === "signin" ? "Sign in" : "Sign up"}</Button>
                </div>
            </div>

        </div>
    )
}

export default Auth;