import { useState } from "react";
import { Link } from "react-router-dom";


export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function RegisterUser(ev) {
        ev.preventDefault();

    }

    return (

        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4 mt-6">Register</h1>
                <form className="max-w-md border-none mx-auto border" onSubmit={RegisterUser}>
                    <div className="flex justify-between">
                        <div className="flex gap-3 ml-3">
                            <label htmlFor="">Admin</label>
                            <input type="radio" value="Admin" />
                        </div>
                        <div className="flex gap-3 mr-3">
                            <input type="radio" value="User" />
                            <label htmlFor="">User</label>
                        </div>
                    </div>
                    <input type='text' placeholder="Enter your name" value={name} onChange={ev => setName(ev.target.value)} />
                    <input type='email' placeholder="email@gmail.com" value={email} onChange={ev => setEmail(ev.target.value)} />
                    <input type='text' placeholder="Enter your phone number" value={name} onChange={ev => setName(ev.target.value)} />
                    <input type='password' placeholder="Enter your password" value={password} onChange={ev => setPassword(ev.target.value)} />
                    <textarea placeholder="Enter your address" value={password} onChange={ev => setPassword(ev.target.value)}></textarea>
                    <button className="login mt-1">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member?  <Link className="underline text-black" to={'/login'}>Login</Link></div>
                </form>
            </div>
        </div>
    );
}