
import TaskList from "@/components/TasksList"
import prisma from "@/lib/db";

export default async function Home() {
  const todos = await prisma.todo.findMany({
    orderBy:{
      createdAt: "desc"
    },
  });
  return (
    <>
    { todos && todos.map((todo:any, key:number)=>(
      <div key={key}>
        <TaskList todo={todo}/>
      </div>
    ))}
    </>
  )
}
