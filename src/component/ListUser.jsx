import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import CardUse from './CardUse';
function ListUser() {
  const [post,setPost]=useState([])

  useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res=>{
  console.log("res,res",res.data)
  setPost(res.data)
})
  .catch(err=>{console.log(err)})

  },[])


  return (
    <div className="list">
      
      {post.map((e)=> <CardUse  use={e}/>)}
      
    </div>
  );
}

export default ListUser;
