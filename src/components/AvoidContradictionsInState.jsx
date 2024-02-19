import { useState } from "react";

function sendMessage(text) {
    return new Promise((resolve) => {
        console.log('submitting....', text);
        setTimeout(resolve, 3000);
    })
}

export default function AvoidContradictionsInState() {
    const [text, setText] = useState('');
    const [status, setStatus] = useState('typing');

    async function handleSubmit(e) {
        e.preventDefault();
        if (text === '') return;
        setStatus('submitting');
        await sendMessage(text);
        setStatus('sent');
    }

    const isSending = status === 'submitting';
    const isSent = status === 'sent';

    if (isSent) {
        return (
            <h1>Thanks for feedback</h1>
        )
    }


    return (
        <>
            <form action="" className="p-4 space-y-2 " onSubmit={handleSubmit}>
                <h1 className="text-3xl ">How was your stay at The Prancing Pony?</h1>
                <textarea name="" id="" cols="30" rows="10" className="border border-5 border-purple-400 p-2" onChange={e => setText(e.target.value)}  ></textarea>
                <br />
                <button type="submit" className="border border-3 bg-purple-500 px-4 rounded-lg text-white ">Send</button>
                {isSending && <p className=" text-3xl ">loading...</p>}
            </form>
        </>
    )
}