import style from './taskList.module.scss'
import React from 'react';
import { useState } from 'react'
import { Todo } from '../../@types/todo.type'


interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos } = props

  return (
    <div>
      <div className='mb-2'>
        <h2 className={style.title}>{doneTaskList ? 'Hoàn Thành' : 'Chưa Hoàn Thành'}</h2>
        <div className={style.tasks}>
          {todos.map((todo) => (
            <div className={style.task} key={todo.id}>
              <input type='checkbox' className={style.taskCheckbox} />
              <span className={style.taskName}>{todo.name}</span>
              <div className={style.taskActions}>
                <button className={style.taskBtn}>🖊️</button>
                <button className={style.taskBtn}>🗑️</button>
              </div>
            </div>
          ))}
          {/* {todos.map((todo, index) => (
            <React.Fragment key={index}>
              <div className={style.task}>
                <input type='checkbox' className={style.taskCheckbox} />
                <span className={style.taskName}>{todo.name}</span>
                <div className={style.taskActions}>
                  <button className={style.taskBtn}>🖊️</button>
                  <button className={style.taskBtn}>🗑️</button>
                </div>
              </div>
            </React.Fragment>
          ))} */}
          {/* <div className={style.task}>
          <input type='checkbox' className={style.taskCheckbox} />
          <span className={style.taskName} >Hoc bài</span>
          <div className={style.taskActions}>
            <button className={style.taskBtn}>🖊️</button>
            <button className={style.taskBtn}>🗑️</button>
          </div>
        </div> */}
        </div>
        <div className={style.tasks}>
          <div className={style.task}>
            <input type='checkbox' className={style.taskCheckbox} />
            <span className={`${style.taskName} ${style.taskNameDone}`}>Hoc bài</span>
            <div className={style.taskActions}>
              <button className={style.taskBtn}>🖊️</button>
              <button className={style.taskBtn}>🗑️</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
