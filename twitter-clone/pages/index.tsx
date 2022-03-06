import Head from 'next/head'
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
export default function Home(){

  return (
    <div className="">
      <Head>
        <title>Shiny</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className=' flex bg-black min-h-screen  max-w-[1500px] mx-auto '>
          <Sidebar/>
          <Feed />
          {/* widgets*/}


          {/* Model*/}  
        </main>
    </div>
  )
}

 