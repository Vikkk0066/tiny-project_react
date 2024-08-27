import React from 'react'

const UserContextProvider = ({children}) => {
    const [user, setUser] =  react.setState(null)
  return (
    <userContext.provider value = {{user, setUser}}>
      <login />
    </userContext.provider>
  )
}

export default UserContextProvider
