import RowListItem from "./RowListItem/RowListItem"
import Scroller from '@enact/sandstone/Scroller';
import axios from 'axios';
import { useEffect, useState } from "react";

const RowList = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://tue0305.github.io/recipes.json").then(res => {
            const keys = Object.keys(res.data);
            const map = new Map();
            keys.forEach(key => {
                map.set(key, res.data[key])
            })
            setData(Array.from(map.values()))
        }
        ).catch(err => {
            console.log(err)
        })
    }, [])
    console.log(data);
    return <>
        <div {...props}>
            {data && data?.map((items, index) => (<Scroller key={index} horizontalScrollbar="hidden">
                <div style={{ display: "flex" }}>
                    {items.map((item, index) => {
                        return <RowListItem key={index} title={item.title} thumbnail={item.thumbnail} longDescription={item.longDescription} />
                    })}
                </div>
            </Scroller>))}
        </div>
    </>


}
export default RowList