"use server"
import { PrismaClient, Prisma } from '@prisma/client'
import { redirect } from 'next/navigation';

const prisma = new PrismaClient()

interface todoInput{
    id: String,
    title: String,
    isCompleted: Boolean,
}

export async function createTodo(title:any) {
    await prisma.todo.create({
        data:{
            title: title,
        },
    });
    redirect('/');
}

export async function getAllList(){
    const data = await prisma.todo.findMany({
        orderBy:{
            createdAt:"desc",
        }
    });
    return data;
}

export async function removeToList(id:any){
    const itemId = id as string;
    await prisma.todo.delete({
        where:{
            id : itemId,
        },
    });
}

export async function completeTask(id:any){
    const itemId = id as string;
    await prisma.todo.update({
        where: {
            id: itemId
        },
        data:{
            isCompleted: true,
        },
    });
}

export async function unCompleteTask(id:any){
    const itemId = id as string;
    await prisma.todo.update({
        where: {
            id: itemId
        },
        data:{
            isCompleted: false,
        },
    });
}

export async function updateTodo(id:any, title:any){
    const itemId = id as string;
    await prisma.todo.update({
        where:{
            id : itemId
        },
        data:{
            title: title
        },
    });
    redirect('/');
}

export async function getTodo(id:any){
    const itemId = id as string;
    const task = await prisma.todo.findFirst({
        where:{
            id : itemId,
        }
    })
    return task;
}