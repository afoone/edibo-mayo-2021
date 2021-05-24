import React from "react";
import { useSelector } from "react-redux";

const Header = () => {

    // {
    //     npartidas: 45
    // }

    // leer redux

  const npartidas = useSelector((state) => state.npartidas);

  return (
    <div className="header">
      <div class="ui menu">
        <div class="header item">Memory Game</div>
        <div class="right item">
          <div>
            <div>High Score:</div>
            <div>Rounds: {npartidas}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
