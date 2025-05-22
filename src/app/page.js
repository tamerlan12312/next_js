import Link from 'next/link'
import React from 'react'

export const metadata = {
  title:"Home page",
  description:"Home Description"
}

const Home = () => {
  return (
   <>
    <div>
    HOME PAGE
    <Link href="/about">Haqqimizda sehifesine kecid</Link>
     <br/>
    <Link href="/product">Mehsullara kecid</Link>
    </div>
   </>
  )
}

export default Home
