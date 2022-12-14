import Link from 'next/link'
import {useState, useEffect} from 'react'
import MainContainer from '../components/MainContainer'


const Users = ({users}) => {

    return (
      <MainContainer keywords={'users page'}>
        <h1>Пользователи</h1>

        <ul>
          {users.map((user, item) =>

              <li key = {user.id}>
                <Link href = {`/users/${user.id}`}>
                  <a>{user.name}</a>
                </Link>
              </li>
          )}
        </ul>
        </MainContainer>
    )
}

export default Users


export async function getStaticProps(context) {

  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: {users},
  }
}