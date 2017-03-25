import React from 'react';
import './index.css';

const ListItems = React.createClass({



render: function(){
  return (

    <li><input type="checkbox" />{this.props.children}</li>
    )
  }



})
	export default ListItems;