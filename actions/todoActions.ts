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