import React, { Component } from "react";
import { Button, Input } from "antd";
import { v4 } from "uuid";
import { ListItemText, IconButton } from "@mui/material";
import {
  CheckCircleFilled,
  CheckCircleTwoTone,
  DeleteFilled,
} from "@ant-design/icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      task: "",
    };
    this.inputRef = React.createRef();
    this.onHandleAddTodo = this.onHandleAddTodo.bind(this);
    this.onHandleDeleteTodo = this.onHandleDeleteTodo.bind(this);
    this.onRefreshTodo = this.onRefreshTodo.bind(this);
  }

  onHandleAddTodo() {
    this.setState({
      todoList: [
        {
          id: v4(),
          task: this.state.task,
          isCompleted: false,
        },
        ...this.state.todoList,
      ],
      task: "",
    });
    this.inputRef.current.focus();
  }

  onHandleDeleteTodo(id) {
    this.setState({
      todoList: this.state.todoList.filter((todo) => todo.id !== id),
    });
  }

  onHandleCompleteTodo(task) {
    this.setState({
      todoList: this.state.todoList.map((todo) =>
        todo.task === task ? { ...todo, isCompleted: true } : todo
      ),
    });
  }

  onRefreshTodo() {
    this.setState({
      todoList: [],
    });
  }
  render() {
    return (
      <div className="App">
        <h1>React Todo List App</h1>

        <div>
          <Input
            style={{ width: 500 }}
            size="large"
            value={this.state.task}
            onChange={(event) => {
              this.setState({ task: event.target.value });
            }}
            autoFocus
            ref={this.inputRef}
          />
          <Button type="primary" size="large" onClick={this.onHandleAddTodo}>
            Add a new task
          </Button>
        </div>

        <div style={{ margin: 20 }}>
          {this.state.todoList.map((todo) => {
            return (
              <ListItemText key={todo.id}>
                {todo.task}
                <IconButton
                  onClick={() => this.onHandleCompleteTodo(todo.task)}
                >
                  {!todo.isCompleted ? (
                    <CheckCircleFilled />
                  ) : (
                    <CheckCircleTwoTone />
                  )}
                </IconButton>

                <IconButton onClick={() => this.onHandleDeleteTodo(todo.id)}>
                  <DeleteFilled />
                </IconButton>
              </ListItemText>
            );
          })}
        </div>

        <div style={{ margin: 20 }}>
          <Button
            type="primary"
            size="large"
            shape="round"
            onClick={this.onRefreshTodo}
          >
            Refresh
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
