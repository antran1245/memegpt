import Intro from '@/components/Intro'
import Sidebar from '@/components/Sidebar'
import Head from 'next/head'

export default function Home() {
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
        <Sidebar/>
        <Intro/>
      </main>
    </>
  )
}
