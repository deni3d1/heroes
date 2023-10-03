import React from 'react'
import Navbar from './../components/navbar';
import Link from 'next/link';

export const metadata = {
  title:'Heroes 🦸'
}

const heroes = async() => {

  interface HeroImage {
    md: string;
  }

  interface hero_name {
    id:number;
    name: string;
    images: HeroImage
  }  

  // const hero = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/2.json')
  const hero = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
  const a:hero_name[] = await hero.json()

  return (
    <>
      <Navbar/>
      <div className="text-center m-8 flex flex-col justify-center items-center">
        <b className="text-white text-3xl mb-8">Heroes</b>
        <div className='flex flex-wrap gap-5'>
          {
            a.map((hero) => (
            <Link key={hero.id} className='p-3 bg-blue-700 hover:bg-blue-800 hover:animate-pulse rounded-md text-white items-center gap-5 flex' href='/'>
              <img src={hero.images.md} className='w-10 h-10 rounded-full' alt={hero.name} />
              {hero.name}
            </Link>
          ))
          }
        </div>
      </div>
    </>
  )
}

export default heroes