import React from 'react';
import './index.css';

const ListItems = React.createClass({
	removeNode: function (e) {
		e.preventDefault();
		this.props.removeNode(this.props.taskId);
		return;
	},
	toggleComplete: function (e) {
		e.preventDefault();
		this.props.toggleComplete(this.props.taskId);
		return;
	},
	updateClass: function () {
		
	},
	render: function() {
		var classes = 'list-group-item clearfix';
		if (this.props.complete === 'true') {
			classes = classes + ' list-group-item-success';
		}
		return (
			<li className={classes}>
				{this.props.task}
				<div className="pull-right" role="group">
					 <button type="button" id="didit" onClick={this.removeNode}>&#xff38;</button>
				</div>
			</li>
		);
	}
});
	export default ListItems;