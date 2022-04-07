import RowListItem from "./RowListItem/RowListItem"
import Scroller from '@enact/sandstone/Scroller';
import axios from 'axios';
import { useEffect, useState } from "react";
import React from 'react'
import Topbar from "../../../Components/TopBar";
import { setVideoItem } from "../../VideoPlayer/VideoPlayerSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RowList = React.memo((props) => {
    const [data, setData] = useState({})
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get("https://tue0305.github.io/recipes.json").then(res => setData(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [])

    const rederData = () => {
        const dataRender = []
        for (let title in data) {
            let i = 0
            dataRender.push(
                <div key={i}>
                    <h3 style={{ paddingLeft: "25px", marginBottom: "5px" }}>{title}</h3>
                    <Scroller horizontalScrollbar="hidden">
                        <div style={{ display: "flex" }}>
                            {data[title].map((item, index) => {
                                return <RowListItem onClick={() => {
                                    dispatch(setVideoItem(item))
                                    navigate("/videoplayer")
                                }} key={index} title={item.title} thumbnail={item.thumbnail} longdescription={item.longDescription} />
                            })}
                        </div>
                    </Scroller>
                </div>
            )
            i++
        }
        return dataRender
    }
    return <>
        <div {...props} style={{ width: "95%", float: "right" }}>
            <Topbar />
            {data && rederData()}
        </div>
    </>
})
export default RowList