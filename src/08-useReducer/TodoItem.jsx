
export const TodoItem = ({ item, onDeleteTodo, onToggleTodo}) => {
    const {description, id, done} = item;
   
    return (
        <li  className={ `rounded-3 list-group-item d-flex justify-content-between mt-3  ${ done? 'todoFinalized' : ''}` }
        onClick={ () => onToggleTodo( id ) }
        >
            <span 
                className={ `align-self-center ${ done? 'text-decoration-line-through' : '' }` }> {description} </span>
            <button
                onClick={ () => onDeleteTodo( id ) } 
                className="btn btn-danger" >Borrar</button>
        </li>
    )
}
