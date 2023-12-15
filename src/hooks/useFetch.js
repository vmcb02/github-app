import { useEffect, useState } from 'react';
import { getUser } from '../helpers/getUser';

export const useFetch = ( ) => {

 const [state, setState] = useState({});
  
 const onUser = async(userSearch) => {
   const user = await getUser(userSearch)
   setState( user )
 }


useEffect(() => {
  onUser()

}, [])


return {
    state,
    onUser
};

}