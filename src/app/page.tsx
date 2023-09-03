import Link from 'next/link'
import { prisma } from '@/db/db'
import TodoItem from '@/components/TodoItem'

// Asynchronous process returns a promise
function getTodos() {
    return prisma.todo.findMany()
}
async function toggleTodo(title:string, id: string, complete: boolean) {
    "use server"
    console.log(`${complete ? "checked" : "unchecked"} -> ${title},${id}`)
    await prisma.todo.update({where: {id}, data: {complete}})
}
export default async function Home() {
    // await prisma.todo.create({data : {title: "test", complete: false}}) // fake todo
    const todos = await getTodos() // awaiting the promise
    return (
        <>
            <header className="flex items-center justify-between mb-12">
                <h1 className="text-3xl">Todos</h1>
                <Link className="border border-slate-300 text-slate-300 p-2 rounded outline-none hover:bg-slate-700 focus-within:bg-slate-700" href="/new">New</Link>
            </header>
            <ul className='space-y-2'>
                {todos.map(todo => (
                    <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
                ))}

            </ul>
        </>
    )
}
