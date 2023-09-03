import React from 'react'
import Link from 'next/link'
import { prisma } from '@/db/db'
import { redirect } from 'next/navigation'

async function createTodo(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf()
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title")
  }

  await prisma.todo.create({ data: { title, complete: false } })
  redirect('/')
}
const page = () => {
  return (
    <>
      <header className='flex justify-between items-center mb-12'>
        <h1 className='text-3xl'>
          Add New Todo
        </h1>
      </header>
      <form action={createTodo} className='flex flex-col gap-4'>
        <input
          type='text'
          name="title"
          className='border border-slate-300 bg-transparent rounded p-2 outline-none focus-within:border-slate-300'
        />
        <div className='flex gap-2 justify-end'>
          <Link href=".."
            className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none hover:bg-slate-700 focus-within:border-slate-300'
          >Cancel</Link>
          <button type='submit'

            className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none hover:bg-slate-700 focus-within:border-slate-300'
          >Create</button>
        </div>
      </form>
    </>
  )
}

export default page
