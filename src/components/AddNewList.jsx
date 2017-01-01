var React = require('react');
var ReactDOM = require('react-dom');
var ListOfListManagers = require('./ListOfListManagers.jsx');

var AddNewList = React.createClass({

  getInitialState: function() {
    return {Lists:[], newListText:''};
  },

  onChange: function(e){
    this.setState({newListText: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var currentLists = this.state.Lists;

    currentLists.push(this.state.newListText);

    this.setState({Lists: currentLists, newListText:''});

  return ReactDOM.render(<ListOfListManagers myLists={this.state.Lists} />, document.getElementById('lists'));
  },

  render: function() {
    return (
      <div className="sm-col-10">
        <div className="panel">
          <div className="row">
            <h1>{this.props.title}</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="col-sm-9">
                <input className="form-control" onChange={this.onChange} value={this.state.newListText} />
              </div>
              <div className="col-sm-2">
                <button className="btn btn-primary">Add New List</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = AddNewList;
