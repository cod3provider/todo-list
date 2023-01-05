import React, { Component } from 'react';
// import TodoList from './components/TodoList';
import initialTodos from './todos.json';
import Container from './components/Container';
import Form from './components/Form';
import NameForm from "./components/NameForm";

class App extends Component {
  state = {
    todos: initialTodos,
    inputValue: ''
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  handleNameChange = event => {
    console.log(event.currentTarget.value);

    this.setState({inputValue: event.target.value})
  }

  /*handleChange = e => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);

    const { name, value } = e.currentTarget;

    // this.setState({
    //   [e.currentTarget.name]: e.currentTarget.value,
    // });

    this.setState({
      [name]: value,
    });
  };*/

  // handleNameChange = e => {
  //   console.log(e.currentTarget.value);
  //
  //   this.setState({ name: e.currentTarget.value });
  // };

  // handleTagChange = e => {
  //   this.setState({ tag: e.currentTarget.value });
  // };

  // fromSubmitHandler = data => {
  //   console.log(data);
  // }

  render() {
    // const { todos } = this.state;

    // const completedTodos = todos.filter(todo => todo.completed);
    // console.log(completedTodos.length);

    // const totalTodosCount = todos.length;
    // const completedTodosCount = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0
    // );

    return (
      <Container>

        <form action="">
          <label htmlFor="">
            Имя <input type="text"/>
          </label>
        </form>

        {/*<input*/}
        {/*    type="text"*/}
        {/*    value={this.state.inputValue}*/}
        {/*     onChange={this.handleInputChange}/>*/}
        {/*/!*<input*!/*/}
        {/*/!*  type="text"*!/*/}
        {/*/!*  value={this.state.inputValue}*!/*/}
        {/*/!*  onChange={this.handleInputChange}*!/*/}
        {/*/>*/}

        {/*/!*<Form onSubmit={this.fromSubmitHandler}/>*!/*/}

        {/*/!*<NameForm />*!/*/}
      </Container>

      // <>
      //   <div>
      //     <p>Общее кол-во туду: {totalTodosCount}</p>
      //     <p>Кол-во выполненных: {completedTodosCount}</p>
      //   </div>
      //   <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      // </>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// const App = () => (
//   <>
//     <ToodList />
//   </>
// );

export default App;
