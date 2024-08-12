import React from 'react'
import '../App.css'
import { useState } from 'react'

function callback({getColor}) {

    const [activecolor, setactivecolor] = useState('');
    const handleChange = (e) => {
        const { value } = e.target;
        setactivecolor(value);
        getColor(value);
    };

  return (
    <>
      <input
        type='text'
        id='input'
        aria-label='input'
        placeholder='What is your favourite color?'
        onChange={handleChange}
        value={activecolor}
      />
    </>
  )
}

export default callback