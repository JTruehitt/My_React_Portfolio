import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');


  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Reset previous error messages
    setNameError('');
    setEmailError('');

    // Validate name field
    if (name.trim() === '') {
      setNameError('Name is required');
    }

    // Validate email field
    if (email.trim() === '') {
      setEmailError('Email address is required');
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
    }

    // Validate message field
    if (message.trim() === '') {
        setMessageError('Don\'t forget to write a message!');
        }
  };

  const isValidEmail = (email) => {
    // Use a regular expression pattern to validate email address format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div>
      <div className="text-center">
        <h1>Let's get in touch!</h1>
        <p>Fill out the form below to send me an email.</p>
      </div>
      <form className='container w-50' onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <div className="text-danger text-center">{nameError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="
            Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="text-danger text-center">{emailError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="form-control" id="message" rows="3" value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
            {messageError && <div className="text-danger text-center">{messageError}</div>}
        </div>
        <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </div>
      </form>
    </div>
  );
}
