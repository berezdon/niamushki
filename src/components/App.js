import React, {useEffect, useState} from 'react';
import {cardsData} from "../utils/constants";
import Header from './Header';
import Main from "./Main";


function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <div className="page">
      <Header/>
      <Main
        cards={cards}
      />
    </div>
  );
}

export default App;
