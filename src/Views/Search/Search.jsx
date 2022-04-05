import {React, useEffect, useState } from 'react'
import {InputField} from '@enact/sandstone/Input';
import SearchItem from './SearchItem/SearchItem';
import axios from 'axios';

function Search() {
    const [data, setData] = useState({})
    const [complete, setComplete] = useState("")
    useEffect(() => {
        axios.get("https://tue0305.github.io/recipes.json")
            .then(res => setData(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleComplete = (e)=>{
        
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Search</h1>
        <InputField
            dismissOnEnter="true"
        
            style={{fontSize:20, width:600}}
            placeholder='Search'
            type='text'
            onChange={handleComplete}
        />
        <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto", width:"65%", margin: "auto", paddingTop:"50px"}}>
            {data["Hot pot"]?.map((item,index)=>{
                return <SearchItem key={index} thumbnail={item.thumbnail} title={item.title} longDescription={item.longDescription} />
            })}
        </div>
    </div>
  )
}

export default Search