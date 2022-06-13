import type { NextPage } from 'next'
<<<<<<< HEAD
import Head from 'next/head'
import Image from 'next/image'
import Search from './components/search'
=======
import axios from "axios"
import { ArticlesContainer } from './components/container';
import {SearchBar} from "./components/search"

import { useEffect,useState } from 'react';





const Home: NextPage = () => {  

  const [all,setAll]=useState(true)
  const [options,setOptions]=useState({url:'http://localhost:4000/articles',orderField:'title',orderType:'ASC',offset:0,limit:3})
  const [articles,setArticles]=useState([])




  useEffect(()=>{
        
    window.addEventListener('scroll',(e)=>{
      if(window.innerHeight+window.scrollY>=document.body.offsetHeight){
        
        setOptions({...options,offset:options.offset+options.limit})
        

      }
    })


    
  })


>>>>>>> bd56085ba6f40fa5c5b4399f2dd99c570c8d463f

  return (
<<<<<<< HEAD
    <div className="flex min-h-screen flex-col items-center justify-center px-10 py-2">      
      <h1 className='text-5xl font-bold'>Article Publishing App</h1>  
      <Search/>  
    </div> 
=======
    <div className="flex min-h-screen justify-between items-start w-[100%]  ">
    <div className='flex-[0.75] flex flex-col px-4 py-5 self-center space-y-5  '>

    <div className="flex flex-col items-center  ">

<div className="flex  px-2 py-2 space-x-3 w-[720px] ">

<button className={`text-base transition duration-200 ${all?'text-primary ':'text-quarternary '}`} onClick={()=>{setAll(true); setArticles([]); setOptions(!all?{url:'http://localhost:4000/articles',orderField:'title',orderType:'ASC',offset:0,limit:3}:{url:'http://localhost:4000/articles',orderField:'createdAt',orderType:'DESC',limit:3,offset:0})}}>All Articles</button>

<button className={`text-base transition duration-200 ${!all?'text-primary ':'text-quarternary '}`} onClick={()=>{setAll(false); setArticles([]); setOptions(!all?{url:'http://localhost:4000/articles',orderField:'title',orderType:'ASC',offset:0,limit:3}:{url:'http://localhost:4000/articles',orderField:'createdAt',orderType:'DESC',limit:3,offset:0})} }>New Articles</button>

</div>
</div>

    <ArticlesContainer all={all} options={options} articles={articles} setArticles={setArticles}/>

    </div>

    {/* <SearchBar articles={data.result}/> */}
      
    </div>
>>>>>>> bd56085ba6f40fa5c5b4399f2dd99c570c8d463f
  )
  }




export default Home