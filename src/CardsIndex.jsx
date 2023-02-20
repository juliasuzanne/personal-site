import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "./Modal";
import "./tarot.css";

export function CardsIndex() {
  let [cards, setCards] = useState([]);

  let [currentCard, setCurrentCard] = useState(true);

  const [showImage, setShowImage] = useState(false);
  const [textDescription, setTextDescription] = useState();
  const [title, setTitle] = useState();

  const [currentImage, setCurrentImage] = useState("");

  const handleShowImage = () => {
    setShowImage(true);
  };

  const handleHideImage = () => {
    setShowImage(false);
  };
  let [card1, setCard1] = useState(true);
  let [card2, setCard2] = useState(true);
  let [card3, setCard3] = useState(true);

  let [cardnum1, setCardNum1] = useState(Math.ceil(Math.random() * 78));
  let [cardnum2, setCardNum2] = useState(Math.ceil(Math.random() * 78));
  let [cardnum3, setCardNum3] = useState(Math.ceil(Math.random() * 78));

  let [randomCard1, setRandomCard1] = useState(Math.ceil(Math.random() * 78));
  let [randomCard2, setRandomCard2] = useState(Math.ceil(Math.random() * 78));
  let [randomCard3, setRandomCard3] = useState(Math.ceil(Math.random() * 78));

  const handleCards = () => {
    axios
      .get("https://tarot-backend.fly.dev/cards/cards")
      .then((response) => {
        console.log(response);
        setCards(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleGenerateNumber1 = () => {
    if (cardnum2 === cardnum1 || cardnum3 === cardnum1) {
      setCardNum1(Math.ceil(Math.random() * 78));
      if (cardnum2 === cardnum1 || cardnum3 === cardnum1) {
        setCardNum1(Math.ceil(Math.random() * 78));
      }
    }

    axios
      .get(`https://tarot-backend.fly.dev/cards/${cardnum1}`)
      .then((response) => {
        console.log(response);
        setRandomCard1(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setCard1(false);
  };

  const handleGenerateNumber2 = () => {
    if (cardnum2 === cardnum1 || cardnum3 === cardnum2) {
      setCardNum2(Math.ceil(Math.random() * 78));
      if (cardnum2 === cardnum1 || cardnum3 === cardnum2) {
        setCardNum2(Math.ceil(Math.random() * 78));
      }
    }

    axios
      .get(`https://tarot-backend.fly.dev/cards/${cardnum2}`)
      .then((response) => {
        console.log(response);
        setRandomCard2(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    setCard2(false);
  };

  const handleGenerateNumber3 = () => {
    if (cardnum2 === cardnum3 || cardnum3 === cardnum1) {
      setCardNum3(Math.ceil(Math.random() * 78));
      if (cardnum2 === cardnum1 || cardnum3 === cardnum1) {
        setCardNum3(Math.ceil(Math.random() * 78));
      }
    }

    axios
      .get(`https://tarot-backend.fly.dev/cards/${cardnum3}`)
      .then((response) => {
        console.log(response);
        setRandomCard3(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setCard3(false);
  };

  return (
    <div className="cardy">
      <div className="describe-spread">
        <button
          onClick={() => {
            handleShowImage();
            setTitle("About This Three Card Spread, Past/Present/Future");
            setCurrentCard(
              "This 3 card tarot spread is a quick and simple way to get insight into the past, present and future. There are many variations on the 3 card tarot spread, including the past life tarot spread, but this is one of the most common spreads.        "
            );
            setTextDescription(
              `      
            Look closer at each card and ask yourself what it represents.
  
            Some possibilities are a person in your life,
            a situation,
            your emotions/feelings,
            your thoughts/mindset, or
            a possible solution. `
            );
          }}
        >
          <h2 className="tarot" id="center-div">
            {" "}
            About{" "}
          </h2>
        </button>
      </div>
      <div className="layout">
        <div className="label-div">
          <h3
            className="tarot"
            onClick={() => {
              handleShowImage();
              setTitle("About: Present");
              setCurrentCard("Energies and events that are in the past yet still effect you");
              setTextDescription(`
            How your past either holds you back (blocks) or helps you move forward (growth)
            What you need to take from the past and use to your advantage today.`);
            }}
          >
            {" "}
            Present
          </h3>
        </div>
        <div className="card-div">
          <div id="pad1">
            <button
              className="button-card"
              id="card"
              onClick={() => {
                if (card1) {
                  handleGenerateNumber1();
                } else {
                  // setCurrentImage("/images/8.png");
                  handleShowImage();
                  setTitle("Present");
                  setCurrentCard(randomCard1.name);
                  setTextDescription(randomCard1.description);
                }
              }}
            >
              <img id="symbol" src={randomCard1.image} />
            </button>
          </div>
        </div>

        <div className="card-div">
          <div id="pad2">
            <button
              id="card"
              className="button-card"
              onClick={() => {
                if (card2) {
                  handleGenerateNumber2();
                } else {
                  // setCurrentImage("/images/8.png");
                  handleShowImage();
                  setTitle("Past");
                  setCurrentCard(randomCard2.name);

                  setTextDescription(randomCard2.description);
                }
              }}
            >
              {" "}
              <img id="symbol" src={randomCard2.image} />
            </button>
          </div>

          <div id="pad3">
            <button
              id="card"
              className="button-card"
              onClick={() => {
                if (card3) {
                  handleGenerateNumber3();
                } else {
                  // setCurrentImage("/images/8.png");
                  handleShowImage();
                  setTitle("Future");
                  setCurrentCard(randomCard3.name);
                  setTextDescription(randomCard3.description);
                }
              }}
            >
              {" "}
              <img id="symbol" src={randomCard3.image} />
            </button>
          </div>
        </div>
      </div>
      <div className="label-div">
        <h3
          className="tarot"
          onClick={() => {
            handleShowImage();
            setTitle("About: Past");
            setCurrentCard("What is going on for you right now.");
            setTextDescription(`
            The energy of the present moment.
            Opportunities and challenges that are currently being presented to you`);
          }}
        >
          Past &nbsp; &nbsp; &nbsp; &nbsp;
        </h3>
        <h3
          className="tarot"
          onClick={() => {
            handleShowImage();
            setTitle("About: Future");
            setCurrentCard("Outcome of situation");
            setTextDescription(`
            The direction that things seem to be moving in, or what you are manifesting.`);
          }}
        >
          {" "}
          &nbsp; &nbsp; &nbsp;Future
        </h3>
      </div>
      <Modal show={showImage} onClose={handleHideImage}>
        {/* <img id="modalImage" src={currentImage} /> */}
        <h3 className="tarot"> {title} </h3>
        <p id="p-card"> {currentCard} </p>
        <p id="p-card"> {textDescription} </p>
      </Modal>
    </div>
  );
}
