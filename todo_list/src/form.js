import React from 'react';
import './index.css';
import UnOrdered from './unOrdered.js'


const Form = React.createClass({

render: function(){
  return (
      <div>
      <form id="honey" onSubmit={this.props.submission}>
        <input type="text" value={this.props.getInit} onChange={this.props.chore} id="words" placeholder="What needs to be done?"/>
        <UnOrdered  /> 
      </form>
      </div>
    )
  }


})
	export default Form;