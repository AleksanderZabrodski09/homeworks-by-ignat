import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void // need to fix any
  error: string | null // need to fix any
  totalUsers: number // need to fix any
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers, onKeyPress} // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : '' // need to fix with (?:)

  return (
    <div>
      <div>
        <input
          value={name}
          onChange={setNameCallback}
          onKeyPress={onKeyPress}
          className={inputClass}
          onBlur={setNameCallback}/>
        <div className={s.errorMessage}>{error}</div>
      </div>
      <button onClick={addUser} disabled={!name}>add</button>
      {error && <div className={s.errorMessage}>{error}</div>}
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
