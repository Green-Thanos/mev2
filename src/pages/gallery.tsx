import Image from 'next/image'
import { useState } from 'react'
import fs from "fs";
import Modal from "components/modal";

const imgs = [
// { imgSrc: "/assets/photos/IMG_7819.jpg"},
 { imgSrc: "https://images.unsplash.com/photo-1513866717996-6c19fd870937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" },
 { imgSrc: "https://images.unsplash.com/photo-1505771215590-c5fa0aec29b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" },
 { imgSrc: "https://images.unsplash.com/photo-1583483547183-d9c10c10f044?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5pZ2h0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60" },
 { imgSrc: "https://images.unsplash.com/photo-1505211903548-bcbdfae1a1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0cnl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" },
 { imgSrc: "https://images.unsplash.com/photo-1536553859107-fc180c4ad6ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0cnl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" },
 { imgSrc: "https://images.unsplash.com/photo-1512547782667-4786bfbd0754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxpZ2h0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"  },
 { imgSrc: "https://images.unsplash.com/photo-1597060330071-69c1ac998254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"  },
 { imgSrc: "https://images.unsplash.com/photo-1496034663057-6245f11be793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"  },
 { imgSrc: "https://images.unsplash.com/photo-1606277354356-e8b73c62082c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60"  },
 { imgSrc: "https://images.unsplash.com/photo-1507889755798-84f75bd07d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhaW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" },
 { imgSrc: "https://images.unsplash.com/photo-1497178398528-7ff4a4bad7ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHN1bnNldHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60" },
]

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Image = {
  id?: number
  href?: string
  imageSrc: string
  name?: string
  username?: string
}

export default function Gallery() {
  return (
    <>
       <div className="flex justify-center items-center pt-20">
          <div className="columns-3">

            {imgs.map((image) => (
              <div className="pb-4 hover:opacity-90">
                <BlurImage imageSrc={image.imgSrc} />
              </div>
            ))}
            
            <h1 className="border-2 border-rose-500">bruh</h1>
            </div>
       </div>
    </>
  )
}

function BlurImage(props) {
  const [isLoading, setLoading] = useState(true)

  return (
    // <a href={image.href} className="group">
      <div className="overflow-hidden">
        {/* <Image
          alt=""
          src={props.imageSrc}
          layout="fill"
          objectFit="contain"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        /> */}
        <img src={props.imageSrc} alt="" />
      </div>
   //  </a>
  )
}