import react from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import logo from './logo.svg';

import { Provider } from "react-redux";

import store from "./store";

function App() {
	//provider makes available store to components
	return (
		<Provider store={store}>
			<Container fluid>
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Todo with local storage</h1>
				<TodoForm />
				<Todo />
			</Container>
		</Provider>
	);
}

export default App;
