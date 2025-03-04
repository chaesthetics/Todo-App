import { HiOutlineTrash } from "react-icons/hi";
import { removeToList } from "@/actions/todoActions";

export default function Removebtn(props:any){
    const handleRemoveClick = async(event:any) => {
        event.stopPropagation();
        console.log(props.id);
        await removeToList(props.id);
        const getAllTask =  props.func;
        await getAllTask;
    }
    return(
        <button className="z-50" onClick={handleRemoveClick}>
            <HiOutlineTrash size={24}/>
        </button>
    )
}