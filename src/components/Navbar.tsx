import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="flex p-5 justify-between items-center">
        <h1 className="font-bold font-xl text-white">UMER BLOG</h1>
        <ul className="space-x-2">
            <Link href={""}>
                <Button variant={"link"} className="text-white hover:font-bold font-xl">Blog</Button>
            </Link>
            <Link href={""}>
                <Button variant={"link"} className="text-white hover:font-bold font-xl">About</Button>
            </Link>
            <Link href={""}>
                <Button variant={"link"} className="text-white hover:font-bold font-xl">Contact</Button>
            </Link>
            
        </ul>
        
    </header>
  )
}
