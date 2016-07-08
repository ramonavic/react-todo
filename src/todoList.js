import React from 'react';
import $ from 'jquery'
import Todo from './todo'
import AddTodo from './addTodo'
import AppBar from 'material-ui/AppBar';



class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      todoList: []
    };
  }

  componentDidMount() {
  this.loadTodos();
}

saveData(todoList){
  let url = this.props.url
   $.ajax({
       type: "POST",
       url: url,
       data: JSON.stringify({
           todos: todoList
       }),
       contentType: "application/json",
       dataType: "json"
   });
}

  onAddTodo(description){
    console.log(this.props)
     var newTodo = {description: description, completed: false };
     var newTodos = this.state.todoList.concat(newTodo);
     this.setState({
         todoList: newTodos
     });
     console.log(this.state.todoList)
     this.saveData(this.state.todoList);
  }

  loadTodos() {
  let url = this.props.url;
  let component = this;

  $.ajax({
     type: "GET",
     url: url,
     dataType: 'json',
     error: function(){
       console.log('Unable to load feed, Incorrect path or invalid feed');
     },
     success: function(json){
      //  console.log(json)
      JSON.stringify(json)
       component.setState({
         todoList: json
        });

     }
   });
}

  renderTodo(todo, index) {
    // console.log(todo);
    return (
      <Todo
        key={index}
        description={todo.description}
        checkbox={todo.completed} />
    );
    // console.log(Todo)
  }

  render() {
    let todoList = this.state.todoList;

    return (

        <div> {todoList.map(this.renderTodo.bind(this))}
        <AddTodo onSubmit={this.onAddTodo.bind(this)} />
        </div>
    );
  }
}

export default TodoList;
