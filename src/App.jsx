import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import JumboTron from "./components/JumboTron";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const cardinfo = [
    {
      tittle: "Star Wars",
      description:
        "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img:
        "https://eloutput.com/app/uploads-eloutput.com/2020/05/star-wars-saga.jpg",
    },
    {
      tittle: "Star Wars",
      description:
        "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img:
        "https://eloutput.com/app/uploads-eloutput.com/2020/05/star-wars-saga.jpg",
    },
    {
      tittle: "Star Wars",
      description:
        "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img:
        "https://eloutput.com/app/uploads-eloutput.com/2020/05/star-wars-saga.jpg",
    },
    {
      tittle: "Star Wars",
      description:
        "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img:
        "https://eloutput.com/app/uploads-eloutput.com/2020/05/star-wars-saga.jpg",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="App">
        <header className="App-header">
          <NavBar />
          <JumboTron />
        </header>
        <div class="container">
          <div className="row">
            {cardinfo.map((elemento) => {
              return (
                <div className="col-3">
                  <Card
                    tittle={elemento.tittle}
                    description={elemento.description}
                    img={elemento.img}
                  />
                </div>
              );
            })}
            ;
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
