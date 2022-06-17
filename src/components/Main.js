import React from 'react';
import Card from "./Card";

function Main({cards}) {
  return (
    <main className="content">
      {cards.map((card, i) => (
        <Card key={i} card={card}/>
      ))}
    </main>
  )
}

export default Main
