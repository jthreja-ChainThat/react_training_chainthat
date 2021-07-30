import React, { PureComponent, createRef } from "react";
import TodoList from "./todoList";
import TodoForm from "./todoForm";
import TodoFilter from "./todoFilter";
import "./todo.css";

class App extends PureComponent {
  state = {
    todoList: [],
    filter: "all",
    status: "idle",
  };

  inputRef = createRef();

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      this.setState({ status: "load_data" });
      const res = await fetch("http://localhost:3000/todoList");
      const json = await res.json();
      this.setState({ status: "load_data_request" });
      this.setState({ todoList: json, loading: false, status: "idle" });
    } catch (error) {
      this.setState({ status: "load_data_error" });
    }
  };

  addTodo = async (event) => {
    try {
      event.preventDefault();

      this.setState({ status: "add_data" });
      const res = await fetch("http://localhost:3000/todoList", {
        method: "POST",
        body: JSON.stringify({
          text: this.inputRef.current.value,
          isDone: false,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const json = await res.json();

      this.setState(
        ({ todoList, todoText }) => {
          return {
            todoList: [...todoList, json],
            filter: "all",
            status: "idle",
          };
        },
        () => {
          this.inputRef.current.value = "";
        }
      );
    } catch (error) {
      this.setState({ status: "add_data_error" });
    }
  };

  toggleTodo = async (todo) => {
    try {
      this.setState({ status: "update_data" });
      const res = await fetch(`http://localhost:3000/todoList/${todo.id}`, {
        method: "PUT",
        body: JSON.stringify({ ...todo, isDone: !todo.isDone }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const json = await res.json();

      this.setState(({ todoList }) => {
        const index = todoList.findIndex((item) => item.id === todo.id);
        return {
          todoList: [
            ...todoList.slice(0, index),
            json,
            ...todoList.slice(index + 1),
          ],
          status: "idle",
        };
      });
    } catch (error) {
      this.setState({ status: "update_data_error" });
    }
  };

  deleteTodo = async (todo) => {
    try {
      this.setState({ status: "delete_data" });
      await fetch(`http://localhost:3000/todoList/${todo.id}`, {
        method: "DELETE",
      });

      this.setState(({ todoList }) => {
        const index = todoList.findIndex((item) => item.id === todo.id);
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
          status: "idle",
        };
      });
    } catch (error) {
      this.setState({ status: "delete_data_error" });
    }
  };

  render() {
    const { filter, todoList, status } = this.state;
    const filteredTodo = todoList.filter((todo) => {
      switch (filter) {
        case "pending":
          return !todo.isDone;
        case "completed":
          return todo.isDone;
        default:
          return true;
      }
    });

    if (status === "load_data") {
      return <h1>Loading...</h1>;
    }

    if (status.includes("error")) {
      return (
        <div>
          <h1>Try After Sometime!</h1>
          <button type="button" onClick={this.fetchData}>
            Retry
          </button>
        </div>
      );
    }

    return (
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm addTodo={this.addTodo} inputRef={this.inputRef} />
        <TodoList
          status={status}
          todoList={filteredTodo}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoFilter
          filter={filter}
          applyFilter={(filterType) => this.setState({ filter: filterType })}
        />
      </div>
    );
  }
}

export default App;
