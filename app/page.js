"use client"
import Image from 'next/image'
import { useState } from 'react';
import searchImages from './api/api'
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
export default function Home() {
  const [images,setImages]=useState([]);
  
  const handleSubmit=async(term)=>{
    const data= await searchImages(term);
    setImages(data);
    return data;
  }
  //console.log(images);
 
    return (
    <main className='flex w-full justify-center items-center flex-col'>
      <div className='flex w-2/5 flex-col justify-center items-center py-6'>
        <h1 className='text-3xl text-info'>Next.js 13 İle Resim Arama Uygulaması</h1>
        <SearchBar onSubmit={handleSubmit}/>
      </div>
      <ImageList images={images}/>
    </main>
  )
}
