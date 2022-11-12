import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import './home.css';
import './Search.css';


export const SearchPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");


  useEffect(() => {
    let arr=[]
    const loadPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setPosts(response.data);
      for(let i=0;i<11;i++){
        arr.push(response.data[i].name)
      }
      setPosts(arr)
      console.log(response.data[1].name);
      console.log(response.data.length)
      
    };

    loadPosts();
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
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {posts
          .filter((value) => {
            if (searchTitle === "") {
              return null;
            } else if (
              value.name.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => <h5 key={item.id}><>{item.name}</></h5>)
      }
      
    </div>
  );
}