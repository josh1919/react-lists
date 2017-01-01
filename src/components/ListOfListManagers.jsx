var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./ListManager.jsx');

var ListOfListManagers = React.createClass({
  //test render function
  getInitialState: function() {
    return (
      {listOfLists:[this.props.myLists]}
    )
  },
  componentWillReceiveProps: function() {
    this.state.listOfLists = this.props.myLists;
  },
  render: function() {

    var myListLoop = function(listName, index){
      return <ListManager key={index + listName} title={listName} />;
    }

    return (<div>{this.state.listOfLists.map(myListLoop)}</div>)

  }

});

module.exports = ListOfListManagers;
