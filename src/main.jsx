var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
var AddNewList = require('./components/AddNewList.jsx');

ReactDOM.render(<AddNewList title="Add a new list"/>, document.getElementById('newlist'));
// ReactDOM.render(<ListManager title = "Ingredients" />, document.getElementById('ingredients'));
// ReactDOM.render(<ListManager title="ToDo" />, document.getElementById('todo'));
// ReactDOM.render(<ListManager title="Christmas" headingColor="#b31217"/>, document.getElementById('christmas'));
