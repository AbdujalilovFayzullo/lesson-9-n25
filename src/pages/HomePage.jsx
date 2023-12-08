import { useRef, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import TodoItem from "../components/TodoItem"

const HomePage = () => {
    const todoInputRef = useRef()
    const timeInputRef = useRef()
    const [todos, setTodos] = useState([
        { title: "Playing football", time: "12:00", done: true },
       { title: "Listen to music", time: "14:00", done: false },
        { title: "Reading book", time: "16:00", done: false },
        { title: "Working", time: "18:00", done: true },
        { title: "Sleeping", time: "00:00", done: true },
    ])

    const submit = (e) => {
        e.preventDefault()

        const title = todoInputRef.current.value.trim()
        const time = timeInputRef.current.value 

        if(title && time) {
            const todo = {
                title,
                time,
                done: false,
            }
    
            const newTodos = [todo, ...todos];
            setTodos(newTodos)
            e.target.reset()
        } else{
            window.alert('Iltimos to`ldiring')
        }

        }


    const mappingTodo =todos.map((todo, i) => (
        <TodoItem key={i} {...todo} />
    ))

    const doneTodos =   todos.filter((todo) => todo.done).map((todo, i) => (
        <TodoItem key={i} {...todo} />
    ))

    const unDoneTodos =   todos.filter((todo) => !todo.done).map((todo, i) => (
        <TodoItem key={i} {...todo} />
    ))

  return (
    <section>
        <div className="container">
        <h1 className="text-center my-3">TODO ITEM</h1>

        <form onSubmit={submit} className='d-flex mb-3 gap-3'>
            <input ref={todoInputRef} type="text" className='form-control' />
            <input ref={timeInputRef} type="time" className='form-control' />
            <button className='btn btn-success'>Add</button>
        </form>


        <Tabs
      variant='pills'  
      defaultActiveKey="All"
      transition={true}
      id="todo"
      className="mb-3"
      justify
    >
      <Tab eventKey="All" title="All">
      {mappingTodo}
      </Tab>

      <Tab eventKey="Done" title="Done">
      {unDoneTodos}
      </Tab>

      <Tab eventKey="Undone" title="Undone">
      {doneTodos}
      </Tab>
    </Tabs>


        

        </div>

    </section>
  )
}

export default HomePage