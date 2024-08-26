"use client"
import { usePathname } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";
import { updateTodo, getTodo } from "@/actions/todoActions";

const editTodo = () => {
    const pathname = usePathname();
    const [title, setTitle] = useState<string>();

    useEffect(()=>{
        const getTask = async() => {
            const taskId = pathname.replace("/editTodo/", "");
            const todo = await getTodo(taskId);  
            setTitle(todo?.title);
        }
        getTask();
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        const taskId = pathname.replace("/editTodo/", "");
        e.preventDefault();
        if (!title) {
            alert('Task name is required');
            return;
        }
        try {
            await updateTodo(taskId, title);
            setTitle("");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col pt-4 gap-4 max-w-xl mx-auto mt-10">
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Enter task title" 
                className="px-4 py-2 font-semibold border text-lg"
            />
            <button type="submit" className="px-6 py-2 bg-green-800 text-white text-xl fond-bold">Add Todo</button>
        </form>
    );
}

export default editTodo;