import React from 'react';
import './index.css';
import Form from './form.js';
import Buttons from './buttons.js'
import Header from './todosHeader.js'
import UnOrdered from './unOrdered.js'


const Redo = React.createClass({

  getInitialState: function () {
  
  return{
  list: [],
  completed: false,
  text: ''

  }
},
generateId: function () {
    return Math.floor(Math.random()*90000) + 10000;
  },
  handleNodeRemoval: function (taskId) {
    var list = this.state.list;
    list = list.filter(function (el) {
      return el.id !== taskId;
    });
    this.setState({list});
    return;
  },
  handleSubmit: function (task) {
    var list = this.state.list;
    var id = this.generateId().toString();
    var complete = 'false';
    this.setState({
      list:[this.state.text, ...this.state.list],
      text: ''
    });
  },
  handleToggleComplete: function (taskId) {
    var list= this.state.list;
    for (var i in list) {
      if (list[i].id === taskId) {
        list[i].complete = list[i].complete === 'true' ? 'false' : 'true';
        break;
      }
    }
    this.setState({
      list

    });
    return;
  },
  render: function() {
    return (
      <div className="biggurn">
        <Header />
        <UnOrdered data={this.state.data} removeNode={this.handleNodeRemoval} toggleComplete={this.handleToggleComplete} />
        <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
});
	export default Redo;