import Image from "next/image";


import Blog from "./blog/page";


export default async function Home() {
  const res = await fetch("http://localhost:3000/api/books",
    {
      method:"GET"
    }
  )
  const data = await res.json()
  console.log(data)
  return (
    <main>
     {/* <h1>{data[0]}</h1> */}
      
      {/* <Blog/> */}
      
    </main>
  );
}
