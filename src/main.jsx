var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
var AddNewList = require('./components/AddNewList.jsx');

ReactDOM.render(<AddNewList title="Add a new list"/>, document.getElementById('addnewlist'));
