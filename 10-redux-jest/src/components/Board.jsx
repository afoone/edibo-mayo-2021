import React, { useEffect, useState } from "react";
import "./Board.css";
import Card from "./Card";
import axios from "axios";
import arrayShuffle from "array-shuffle";

const Board = ({ cols }) => {
  const [cards, setCards] = useState([]);

  const checkCorrect = (newcards) => {
    const visibles = newcards.filter((e) => e.visible);
    console.log(visibles);
    return visibles.length === 2 && visibles[0].image === visibles[1].image;
  };

  const setVisible = (id) => {
    const nVisibles = cards.reduce(
      (acc, curr) => (curr.visible ? acc + 1 : acc),
      0
    );
    const reset = nVisibles === 2;
    const newCards = [
      ...cards
        .filter((i) => i.id !== id)
        .map((c) => ({
          ...c,
          visible: c.visible && !reset,
        })),
      {
        ...cards[id],
        visible: true,
      },
    ].sort((a, b) => a.id - b.id);

    setCards(
      checkCorrect(newCards)
        ? newCards.map((i) => ({ ...i, completed: i.visible || i.completed }))
        : newCards
    );
  };

  useEffect(() => {
    createCards(cols);
  }, []);

  const templateGrid = "auto ".repeat(cols);

  const createCards = (cols) => {
    axios
      .get(
        "https://api.unsplash.com/search/photos/?client_id=N4IxmojIOcsRn0NMD39tJwNIYJBhFDLUWJWO_1wpssU&query=cats&orientation=squarish"
      )
      .then((res) => {
        const response = [];
        // Array.from({length: cols*cols}).map((i, indes) => )
        for (let index = 0; index < cols * cols; index++) {
          response.push({
            id: index,
            visible: false,
            image: res.data.results[Math.floor(index / 2)].urls.thumb,
            completed: false,
          });
        }
        const shuffledArray = arrayShuffle(response);

        setCards(
          shuffledArray.map((i, index) => {
            return {
              ...i,
              id: index,
            };
          })
        );
      });
  };

  return (
    <div className="board" style={{ gridTemplateColumns: templateGrid }}>
      {cards.map((e) => (
        <Card element={e} setVisible={setVisible} />
      ))}
    </div>
  );
};

export default Board;
