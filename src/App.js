import "./App.css";
import { nanoid } from "nanoid";
import React from "react";
import Card from "./Card";
import Guadalupe from "./images/guadalupe.jpg";
import Mia from "./images/mia-colucci.jpg";
import Miguel from "./images/miguel-arrango.jpg";
import Diego from "./images/diego-bustamante.png";
import Bianca from "./images/bianca-delight.webp";
import Celina from "./images/celina-ferrer.webp";
import Enrique from "./images/enrique-madariaga.webp";
import Giovanni from "./images/giovanni-mendez.webp";
import Roberta from "./images/roberta-pardo.webp";
import Victoria from "./images/victoria-paz.webp";
import Logo2 from "./images/logo2.png";

function App() {
  const [characters, setCharacters] = React.useState([
    { name: "Guadalupe", src: Guadalupe },
    { name: "Mia", src: Mia },
    { name: "Miguel", src: Miguel },
    { name: "Diego", src: Diego },
    { name: "Bianca", src: Bianca },
    { name: "Celina", src: Celina },
    { name: "Enrique", src: Enrique },
    { name: "Giovanni", src: Giovanni },
    { name: "Roberta", src: Roberta },
    { name: "Victoria", src: Victoria },
  ]);
  const [score, setScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(0);
  const [visited, setVisited] = React.useState([]);

  React.useEffect(() => {
    const shuffled = shuffleCharacters(characters);
    setCharacters(shuffled);
    if (score > bestScore) setBestScore(score);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  const shuffleCharacters = (array) => {
    const newArray = [...array];
    for (let i = 0; i < newArray.length; i++) {
      const randomIndex = Math.floor(Math.random() * newArray.length);
      const itemAtIndex = newArray[randomIndex];
      newArray.splice(randomIndex, 1);
      newArray.push(itemAtIndex);
    }
    return newArray;
  };

  const selectCard = (e) => {
    const clickedElementId = e.target.parentNode.id;
    if (visited.includes(clickedElementId)) {
      resetGame();
    } else {
      incrementScore();
      setVisited((prevState) => {
        return [...prevState, clickedElementId];
      });
    }
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetGame = () => {
    setScore(0);
    setVisited([]);
  };

  const cards = characters.map((character) => {
    return (
      <Card
        handleClick={selectCard}
        id={character.name}
        key={character.name}
        image={character.src}
        name={character.name}
      />
    );
  });

  return (
    <div className="App">
      <img className="logo2" src={Logo2} alt="rebelde logo" />
      <div className="main-grid">
        <p>
          Try getting the highest score by clicking on a different character
          each time.<br></br> Clicking on a character you've clicked on before
          resets the score to zero.
        </p>
        <div className="scores">
          <span className="score">Score: {score}</span>
          <br></br>
          <span className="best-score">Best Score: {bestScore}</span>
        </div>
        <div className="cards">{cards}</div>
      </div>
    </div>
  );
}

export default App;
