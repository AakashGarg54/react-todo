import Header from "./Components/Header";
import Todo from "./Components/Todo";
import Footer from "./Components/Footer";
import React, { useState, useEffect } from 'react';
import Addtodos from "./Components/Addtodos";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {

  const onDelete = (_todo) => {
    if (_todo === undefined) {
    } else {
      setTodo(todo.filter((e) => {
        return e !== _todo;
      }))
    }

    localStorage.setItem('todo', JSON.stringify(todo))
  }

  const addTodo = (title, desc, time, date) => {
    let sno;

    if (todo.length === 0) {
      sno = 0
    } else {
      sno = todo[todo.length - 1].sno + 1
    }
 
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
      time:time,
      date:date,
      active:true
    }

    setTodo([...todo, newTodo])

  }

  const activetodos = (index) =>{
    todo[index].active = !todo[index].active
    localStorage.setItem('todo', JSON.stringify(todo))
  }

  const [todo, setTodo] = useState(localStorage.getItem('todo') === null ? [] : JSON.parse(localStorage.getItem('todo')));

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])


  return (
    <div className="App">
      <Router>
        <Header title="My TODO List" searchBar={false} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/add">
            <Addtodos addTodo={addTodo} onDelete={onDelete} todo={todo}/>
          </Route>
          <Route path="/">
            <Todo todo={todo} onDelete={onDelete} active = {activetodos}/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;