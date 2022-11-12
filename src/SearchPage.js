import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import './home.css';
import './Search.css';


export const SearchPage = () => {
  const [users, setusers] = useState([]);
  const [item, setitem] = useState("");


  useEffect(() => {
    let arr=[]
    const loadusers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setusers(response.data);
      for(let i=0;i<11;i++){
        arr.push(response.data[i].name)
      }
      setusers(arr)
      console.log(response.data[1].name);
      console.log(response.data.length)
      
    };

    loadusers();
  }, []);

  return (
    <div className="containerSearch">
      <div className="home">
      <Header/>
      </div>
      <h4>Type here to search....</h4>
      <input
        type="text"
        placeholder="Type To Search..."
        onChange={(e) => setitem(e.target.value)}
      />
      {users
          .filter((value) => {
            if (item === "") {
              return null;
            } else if (
              value.name.toLowerCase().includes(item.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => <h5 key={item.id}><>{item.name}</></h5>)
      }
      
    </div>
  );
}