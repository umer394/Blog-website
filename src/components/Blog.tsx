"use client"
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import Image from "next/image";
import { useEffect } from "react";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
export default function BlogPage(){
    useEffect(()=>{
       
    },[])
    return (
        <main className="relative bg-black grid grid-cols-2 items-center">
            <section className=" mx-10 max-w-lg">
                <h1 className="text-8xl font-bold text-white">Cars Blog</h1> 
                    <TextGenerateEffect className="max-w-md"  duration={2} filter={false} words={words} />
                    <div className="flex justify-center items-center pt-16">
                        <Button variant={"secondary"}>Explore Blog</Button>
                    </div>
            </section>
            <section className="bg-pic bg-no-repeat bg-center md:h-[80vh] flex justify-center items-center group" style={{
                backgroundSize:"500px"
            }}>
                
                <div className="max-w-[250px] flex justify-center items-center" >
                <Image src={"/leftlight.png"} alt={"left"} width={760} height={300} className="absolute opacity-0 transition-opacity group-hover:opacity-100"/>        
                <Image src={"/rightlight.png"} alt={"left"} width={780} height={300} className="absolute opacity-0 transition-opacity group-hover:opacity-100"/> 
                </div>
                
                
                       
             
            
            </section>
           
           
        </main>
    )
}
