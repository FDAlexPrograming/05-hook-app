import { UserContext } from "./UserContext"

const user = {
    id: 123,
    nombre: 'Alex',
    apellido: 'Farias dos Santos',
    email: 'fariasdossantosalex@gmail.com',
}

export const UserProvider = ({ children }) => {
  return (
  <UserContext.Provider value={{ hola:'Mundo', user }}>
    { children }
  </UserContext.Provider>
  )
}
