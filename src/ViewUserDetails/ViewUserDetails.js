import React from 'react'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { fetchUsersDetails } from '../app/counter/userDetailSlice'

export const ViewUserDetails = () => {
    const { detailsId}=useParams();
    const { isLoading, userDetails, error } = useSelector((state) => (state.userDetails));
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersDetails(detailsId))
    },[])

    
  return (
      <div>
          <h1>ViewUserDetails</h1>
          <h3>{detailsId}</h3>
          {isLoading && <h2>loading...</h2>}
          {error && <h2>Error found</h2>}
          
          {
              userDetails && <div>
                  <h3>{ userDetails.name}</h3>
                  <h3>{ userDetails.email}</h3>
              </div>
          }
    </div>
  )
}
