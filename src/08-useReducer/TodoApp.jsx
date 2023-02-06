import { useTodos } from "../hooks"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {

    const { todos, todosCount,  pendingTodosCount, completeTodosCount, handleNewTodo, handRemoveTodo, handleToggleTodo } = useTodos();

    return (
        <>
            <h1>TodoApp</h1>
            <hr />
           
            <div className="row">
                <div className="col-md-7 mb-3">
                    <div className="d-flex justify-content-between">
                            <strong> Total: {todosCount} </strong>
                            <strong> Pendientes: { pendingTodosCount} </strong>
                            <strong> Completadas: { completeTodosCount } </strong>
                        <small> click en la tarea para tacharla </small>
                        
                    </div>
                    <TodoList 
                        todos= { todos } 
                        onDeleteTodo = { handRemoveTodo } 
                        onToggleTodo = { handleToggleTodo }
                    />
                </div>

                <div className="col-md-5">
                    <div  className="form-control bg-dark-subtle">
                       <TodoAdd 
                            onNewTodo ={ handleNewTodo }
                        />  
                    </div>
                </div>
            </div>
        </>
    )
}
