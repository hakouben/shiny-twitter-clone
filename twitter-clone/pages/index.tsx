import Head from 'next/head'
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import { getProviders, getSession , useSession} from "next-auth/react"
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
export async function getServerSideProps() {
   const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
     (res) => res.json()
   );
   const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
     (res) => res.json()
   );
   const providers = await getProviders();
   const session = await getSession(context);
   return {
     props: {
       trendingResults,
       followResults,
       providers,
       session,
     }
   }

}

 