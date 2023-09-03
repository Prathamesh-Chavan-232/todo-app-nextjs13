"use client"

type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (title:string, id:string, complete:boolean)=> void
}

const TodoItem = ({ id, title, complete, toggleTodo}: TodoItemProps) => {
  return (
    <li className='p-4 bg-slate-700 rounded flex gap-4 items-center'>
      <input id={id} type='checkbox' className='cursor-pointer peer' defaultChecked={complete}
onChange={e => toggleTodo(title, id, e.target.checked)}
      />
      <label htmlFor={id} className='text-2xl peer-checked:line-through peer-checked:text-slate-500'>{title}</label>
    </li>
  )
}

export default TodoItem
