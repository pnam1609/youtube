import RowListItem from "./RowListItem/RowListItem"
import Scroller from '@enact/sandstone/Scroller';
import axios from 'axios';
import { useEffect, useState } from "react";
import React from 'react'
import Topbar from "../../../Components/TopBar";

const RowList = React.memo((props) => {
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get("https://tue0305.github.io/recipes.json").then(res => setData(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [])

    const rederData = () => {
        const dataRender = []
        for (let title in data) {
            dataRender.push(
                <div>
                    <h3 style={{ paddingLeft: "25px", marginBottom: "5px" }}>{title}</h3>
                    <Scroller horizontalScrollbar="hidden">
                        <div style={{ display: "flex" }}>
                            {data[title].map((item, index) => {
                                return <RowListItem key={index} title={item.title} thumbnail={item.thumbnail} longDescription={item.longDescription} />
                            })}
                        </div>
                    </Scroller>
                </div>
            )
        }
        return dataRender
    }
    return <>
        <div {...props}>
            <Topbar />
            {data && rederData()}
        </div>
    </>
})
export default RowList