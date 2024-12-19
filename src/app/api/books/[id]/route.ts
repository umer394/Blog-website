import { data } from "framer-motion/client";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

const books = [{
    id:1,
    name:"umer",
    book:"maths"
},
{
    id:2,
    name:"ali",
    book:"math"
}]

export const GET = async (request:NextRequest,{params,}:{params:Promise<{id:string}>}) => {
    
    const data = await params
    const book = books.find((u)=> u.id === parseInt(data.id))
    return NextResponse.json({book:book})
}