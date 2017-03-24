import React from 'react';
import './index.css';


const App = React.createClass({

getInitialState: function(){
  return{
  list: [],
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
removeChore: function(e){
  this.setState({

  })
}

 
render: function(){
  return (
    <div className="biggurn">
      <h1> todos </h1>
      <form onSubmit={this.handleSubmit} id="honey">
        <input value={this.state.text} type="text" id="words" onChange={this.handleChange} placeholder="What needs to be done?" />
          <ul className="todoitems">
            {this.state.list.map(function(list){
              return <li><input type="checkbox" />{list}</li>
              }) }
          </ul>
      </form>
    </div>

    )
  }

})

export default App;
