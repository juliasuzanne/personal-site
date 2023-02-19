import { useState } from "react";
import { Modal } from "./Modal";

export function Website() {
  const [currentImage, setCurrentImage] = useState("");

  const [textDescription, setTextDescription] = useState();
  const [showImage, setShowImage] = useState(false);

  const handleShowImage = () => {
    setShowImage(true);
  };

  const handleHideImage = () => {
    setShowImage(false);
  };

  return (
    <div>
      <a className="link" id="home" href="/">
        {" "}
        home{" "}
      </a>
      <br></br>
      <h2 className="header"> Experiments with React - Point and Click style interaction with original artwork</h2>
      <a href="https://www.moon--egg.com/" target="_blank">
        <h3 className="header"> Visit the live site here! </h3>
      </a>
      <p className="fonted">
        <p> Built with React and Ruby on Rails, deployed with Fly.io and Netlify</p>
        Features:
        <li>an inventory system</li>
        <li>points tracking</li>
        <li> users can create items from back room </li>
        <li>mini-games and puzzles</li>
        <li> pop-up dialog system interface</li>
        <li> hidden 3D objects</li>
        <li> triggers that play sounds or toggle appearances of images and buttons.</li>
        <li> backend accessibility for development </li>
      </p>
      <div id="video">
        <iframe
          className="websitevideo"
          controls="1"
          src="/images/actualize-capstone.mp4"
          title="video player"
        ></iframe>
      </div>
      <Modal show={showImage} onClose={handleHideImage}>
        <img id="modalImage" src={currentImage} />
        <p className="fonted"> {textDescription} </p>
      </Modal>
      <div className="games_images">
        <img
          className="game_image"
          id="two"
          src="/images/8.png"
          onClick={() => {
            setCurrentImage("/images/8.png");
            handleShowImage();
            setTextDescription(
              "This is an example of one of the backend interfaces I built so that I could edit the database live via the web browser."
            );
          }}
        />
        <img
          className="game_image"
          id="two"
          src="/images/9.png"
          onClick={() => {
            setCurrentImage("/images/9.png");
            handleShowImage();
            setTextDescription(
              "This is a mini-game, snake. An array updates live to detect collisions with the 'apple', change direction and length of the snake, and points earned are connected to the database, saving points to the current user."
            );
          }}
        />
        <img
          className="game_image"
          id="one"
          src="/images/1.png"
          onClick={() => {
            setCurrentImage("/images/1.png");
            handleShowImage();
            setTextDescription("Showing here the modal that reveals a dialog box to interact with the cashier.");
          }}
        />
        <img
          className="game_image"
          id="two"
          src="/images/2.png"
          onClick={() => {
            setCurrentImage("/images/2.png");
            handleShowImage();
            setTextDescription(
              "Showing a detail of the puzzle to fix the electrical wires and then turn on the lights. I used buttons and conditionals to achieve this. Completing this task earns the user 500 points, and the game will remember that this was done via a boolean variable assigned to each user."
            );
          }}
        />
        <img
          className="game_image"
          id="two"
          src="/images/4.png"
          onClick={() => {
            setCurrentImage("/images/4.png");
            handleShowImage();
            setTextDescription(
              "I had a lot of fun experimenting with adding interactive 3D models created in Blender to the site using Three.js. I'm looking for ways to do more of this."
            );
          }}
        />
        <img
          className="game_image"
          id="two"
          src="/images/6.png"
          onClick={() => {
            setCurrentImage("/images/6.png");
            handleShowImage();
            setTextDescription(
              "Detail showing the cataloging system for the back room inventory where users can convert items into artifacts for sale in the main room, to be purchased and then added to a user's inventory (if they have enough points)!"
            );
          }}
        />
      </div>
    </div>
  );
}
