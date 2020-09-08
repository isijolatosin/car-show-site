import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
// import axios from 'axios';

const ContactInfo = () => {
  const [url, setUrl] = useState(
    'mailto:test@example.com?subject=subject&body=body'
  );

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  // submit form
  const handleClick = (e) => {
    e.preventDefault();

    window.open(
      `mailto:isijolaoluwatosin@gmail.com?subject=${subject}&body=${name}: ${message}. My email is ${email}`
    );

    setSent(true);

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');

    setTimeout(() => {
      setSent(false);
    }, 5000);
  };
  console.log(sent);
  //end of submit form

  return (
    <section className='contact__form'>
      <div className={sent ? 'msg__appear msg' : 'msg'}>
        your message is almost completed
      </div>
      <p className='email-title'>send us an email</p>
      <div className='contact-center'>
        <Form onSubmit={handleClick}>
          <FormGroup>
            <Label for='name'>Name:</Label>
            <Input
              type='text'
              name='name'
              placeholder='Full Name...'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for='email'>Email:</Label>
            <Input
              type='email'
              name='email'
              placeholder='Email...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for='subject'>Subject:</Label>
            <Input
              type='text'
              name='subject'
              placeholder='Subject...'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for='message'>Message:</Label>
            <Input
              type='textarea'
              name='message'
              placeholder='How Can We Be Of Service?'
              value={message}
              style={{ height: '300px', fontSize: 'x-large' }}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormGroup>
          <Button type='submit' className='contact-btn'>
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default ContactInfo;
