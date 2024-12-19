import { NextResponse } from "next/server"


export const GET = () => {
    return NextResponse.json(
        [{
            id:1,
            name:"umer",
            book:"maths"
        },
        {
            id:2,
            name:"ali",
            book:"math"
        }]
    )
}


export const POST = () => {
    //database connection
    //insert data
    return NextResponse.json(
        [{
            id:1,
            name:"umer",
            book:"maths"
        },
        {
            id:2,
            name:"ali",
            book:"math"
        }]
    )
}