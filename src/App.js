import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Input } from "antd";
import { v4 } from "uuid";
import { ListItemText, IconButton } from "@mui/material";
import {
  CheckCircleFilled,
  CheckCircleTwoTone,
  DeleteFilled,
} from "@ant-design/icons";
import {
  onHandleAddTodo,
  onHandleDeleteTodo,
  onHandleCompleteTodo,
  onHandleResetTodo,
} from "./redux/actions/todoActions";

class App extends Component {
  render() {
    const {
      onHandleAddTodo,
      onHandleResetTodo,
      onHandleCompleteTodo,
      onHandleDeleteTodo,
    } = this.props;

    const { todoList, task } = this.props.todo;
    console.log("Text: ", task);
    console.log("List: ", todoList);
    return (
      <div className="App">
        <h1>React Todo List App</h1>

        <div>
          <Input style={{ width: 500 }} size="large" autoFocus value={task} />
          <Button type="primary" size="large" onClick={onHandleAddTodo}>
            Add a new task
          </Button>
        </div>

        <div style={{ margin: 20 }}>
          <ListItemText>
            <IconButton onClick={onHandleCompleteTodo}>
              <CheckCircleFilled />
            </IconButton>

            <IconButton onClick={onHandleDeleteTodo}>
              <DeleteFilled />
            </IconButton>
          </ListItemText>
        </div>

        <div style={{ margin: 20 }}>
          <Button
            type="primary"
            size="large"
            shape="round"
            onClick={onHandleResetTodo}
          >
            Refresh
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleAddTodo: () => dispatch(onHandleAddTodo()),
    onHandleDeleteTodo: (task) => dispatch(onHandleDeleteTodo(task)),
    onHandleCompleteTodo: (id) => dispatch(onHandleCompleteTodo(id)),
    onHandleResetTodo: () => dispatch(onHandleResetTodo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
