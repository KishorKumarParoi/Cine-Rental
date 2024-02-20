import { useState } from "react";

export default function AvoidRedundantState() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <>
            <form action="" className=" ">
                <label htmlFor="firstName" className="mb-5" style={{
                    display: 'block'
                }}> Enter First Name:
                    <input type="text" className=" border border-5 border-purple-300 p-1" onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label htmlFor="lastName" className=""> Enter Last Name:
                    <input type="text" className="border border-5 border-purple-300 p-1" onChange={e => setLastName(e.target.value)} />
                </label>
            </form>
            <p>Full Name : {firstName} {lastName}</p>
        </>
    )
}