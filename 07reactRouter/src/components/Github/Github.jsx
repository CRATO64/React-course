import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  /*
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/CRATO64')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setData(data)
    })
  }, [])
  */
  return (
    <div className='w-full'> 
      <div className='flex justify-center items-center m-10'>
        <a className='w-48 mr-5 sm:block hidden' href="https://github.com/CRATO64">
          <img src="https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png" alt="GitHub" />
        </a>
        <a className='w-48 ml-5 justify-center' href="https://github.com/CRATO64">
          <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Github" />
        </a>
      </div>
      {/*
      <div className='bg-slate-100 p-4 flex flex-wrap items-center'>
        <div className='w-60'>
          <img className='rounded-full' src={data.avatar_url} alt="Git picture"/>
        </div>
        <div className=''>
          <h1>GitHub Followers: </h1>
          <ul>
            <li>
              GitHub UserName
            </li>
          </ul>
        </div>
      </div>
      */}
      <div className="flex items-center justify-center bg-slate-50 p-6 rounded-lg max-w-4xl mx-auto mb-10">
        <img 
          src={data.avatar_url}
          alt="GitHub profile picture" 
          class="w-48 h-48 rounded-full object-cover mr-8"
        />
        <div className="text-lg text-gray-800">
          <p className="mb-1">GitHub Followers: <span class="font-semibold">{data.followers}</span></p>
          <p className='mb-1'>GitHub UserName: <span class="font-semibold">{data.login}</span></p>
          <p>GitHub Name: <span class="font-semibold">{data.name}</span></p>
        </div>
      </div>

    </div>
  )
}

export default Github

export const githubInfo = async () => {
  const response = await fetch('https://api.github.com/users/CRATO64')
  return response.json()
}