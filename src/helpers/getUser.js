import axios from 'axios';

export const getUser = async(userSearch) => {
   if(userSearch != undefined){
    let url = `https://api.github.com/users/${userSearch}`
    const resp =  await axios.get(url)
       return resp.data  
  }
   else{
    return;
   }
  }
     
