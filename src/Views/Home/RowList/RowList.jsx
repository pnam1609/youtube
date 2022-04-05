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
            setData(Array.from(map))
        }
        ).catch(err => {
            console.log(err)
        })
    }, [])
    console.log(data);
    return <>
        <div {...props}>
            {data && data?.map((element, index) => {
                const [title, collections] = element;
                return (
                    <div>
                        <h3 style={{paddingLeft:"25px",marginBottom:"5px"}}>{title}</h3>
                        <Scroller key={index} horizontalScrollbar="hidden">
                            <div style={{ display: "flex" }}>
                                {collections.map((item, index) => {
                                    return <RowListItem key={index} title={item.title} thumbnail={item.thumbnail} longDescription={item.longDescription} />
                                })}
                            </div>
                        </Scroller>
                    </div>
                )
            })}
        </div>
    </>


}
export default RowList