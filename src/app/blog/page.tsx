
import BlogPage from "@/components/Blog";
// import Navbar from "@/components/Navbar";
// import { Button } from "@/components/ui/button";
import { CardDemo } from "@/components/ui/Card";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import Image from "next/image";


export default function Blog(){
    return (
        <main >
            <BlogPage/>
            <div className="bg-[#161616]  py-20   " id="Card">
                <div className="max-w-[1200px] mx-auto">
                <CardDemo/>

                </div>
                
            </div>
        </main>
    )
}
