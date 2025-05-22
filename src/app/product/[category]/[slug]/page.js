import Image from 'next/image'

export const metadata = {
    title: "MyShops title",
    description: "Myshops desc",
    openGraph: {
      title: "MyShops title",
      description: "Myshops desc",
      images: [
        {
          url: "https://myshops.az/images/logo.png",
          width: 800,
          height: 600,
        },
      ],
    },
  };
  
const page = () => {
  return (
    <div>
      PRODUCT DETAILS
      <Image 
      src="https://myshops.az/images/logo.png" 
      width={1000} 
      height={400}
      alt='my shops logo'
      
      />
    </div>
  )
}

export default page
