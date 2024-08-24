import Link from "next/link"
import React from "react"

const NavBar = () => {
    return(
        <nav className="flex justify-between bg-slate-900 px-4 py-4">
            <Link href={"/"} className="text-white px-4 py-1 rounded-sm hover:bg-slate-600 font-bold text-2xl">TodoList</Link>
            <Link href={"/addTodo"} className="bg-white flex items-center px-4 py-1 text-sm font-semi-bold">Add Todo</Link>
        </nav>
    )
}

export default NavBar;