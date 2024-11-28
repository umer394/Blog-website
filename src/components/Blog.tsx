"use client"
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


import Image from "next/image";

import { useEffect } from "react";

const words = `Welcome to our car enthusiast's haven! Dive into the world of speed, style, and innovation. Explore the latest car reviews, industry insights, and expert tips to fuel your passion for driving. Whether you're a speed chaser or a luxury lover, we have something for everyone!
`;
export default function BlogPage(){
    
    return (
        <main className="relative bg-[#161616]" >
            <div className=" max-w-[1200px] mx-auto grid grid-cols-2  items-center ">
            <section className="lg:pr-20 max-w-lg lg:max-w-xl">
                <h1 className="text-5xl font-bold text-white font-serif">Experience the Thrill of Driving</h1> 
                    <TextGenerateEffect className=""  duration={2} filter={false} words={words} />
                    <div className="flex justify-content pt-10">
                        <a href="#Card"> <Button  variant={"secondary"}  className="text-white text-lg font-mono px-10 py-5 bg-[#d67e1afd] hover:bg-[#121212]">Explore Blog</Button></a>
                       
                    </div>
                    
            </section>
            <section className="bg-pic bg-no-repeat bg-center md:h-[80vh] flex justify-center items-center overflow-clip animate-bounce-soft group " style={{
                backgroundSize:"500px"
            }}>
                
                <div className="max-w-[250px] flex justify-center  items-center " >
                <Image src={"/leftlight.png"} alt={"left"} width={760} height={300} className=" absolute opacity-0 -left-[50px] lg:-left[36px] group-hover:opacity-80"/>        
                <Image src={"/ring.png"} alt={"ring"} width={600} height={300} className="absolute animate-spin  mt-20 items-center" />        
                <Image src={"/rightlight.png"} alt={"left"} width={780} height={300} className="absolute opacity-0  -right-[50px]  group-hover:opacity-80"/> 
                </div>
                
                
                       
             
            
            </section>
            </div>
          
        </main>
    )
}
