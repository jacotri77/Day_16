import React from 'react';
import './index.css';

const RemoveChore = React.createClass({

unChore: function(e){
  list: this.props.list
  var index = list.indexOf(e.target.value)
  var list = this.state.text
    list.splice(index, 1),
    this.setState({    

  })
},

render: function(){
  return (
    <div className="biggurn">
      <ul className="todoitems">
			   <li><input onClick={this.unChore}type="checkbox" />{this.state.text}</li>
      </ul>
    </div>

    )
  }

})

export default RemoveChore;