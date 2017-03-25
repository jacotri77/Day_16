import React from 'react';
import './index.css';

const Buttons = React.createClass({



render: function(){
  return (
      <div className="divButtons">
        <button>all</button>
        <button>active</button>
        <button>completed</button>
        <button>clear completed</button>
     </div>
    )
  }



})
	export default Buttons;