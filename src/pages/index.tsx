import { useState } from 'react'
import Head from 'next/head'
import Intro from '@/components/Intro'
import Sidebar from '@/components/Sidebar'
import Chat from '@/components/Chat'

export default function Home() {
  const [chatting, setChatting] = useState<boolean>(false)
  return (
    <>
      <Head>
        <title>MemeGPT</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Meme generated website by Open Ai"/>
        <meta name="keywords" content="Meme, ChatGPT"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <main className='flex'>
        <Sidebar setChatting={setChatting}/>
        {chatting?
          <Chat/> :
          <Intro setChatting={setChatting}/>
        }
      </main>
    </>
  )
}
