import React from 'react';
import './index.css';


const UnOrdered = React.createClass({



render: function(){

 return(
 	<div>
    <ul className="todoitems">
       {this.props.superDuper.map(function(list){
          return  <li><input type="checkbox" />{list}</li>
          }.bind(this)) }
          </ul>
   </div>
  )
}
})
	export default UnOrdered;

	