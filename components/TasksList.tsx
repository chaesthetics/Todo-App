import Removebtn from "@/components/Removebtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const TaskList = (props: any) => {
    const date = new Date(props.todo.createdAt);
    const month = date.getMonth() + 1;
    const day = date;
    const year = date.getFullYear();

    return(
        <div className="flex justify-between items-start px-8 border rounded-xl py-6 my-3 shadow-sm hover:cursor-pointer hover:bg-yellow-800 animation-200 duration-200">
            <div className="gap-2">
                <h2 className="text-2xl font-bold">{props.todo.title}</h2>
                <div>{`${day}`}</div>
            </div>
            <div className="flex gap-2">
                <Removebtn />
                <Link href={"/editTodo/123"}><HiPencilAlt size={24}/></Link>
            </div>
        </div>  
    )
}

export default TaskList;