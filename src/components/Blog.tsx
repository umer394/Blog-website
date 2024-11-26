"use client"
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import Image from "next/image";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
export default function BlogPage(){
    return (
        <main >
            
           <section className="bg-pic bg-no-repeat bg-cover h-[20vh] md:h-[90vh] min-h-screen w-full bg-bottom">
                <Navbar/>
            <div className="pt-18 mx-32">

                <h1 className="text-8xl font-bold text-white">Cars Blog</h1> 
                <TextGenerateEffect className="max-w-md"  duration={2} filter={false} words={words} />
                <div className="flex justify-center items-center pt-48">
                    <Button variant={"secondary"}>Explore Blog</Button>
                </div>
               
            </div>
            
           </section>
           
           
        </main>
    )
}
