import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const form = useRef();

  const isValidEmail = (email) => {
    // Use a regular expression pattern to validate email address format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const sendEmail = async (e) => {
    try {
      const emailSent = await emailjs.sendForm(
        'portfolio_connection',
        'template_li9wry5',
        form.current,
        'JiTW9dCswT2jjDfXb'
      );
      console.log(emailSent.text);
      setName('');
      setEmail('');
      setMessage('');
      setSuccessMessage('Your message has been sent! Talk to you soon!');
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Reset previous error messages
    setNameError('');
    setEmailError('');
    setMessageError('');

    // Validate name field
    if (name.trim() === '') {
      setNameError('Name is required');
      return;
    }

    // Validate email field
    if (email.trim() === '') {
      setEmailError('Email address is required');
      return;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

    // Validate message field
    if (message.trim() === '') {
      setMessageError("Don't forget to write a message!");
      return;
    }

    sendEmail();
  };

  const handleNameBlur = () => {
    if (name.trim() === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const handleEmailBlur = () => {
    if (email.trim() === '') {
      setEmailError('Email address is required');
    } else {
      setEmailError('');
    }
  };

  const handleMessageBlur = () => {
    if (message.trim() === '') {
      setMessageError("Don't forget to write a message!");
    } else {
      setMessageError('');
    }
  };

  return (
    <div className='w-100'>
      <div className="d-flex flex-column align-items-center">
        <h1>Let's get in touch!</h1>
        <p className="">Fill out the form below to send me an email.</p>
      </div>
      <form ref={form} className="container w-75" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleNameBlur}
          />
          {nameError && (
            <div className="text-danger text-center">{nameError}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="
            Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
          />
          {emailError && (
            <div className="text-danger text-center">{emailError}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            name="message"
            id="message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={handleMessageBlur}
            ></textarea>
          {messageError && (
            <div className="text-danger text-center">{messageError}</div>
          )}
        </div>
        <div className="d-flex flex-column justify-content-center">
          <button type="submit" className="btn customBtn mb-2">
            Submit
          </button>
          {successMessage && (
            <div className="text-success text-center">{successMessage}</div>
          )}
        </div>
      </form>
    </div>
  );
}
