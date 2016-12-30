var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./ListManager.jsx')

var AddNewList = React.createClass({

  getInitialState: function() {
    return {items:[], newItemText:''};
  },

  onChange: function(e){
    this.setState({newItemText: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var currentItems = this.state.items;

    currentItems.push(this.state.newItemText);

    this.setState({items: currentItems, newItemText:''});

    ReactDOM.render(<ListManager title={this.state.newItemText} />, document.getElementById('lists'));

  },

  render: function() {
    return (
      <div className="sm-col-10">
        <div className="panel">
          <div className="row">
            <h1>{this.props.title}</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="col-sm-9">
                  <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                </div>
                <div className="col-sm-2">
                  <button className="btn btn-primary">Add</button>
                </div>
              </form>
          </div>
        </div>
      </div>
);
  }
});

module.exports = AddNewList;
