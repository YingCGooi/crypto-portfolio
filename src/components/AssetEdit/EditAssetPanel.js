import React from 'react';

export default () => (
  <section className='ui blue segment'>
    <div className='ui secondary menu'>
      <h1 className='item header'>Add/Edit Bitcoin</h1>
    </div>
    
    <p>How much Bitcoin (BTC) do you hold?</p>
    <div className='ui input'>
      <input 
        type='number'
        placeholder='0.000'
        value='1.0'
      />
    </div>

    <div className='ui secondary menu'>
      <button className='ui blue button'>
        <i className='check icon'></i>Save
      </button>
      <button className='ui red button'>
        <i className='trash icon'></i>Delete
      </button>
    </div>
  </section>
)