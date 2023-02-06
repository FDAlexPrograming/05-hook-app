import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm ({
    description: '',
  });

  const onFormSubmit = ( event ) => {
    event.preventDefault();
    if ( description.trim().length <= 0 ) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    }


    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <>
        <h4>Agregar TODO</h4>
        <hr />
        <form onSubmit={ onFormSubmit } >
            <input 
              type="text" 
              placeholder="¿Què hay para hacer?"
              className="form-control"
              name="description"
              value={ description }
              onChange= { onInputChange }
            />
            <button type="submit" className="btn btn-outline-primary mt-4">Agregar</button>
        </form>
    </>
  )
}
