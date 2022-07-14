import React, {useState, ChangeEvent, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
  users: UserType[] // need to fix any
  addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string>('') // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
    const trimName = e.currentTarget.value.trim()
    if (trimName) {
      setName(trimName)
      error && setError('')

    } else {
      name && setName('')
      setError('Name is required')
    }
    // need to fix
  }
  const addUser = () => {
    addUserCallback(name.trim())
    alert(`Hello ${name} !`)
    setName('')
  }
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    setError('')
    if (e.key === 'Enter' && name) {
      addUser()
    }
  }
  const totalUsers = users.length
  // let totalUsers: number = 0 // need to fix
  // for (let i = 0; i < users.length; i++) {
  //   totalUsers += 1
  // }
  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
      onKeyPress={onKeyPress}
    />
  )
}

export default GreetingContainer
