import Link from "next/link"
import React from "react"
import { IoAddCircleOutline } from "react-icons/io5";

const NavBar = () => {
    return(
        <nav className="flex justify-between bg-slate-900 px-4 py-4">
            <Link href={"/"} className="text-white px-4 py-1 rounded-sm hover:bg-slate-600 font-bold text-2xl">TodoList</Link>
            <Link href={"/addTodo"} className="bg-white flex items-center px-2 py-1 text-sm font-semi-bold gap-1 rounded-sm bg-green-700 hover:bg-green-800 text-white"><IoAddCircleOutline size={24} />Add Task</Link>
        </nav>
    )
}

export default NavBar;