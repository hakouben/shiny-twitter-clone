import Head from 'next/head'
import Sidebar from "../components/Sidebar"
export default function Home(){

  return (
    <div className="">
      <Head>
        <title>Shiny</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className='bg-black min-h-screen  max-w-[1500px] mx-auto '>
          <Sidebar/>
          {/* Feed*/}
          {/* widgets*/}


          {/* Model*/}  
        </main>
    </div>
  )
}

 