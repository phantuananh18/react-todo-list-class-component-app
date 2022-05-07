import React, { Component } from "react";
import { Input, Button, List } from "antd";
import { v4 } from "uuid";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      todoList: [],
      isCompleted: false,
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleAddTodo = this.onHandleAddTodo.bind(this);
  }

  onHandleChange(event) {
    this.setState({
      textInput: event.target.value,
    });
  }

  onHandleAddTodo() {
    this.setState({
      todoList: [
        {
          id: v4(),
          task: this.state.textInput,
          isCompleted: this.state.isCompleted,
        },
        ...this.state.todoList,
      ],
      textInput: "",
    });
    console.log("Add success");
    console.log("TodoList: ", this.state.todoList);
  }

  render() {
    return (
      <div className="App">
        <h1>React Todo List Class Component App</h1>
        <Input
          size="middle"
          placeholder="Enter a new task"
          style={{ width: 500, marginRight: 10 }}
          value={this.state.textInput}
          onChange={this.onHandleChange}
        />
        <Button type="primary" onClick={this.onHandleAddTodo}>
          Add a new task
        </Button>

        <List
          style={{ justifyContent: "center" }}
          size="small"
          itemLayout="horizontal"
          dataSource={this.state.todoList}
          renderItem={(item) => <List.Item>{item.task}</List.Item>}
        />
      </div>
    );
  }
}

export default TodoForm;
