import React from 'react';
import './index.css';
import Form from './form.js';
import Buttons from './buttons.js'
import Header from './todosHeader.js'


const Redo = React.createClass({

  getInitialState: function () {
  
  return{
  list: [],
  completed: false,
  text: ''

  }
},

  handleChange: function(e){
    this.setState({
      text: e.target.value
  })
},

  handleSubmit: function(e){
    e.preventDefault(),
    this.setState({   
      list:[this.state.text, ...this.state.list],
      text: ''
  })
},

render: function(){
  return (
    <div className="biggurn">
      <Header />
      <Form superDuper={this.state.list} submission={this.handleSubmit} chore={this.handleChange} getInit={this.state.text} maps={this.state.list.map}/>
      <Buttons />
    </div>

    )
  }



})
	export default Redo;