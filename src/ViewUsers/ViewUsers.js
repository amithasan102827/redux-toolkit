import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../app/counter/userSlice';

export const ViewUsers = () => {

    const {isLoading,users,error} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    },[])

  return (
      <div>
          <h1>ViewUsers</h1>
          {isLoading && <h4>loading...</h4>}
          {error && <h4>Error found</h4>}
          {
              users && users.map(user => {
                 return <div style={{border:'2px solid green',margin:'auto',width:'50%', padding:'20px'}}>
                      <h3>{user.id}</h3>
                     <h4>{user.name}</h4>
                     <h5>{user.email}</h5>
                     
                     <Link to={`ViewUserDetails/${user.id}`}><button>Details</button></Link>
                  </div>
              })


            //   users && <div>
            //       {
            //           <>
            //               <h2> Id:{users.id}</h2>
            //            <h4> title:{users.name}</h4>
            //               <p>Description:{users.email}</p>
            //           </>

            //       }
            //   </div>
              
              
          }
    </div>
  )
}
