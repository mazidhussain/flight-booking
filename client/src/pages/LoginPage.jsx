import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function LoginPage() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    async function handleLoginSubmit(ev){
        ev.preventDefault();
        alert({email,password});
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4 mt-6">Login</h1>
                <form className="max-w-md border-none mx-auto border" onSubmit={handleLoginSubmit}>
                    <input type='email' placeholder="email@gmail.com" value={email} onChange={ev => setEmail(ev.target.value)} />
                    <input type='password' placeholder="Enter your password" value={password} onChange={ev => setPassword(ev.target.value)} />
                    <button className="login">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet?  <Link className="underline text-black" to={'/register'}>Register now</Link></div>
                </form>
            </div>
        </div>
    );

}