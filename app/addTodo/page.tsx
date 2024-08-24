"use client"
import { useState, FormEvent } from "react";
import { createTodo } from "../../actions/todoActions";

const AddTodo = () => {
    const [title, setTitle] = useState<string>("");
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!title) {
            alert('Task name is required');
            return;
        }
        try {
            await createTodo(title);
            setTitle("");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col pt-4 gap-4">
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Enter task title" 
                className="px-4 py-4 font-semibold border text-lg"
            />
            <button type="submit" className="px-6 py-4 bg-green-800 text-white text-xl fond-bold">Add Todo</button>
        </form>
    );
}

export default AddTodo;