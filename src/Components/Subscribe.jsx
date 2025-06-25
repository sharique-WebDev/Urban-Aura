import React, { useState } from 'react';

const Subscribe = () => {
  const [input, setInput] = useState('');

  const isValidEmail = (email) =>{
    return /\S+@\S+\.\S+/.test(email);
  }

  const showPrompt = () => {
  if (!input) {
    alert("Please enter your email first");
  } else if (!isValidEmail(input)) {
    alert("Please input a valid email address");
  } else {
    alert("Subscribed! You will be notified about upcoming products")
    setInput('')
  }
};


  return (
    <div className='container-fluid text-center py-5 mt-5' style={{background: "linear-gradient(92deg, rgb(119 169 255 / 74%), rgb(2 255 0 / 40%))"}}>
      <h1 className='fs-2' style={{fontFamily: "Lucida Handwriting, pacifico"}}>📬 Get notified about our upcoming products 🔔</h1>
      <div className="row">
        <div className="col-12 col-md-8 mx-auto my-3">
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control p-3 rounded-start-pill"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="btn btn-primary px-md-4 rounded-end-pill fw-semibold"
              onClick={showPrompt}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;