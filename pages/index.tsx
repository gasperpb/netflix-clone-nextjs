import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Nav from '../components/nav'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
    
      </Head>
      <Header />
  
      <main>
        <Nav/>
        {/*Banner */}
       
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>

      </main>
      {/* Modal */}
</div>
  )
}

export default Home
