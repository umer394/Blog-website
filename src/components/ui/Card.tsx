"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { carData } from "../data/content";
import { style } from "framer-motion/client";
import Link from "next/link";

export function CardDemo() {
  return (
    <div className=" w-full group/card grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {carData.map((item)=>{
        return (

        
      
      <div key={item.id}
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-md shadow-black  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          " bg-cover"
        
        )}
        style={{backgroundImage:`url('${item.img}')`}}
      >
        <Link href={""} >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 hover:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height={200}
            width={800}
            alt="Avatar"
            src={item.img}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {item.name}
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {item.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {item.description}
          </p>
        </div>
        </Link>
      </div>
      )})}
    </div>
  );
}

