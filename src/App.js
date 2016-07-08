import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TodoList from './todoList';



const listUrl = "https://todo-api-ramon.herokuapp.com/todos.json";


class App extends React.Component {
    render() {
        return (
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <TodoList url = {listUrl} />
          </MuiThemeProvider>

        );
    }
}

export default App;
