"use client"
import Removebtn from "@/components/Removebtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { completeTask, unCompleteTask } from "@/actions/todoActions";

const TaskList = (props: any) => {
    const date = new Date(props.todo.createdAt);

    const handleCompleteNess = async() => {
        if(props.todo.isCompleted){
            await unCompleteTask(props.todo.id);
        }else{
            await completeTask(props.todo.id);
        }
    }

    const stopPropagation = (Event:any) => {
        Event.stopPropagation();
    }

    return(
        <div onClick={handleCompleteNess} className={"flex z-10 shadow relative justify-between items-start px-8 border rounded-xl py-6 my-3 shadow-sm hover:cursor-pointer hover:bg-green-300 animation-200 duration-200 " + (!props.todo.isCompleted ? 'bg-white' : 'bg-green-700')}>
            <div className="gap-2">
                {!props.todo.isCompleted ? <h2 className="text-xl font-bold">{props.todo.title}</h2> 
                : <h2 className="text-xl font-bold line-through">{props.todo.title}</h2>}
                {props.todo.isCompleted ? <div className="line-through">{`${date}`}</div> : <div>{`${date}`}</div> }
            </div>
            <div className="flex gap-2">
                <Removebtn id={props.todo.id} func={props.func}/>
                <Link href={`/editTodo/${props.todo.id}`} onClick={stopPropagation}><HiPencilAlt size={24}/></Link>
            </div>
            {
                props.todo.isCompleted && <div className="text-white font-semibold absolute bottom-2 right-4">COMPLETED</div>
            }
        </div>  
    )
}

export default TaskList;