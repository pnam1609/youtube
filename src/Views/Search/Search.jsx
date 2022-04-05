import {React, useEffect, useState } from 'react'
import {InputField,InputPopup} from '@enact/sandstone/Input';
import SearchItem from './SearchItem/SearchItem';
import axios from 'axios';

function Search() {
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get("https://tue0305.github.io/recipes.json")
            .then(res => setData(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [])
  return (
    <div style={{textAlign:'center'}}>
        <h1>Search</h1>
        <InputField
            style={{fontSize:20, width:600}}
            placeholder='Search'
            type='text'
        />
        <div>
            {data[0].map((item,index)=>{
                return <SearchItem key={index} thumbnail={item.thumbnail} title={item.title} longDescription={item.longDescription} />
            })}
        </div>
    </div>
  )
}

export default Search