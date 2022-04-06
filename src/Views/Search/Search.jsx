import { React, useEffect, useState } from "react";
import { InputField } from "@enact/sandstone/Input";
import SearchItem from "./SearchItem/SearchItem";
import axios from "axios";

function Search() {
  const [data, setData] = useState({});
  const [dataSearch, setDataSearch] = useState([]);
  const [complete, setComplete] = useState([]);
  useEffect(() => {
    axios
      .get("https://tue0305.github.io/recipes.json")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("dataSearch", dataSearch);
  const handleComplete = (e) => {
    const result = [];
    for (let catagory in data) {
      data[catagory]?.map((item) => {
        if (item?.title.toUpperCase().includes(e.value?.toUpperCase()))
          result.push(item);
      });
    }
    setDataSearch(e.value===''?[]:result);
  };

  console.log(complete);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Search</h1>
      <InputField
        dismissOnEnter="true"
        style={{ fontSize: 20, width: 600 }}
        placeholder="Search"
        type="text"
        onChange={handleComplete}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          width: "65%",
          margin: "auto",
          paddingTop: "50px",
        }}
      >
        {dataSearch?.map((item, index) => {
          return (
            <SearchItem
              key={index}
              thumbnail={item.thumbnail}
              title={item.title}
              longDescription={item.longDescription}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Search;
