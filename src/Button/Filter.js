import React, { useState } from 'react';
import './App.css';

import {Table} from './Table';



export function App() {
  const buttonTitles = ['All', 'Done', 'In progress', 'Todo'];
  const [clickedButton, setClickedButton] = useState('all');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  

  const handleClick = (el) => {
    setClickedButton(el);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
    // setInputValue('');
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <div className="App">
       <div className='welcome-note'>
          <h2>Hello, Sandra</h2>
          <p>Here are the list of your task for today </p>
        </div>
      <div className='form-box'>
        <div className='form'>
          <input
            type='text'
            placeholder='filter by description...'
            className='input-box'
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          
            <img
              src="https://icons.veryicon.com/png/128/miscellaneous/enterprise-service-function-icon/search-931.png"
              alt="search"
              className= 'search-image'
            />
          
          {inputValue &&
          <img
          src="https://icons.veryicon.com/png/128/miscellaneous/wens/no-10.png"
           alt="close"
         role="button"
           className='close-image'
          onClick= {handleClearInput }
          />
          } 
           
       </div>
       <button className='addTask'>+ Add Task </button>
      </div>
      <div className='filter-form'>
        <h3 className='filter'> Filter by status </h3>
        {buttonTitles.map((el) => (
          <button
            key={el}
            className={` btn ${
              clickedButton.toLowerCase() === el.toLowerCase() ? 'btn-clicked' : ''}`}
            onClick={() => handleClick(el)}
          >
            {el}
          </button>
        ))}
      </div>

      
  <div className='Table'>
    <Table />
     </div>

    </div>
  );
}








export default App;