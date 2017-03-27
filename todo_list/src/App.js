import React from 'react';
import './index.css';
import Buttons from './buttons.js'
// import RemoveChore from './removeChore.js'


const App = React.createClass({
  

getInitialState: function(){
    return{ 
      completed: false,
      text: '',
      list: []
  
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
  text: '',
  id:list.id
  
  })

},

handleClick: function(e){
  var list = this.state.list
    list.splice(e, 1)
  this.setState({
    list:list
      
    
  })
},

greyOut: function(e){
  this.setState({
    list: this.state.list.filter(function (list){
    return {
      completed: !this.state.completed
    }
    
     }) 
  })
},

render: function(){
  var listStyles = {'textDecoration': this.state.completed ? 'line-through' : ''}

  return (
    <div className="biggurn">
      <h1> todos </h1>
      <form onSubmit={this.handleSubmit} id="honey">
        <input value={this.state.text} type="text" id="words" onChange={this.handleChange} placeholder="What needs to be done?" />
       </form>
          <ul className="todoitems">
            {this.state.list.map(function(list){
              return <li style={listStyles} key={list} id="listStyles"><input type="checkbox" defaultChecked={this.state.completed} ref="complete" onChange={this.greyOut}/>{list}<button onClick={this.handleClick} className="bigX">X</button></li>
              }.bind(this))} 

          </ul>
          <Buttons />
    </div>

    )
  }

})


export default App;
