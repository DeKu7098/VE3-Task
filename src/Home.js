import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './home.css';
export const Home = () => {
    const [turn,setTurn] = useState(false)
    const clickHandler = () => {
      setTurn(!turn);
    }
  return (
    <div className="frontheader">
        <div className="module_container">
          <img src="./images/first.jpg" alt="front" width="100%" />
        </div>
        <div className="module_container_text">
          <div className="base1">
            {!turn && <h2>Lorem ipsum dolor</h2>}
            {!turn && <p>
              Lorem ipsum dolorsit amet consectetur, adipisicing elit. Excepturi
              sit eaque, exercitationem praesentium ad nulla quasi ratione
              distinctio repellat, omnis debitis veritatis neque dolorem officia
              ut aliquip ex ea commodo consequat.
            </p>}
            <div className="base12">
            {turn && <Link to="/Page"> <h3>Module One</h3> </Link>}
            </div>
            <div className="base12">
            {turn && <Link to="/Page2"> <h3>Module Two</h3></Link>}
            </div>
            <div className="base12">
            {turn && <Link to="/Page3"><h3>Module Three</h3></Link>}
            </div>
            <div className="base12">
            {turn && <Link to="/Page4"><h3>Module Four</h3></Link>}
            </div>
            <div className="base12">
            {turn && <Link to="/Page5"><h3>Module Five</h3></Link>}
            </div>
            <button className="btn_module" onClick={clickHandler}>Select Module</button>
          </div>
        </div>
      </div>
  
     )
}
