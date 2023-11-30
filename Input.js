import React, { useState } from 'react';
import db from './firebase';
import './App.css';
const tinyid = require('tiny-unique-id');

function Input() {
  const [input, setInput] = useState('');
  const [shorten, setShorten] = useState('');

  const handleDb = async () => {
    const slug = tinyid.unique();
    await db.collection('urls').add({
      url: input,
      slug: slug,
    });

    setShorten(`${window.location.origin}/${slug}`);
  };

  return (
    <div
      className='container'
      style={{
        background: 'linear-gradient(to right,   #033442, #ffff)',
        height: '100vh',
        width: '100vw',
        margin: '0',
        padding: '1px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <center>
        <h1 className='mt-5'>URL Shortener</h1>
        <div className='mt-4'>
          <input type='text' disabled className='form-control' value={shorten} />
          <input
            type='url'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='form-control mt-3'
            placeholder='enter URL'
          />

          <button onClick={handleDb} className='btn btn-dark mt-3'>
            Shorten URL
          </button>
        </div>
      </center>
    </div>
  );
}

export default Input;
