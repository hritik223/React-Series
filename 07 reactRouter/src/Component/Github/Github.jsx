import React from 'react'
import { useState, useEffect } from "react";
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data= useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hritik223/followers')
    //         .then(response => response.json())
    //         .then(Data => {
    //             console.log(Data);
    //             setData(Data)
    //         })
    // }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers: {data.length}
    <img src={"https://avatars.githubusercontent.com/u/193727883?v=4"} alt="Git Picture" width={300} />
    
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hritik223/followers')
    return response.json()
}