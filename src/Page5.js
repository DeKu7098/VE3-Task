import { useState } from "react";
import "./Page.css";
import { Header } from "./Header";
import SearchButton from "./SearchButton";

function Page5() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container1">
      <br />
      <div className="inline">
        <h2>Module Five</h2>
        <div className="rightt">
          <SearchButton />
          <Header />
        </div>
      </div>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
      </div>

      <div className="content-tabs img">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <img
            src="http://js-ind-app.herokuapp.com/images/img-13.jpg"
            alt="tab1"
          />
          <h2>Sunt ea occaecat mollit incididunt enim nisi.</h2>

          <p>
            Voluptate culpa sint amet amet ullamco culpa adipisicing consectetur
            dolore sunt culpa sunt nostrud aliquip. Irure dolor eu deserunt
            voluptate adipisicing exercitation excepteur excepteur occaecat quis
            laborum veniam veniam. Laboris ad fugiat exercitation cupidatat
            laboris nostrud nulla Lorem amet incididunt. Do veniam mollit
            voluptate id non nulla sunt proident voluptate aute ipsum nostrud
            ipsum ex.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <img
            src="http://js-ind-app.herokuapp.com/images/img-14.jpg"
            alt="tab1"
          />
          <h2>Occaecat aliqua ex est dolore aliqua.</h2>

          <p>
            Dolore qui aliqua ex qui est quis anim culpa. Commodo eu cupidatat
            aute ad. Consequat velit magna qui proident eiusmod exercitation
            sunt elit nostrud amet tempor excepteur. Minim ex Lorem incididunt
            occaecat ea ad nostrud non. Occaecat non id esse pariatur anim
            fugiat. Reprehenderit est amet aute qui occaecat nostrud ea quis ad
            aute aute esse.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <img
            src="http://js-ind-app.herokuapp.com/images/img-15.jpg"
            alt="tab1"
          />
          <h2>Officia tempor ullamco veniam adipisicing.</h2>

          <p>
            Eex qui est quis anim culpa. Commodo eu cupidatat aute ad. Consequat
            velit magna qui proident eiusmod exercitation sunt elit nostrud amet
            tempor excepteur. Minim ex Lorem incididunt occaecat ea ad nostrud
            non. Occaecat non id esse pariatur anim fugiat. Reprehenderit est
            amet aute qui occaecat nostrud ea quis ad aute aute esse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page5;
