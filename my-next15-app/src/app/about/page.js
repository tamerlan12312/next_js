import Link from 'next/link'
import React from 'react'

export const metadata = {
    title:"About",
    description:"About sehifesi"
}



const AboutPage = () => {
  return (
    <div>
       About sehifesi
       <Link href="/about/contact">Contact sehifesine kecid</Link>
    </div>
  )
}

export default AboutPage
