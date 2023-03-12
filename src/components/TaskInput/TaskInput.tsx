import styles from './taskInput.module.scss'
import { Todo } from '../../@types/todo.type'
import { useState } from 'react'

interface TaskInputProps {
  addTodo: (name: string) => void
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo } = props
  const [name, setName] = useState<string>('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo(name)
  }
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName(value)
  }
  return (
    <div>
      <div className={styles.title}>To do list typescript</div>
      <form action='' className={styles.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='caption go here' value={name} onChange={onChangeInput} />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}
