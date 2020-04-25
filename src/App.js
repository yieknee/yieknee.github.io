import React from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {
  // const cards = [
  //   {
  //     "card": {
  //       "id": 4733,
  //       "text": "You are smart!",
  //       "emoji": "'heart'"
  //     }
  //   },
  //   {
  //     "card": {
  //       "id": 4731,
  //       "text": "Yor are kind!",
  //       "emoji": "heart"
  //     }
  //   },
  //   {
  //     "card": {
  //       "id": 4515,
  //       "text": "You will get through this!",
  //       "emoji": "clap"
  //     }
  //   }
  // ]

  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`Jeta-Yieni`}
        // cards = {cards}
      />
    </section>
  );
};

export default App;
