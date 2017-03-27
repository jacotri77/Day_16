import React from 'react';
import './index.css';
import UnOrdered from './unOrdered.js'


const Form = React.createClass({

doSubmit: function (e) {
    e.preventDefault();
    var list = ReactDOM.findDOMNode(this.refs.words).value.trim();
    if (!task) {
      return;
    }
    this.props.Submit(list);
    ReactDOM.findDOMNode(this.refs.words).value = '';
    return;
  },
  render: function() {
    return (
      <div className="commentForm vert-offset-top-2">
        <div className="clearfix">
          <form id="honey" onSubmit={this.props.Submit}>
                <input type="text" id="words" ref="words" className="form-control" placeholder="What needs to be done?" />
          </form>
        </div>
      </div>
    );
  }
});


	export default Form;