import Lista from "../components/Lista"
import { useAuth0 } from '@auth0/auth0-react';

const Listado = () => {
  const { isAuthenticated, } = useAuth0();

  return (
    <>
    {isAuthenticated ?
    <Lista /> :
    <div>Solo un usuario autenticado puede ver la lista.</div>}
    
    </>
  )
}

export default Listado