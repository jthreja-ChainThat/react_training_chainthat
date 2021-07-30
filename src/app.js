import React, { PureComponent, createRef } from "react";
import "./todo.css";

class App extends PureComponent {
  state = {
    todoList: [],
    filter: "all",
  };

  inputRef = createRef();

  addTodo = (event) => {
    event.preventDefault();

    this.setState(
      ({ todoList, todoText }) => {
        return {
          todoList: [
            ...todoList,
            {
              id: new Date().valueOf(),
              text: this.inputRef.current.value,
              isDone: false,
            },
          ],
        };
      },
      () => {
        this.inputRef.current.value = "";
      }
    );
  };

  toggleTodo = (todo) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((item) => item.id === todo.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...todo, isDone: !todo.isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = (todo) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((item) => item.id === todo.id);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  render() {
    console.log("render");
    const { filter, todoList } = this.state;
    return (
      <div className="container">
        <h1>Todo App</h1>

        <form onSubmit={this.addTodo}>
          <input type="text" ref={this.inputRef} />
          <button type="submit">Add Todo</button>
        </form>
        <div className="todo-list-container">
          {todoList
            .filter((todo) => {
              switch (filter) {
                case "pending":
                  return !todo.isDone;
                case "completed":
                  return todo.isDone;
                default:
                  return true;
              }
            })
            .map((todo, index) => {
              return (
                <div key={todo.id} className="todo-list-wrapper">
                  <input
                    type="checkbox"
                    name="isDone"
                    id="isDone"
                    checked={todo.isDone}
                    onChange={() => this.toggleTodo(todo)}
                  />
                  <span
                    style={{
                      textDecoration: todo.isDone ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </span>
                  <button type="button" onClick={() => this.deleteTodo(todo)}>
                    Delete Todo
                  </button>
                </div>
              );
            })}
        </div>
        <div className="filter-button-wrapper">
          <button
            type="button"
            onClick={() => this.setState({ filter: "all" })}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => this.setState({ filter: "pending" })}
          >
            Pending
          </button>
          <button
            type="button"
            onClick={() => this.setState({ filter: "completed" })}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}

export default App;
