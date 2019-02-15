import React from 'react';
import { connect } from 'react-redux';
import { mapShowActionToProps } from '../../helpers/dispatchToPropsHelpers';

const SearchAssetPanel = (props) => (
  <section className='ui yellow segment'>
    <div className='ui secondary menu'>
      <h2 className='item header'>Add Asset</h2>

      <button 
        className='right menu ui icon red button'
        onClick={() => props.show('home')}
      >
        <i className='close icon'></i>
      </button>
    </div>
    <p>Search by either asset name or symbol:</p>
    <div className='ui input'>
      <input 
        type='text'
        placeholder='eg. BTC'
      />
    </div>
    <br />
    <small>*available assets are supported by CryptoCompare API</small>
  </section>
)

export default connect(() => ({}), mapShowActionToProps)(SearchAssetPanel);