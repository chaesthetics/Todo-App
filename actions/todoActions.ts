"use server"
import { PrismaClient, Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache';
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
    revalidatePath("/")
}