/*
Andrew Knickman
COSC 484
References:
https://www.kirupa.com/react/simple_todo_app_react.htm
https://hackernoon.com/create-a-simple-todo-app-in-react-9bd29054566b
*/

import React, { Component } from 'react';
import './App.css';
import data from './index.js';

class App extends Component 
{
  render() {
    return (
      <div className="App">
      <ToDoHeader/>
      <ToDoList/>
      </div>
    );
  }
}
class ToDoHeader extends Component {
  render(){
    return <h1 className="ToDoHdr">{data.hdr}</h1>
  }
}
class ToDoItem extends Component {
  render(){
    return(
    <li index={this.props.index}>
      <form onSubmit={this.props.action}><input type="text" value={this.props.litem}/> <DeleteBtn/>
      </form>
    </li>
    )
  }
}
class InputBtn extends Component {
  render(){
    return <button className="IptBtn" type="submit">+</button>
  }
}
class DeleteBtn extends Component {
  render(){
    return <button className="DelBtn" type="submit">x</button>
  }
}
class OrderedListDisplay extends Component {
  render(){
    return <ol>{this.props.list}</ol>
  }
}
class ToDoItems extends Component {
  constructor(props){
    super(props);
    this.createListItem = this.createListItem.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
  }
  createListItem(item) {
    return <ToDoItem index={item.index} action={this.deleteItems} litem={item.text}/>
  }
  deleteListItem(index, e){
    this.props.deleteItems(index);
  }
  render() {
    var toDoItems = this.props.youritems;
    var listItems = toDoItems.map(this.createListItem);
    return <OrderedListDisplay list={listItems}/>
  }
}
class ToDoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      current: 0
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e){
    if(this.input.value !== ""){
      var newItem = {
        text: this.input.value,
        index: this.current
      };

      this.setState((prevState, props) => {
        return{
          items: prevState.items.concat(newItem)
        };
      });
      this.input.value = "";
    }
    else
    {
      alert("Enter a to-do list item!")
    }
    e.preventDefault();
  }
  deleteItem(index, e){
    var newList = this.state.items.filter(function (item) {
      return (item.index !== index);
    });
    this.setState({
      items: newList
    });
    e.preventDefault();
  }
  render(){
    return(
      <div className="ToDoList">
        <form onSubmit={this.addItem}>
          <input ref={(a) => this.input = a} 
          placeholder="Your To-Do Item Here"></input> <InputBtn/>
        </form>
        <h3>{data.lsthdr}</h3>
          <ToDoItems youritems={this.state.items} delete={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
