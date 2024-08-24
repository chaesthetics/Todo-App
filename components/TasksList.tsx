import Removebtn from "@/components/Removebtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const TaskList = () => {
    return(
        <>
        <div className="flex justify-between items-start px-4 border border-2 py-2 my-3 shadow-sm">
            <div>
                <h2 className="text-2xl font-bold">Task Name</h2>
                <div>Is Completed? </div>
            </div>
            <div className="flex gap-2">
                <Removebtn />
                <Link href={"/editTodo/123"}><HiPencilAlt size={24}/></Link>
            </div>
        </div>
        </>     
    )
}

export default TaskList;