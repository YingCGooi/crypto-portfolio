import React from 'react';
import { connect } from 'react-redux';
import { mapShowActionToProps } from '../../helpers/dispatchToPropsHelpers';

const ControlPanel = (props) => (
  <div id='control-panel' className='ui secondary menu'>
    <h2 className='item header'>Your Assets</h2>
    
    <div className='right menu'>
      <p className='ui item'>Sort By:</p>
      
      <select id='sort' className='ui item dropdown'>
        <option>Name</option>
        <option>Valuation</option>
        <option>Holdings</option>
      </select>

      <div className='ui item'>
        <button 
          className='ui red button'
          onClick={() => props.show('search')}
        >
          <i className='plus icon'></i>Add Asset
        </button>
      </div>
    </div>
  </div>
)

export default connect(() => ({}), mapShowActionToProps)(ControlPanel);