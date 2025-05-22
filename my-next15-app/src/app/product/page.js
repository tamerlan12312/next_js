import React from 'react'
import { products } from '../data/products'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      Məhsullar
      {
        products.map((item)=>{
            return <div key={item.id}>
                <br/>
                {
                    item.children?.length > 0 && item.children?.map((i)=>{
                        return <div key={i.id}>
                            <br/>
                            <Link href={`/product/${item.slug}/${i.slug}`} key={i.id}>{i.title} {item.id}</Link>
                            <br/>
                            </div>
                    })
                }
                <br/>
                <br/>
                 </div>
        })
      }
    </div>
  )
}

export default page
