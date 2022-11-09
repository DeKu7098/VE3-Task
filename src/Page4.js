import { useState } from "react";
import "./Page.css";
import { Header } from "./Header";
import SearchButton from "./SearchButton";

function Page4() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container1">
      <br />
      <div className="inline">
        <h2>Module Four</h2>
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
            src="http://js-ind-app.herokuapp.com/images/img-10.jpg"
            alt="tab1"
          />
          <h2>Nulla nisi officia non elit ut dolore.</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. When an unkwn printer Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unkown
            printer. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unkown printer.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <img
            src="http://js-ind-app.herokuapp.com/images/img-11.jpg"
            alt="tab1"
          />
          <h2>Eu ex excepteur commodo Lorem officia id</h2>

          <p>
            Dolore qui aliqua ex qui est quis anim culpa. Commodo eu cupidatat
            aute ad. Consequat velit magna qui proident eiusmod exercitation
            sunt elit nostrud amet tempor excepteur. Minim ex Lorem incididunt
            occaecat ea ad nostrud non. Occaecat non id esse pariatur anim
            fugiat. Reprehenderit est amet aute qui occaecat nostrud ea quis ad
            aute aute esse
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <img
            src="http://js-ind-app.herokuapp.com/images/img-12.jpg"
            alt="tab1"
          />
          <h2>Veniam officia tempor consectetur qui ad nulla.</h2>

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

export default Page4;
