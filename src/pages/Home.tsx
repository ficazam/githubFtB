import React from 'react'
import { UserList } from '../components/users/UserList'
import { UserSearch } from '../components/users/UserSearch'
import { Alert } from '../components/Layout/Alert'

export const Home = () => {
  return (
    <>
      <Alert />
      <UserSearch />
      <UserList />
    </>
  )
}
