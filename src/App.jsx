import { useState } from "react";

function submitForm(answer) {
  // Pretend it's hitting the network
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === 'Dhaka'.toLowerCase())
        resolve();
      else {
        reject(new Error("You are Wrong, try again!"));
      }
    }, 3000);
  })
}

function Main() {

  // Empty, Typing, Submitting, Success, Error
  // mandatory state
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);

  // visual states
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return (
      <h1 className="p-4 m-4 text-5xl bg-yellow-500 text-black">Hello Dhaka</h1>
    )
  }


  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');

    console.log(e.target.tagName);
    console.log(answer);
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      console.log(err.message);
      setError(err.message);
    }
  }



  function handleTextAreaChange(e) {
    setStatus('typing');
    setError(null);
    setAnswer(e.target.value);
    console.log(answer);
  }

  return (
    <>
      <form action="" className="p-4" onSubmit={handleSubmit}>
        <h1 className="text-xl">City Quiz</h1>
        <p>What city is located on two continents?</p>
        {<textarea name="" id="" cols="30" rows="10" className="border border-5 border-yellow-500 rounded-lg p-2" value={answer} disabled={status === 'submitting'} onChange={(e) => { handleTextAreaChange(e) }} ></textarea>}
        <br />
        <button type="submit" className="bg-purple-400 w-22 rounded-lg px-4" disabled={answer === '' || status === 'submitting'}>Submit</button>
        {status === 'submitting' && <p className="py-2">Loading....</p>}
        {error && <p className="py-2 text-red-500">{error}</p>}
      </form >
    </>
  )
}

export default function App() {
  return (
    <div >
      <Main />
    </div>
  )
}