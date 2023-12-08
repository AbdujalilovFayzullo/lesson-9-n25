import PropTypes from 'prop-types';


const TodoItem = (props) => {
    const { title, time, done } = props;

  return (
    <div className="alert alert-primary d-flex justify-content-between align-items-center" >
        <div>
        <h3>{title}</h3>
        <p>{time}</p>
        </div>
        <div>
            { done ? ( <button className='btn btn-danger'>DELETE</button> ) : (<button className='btn btn-success '>DONE</button>) }


        </div>
        
        </div>
  )
}

export default TodoItem