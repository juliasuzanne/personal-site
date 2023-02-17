export function Website() {
  return (
    <div>
      <a className="link" id="home" href="/">
        {" "}
        home{" "}
      </a>
      <br></br>
      <h2 className="header"> Experiments with React - Point and Click style interaction with original artwork</h2>
      <a href="https://www.moon--egg.com/">
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
      <div className="games_images">
        <img className="game_image" id="two" src="/images/8.png" />
        <img className="game_image" id="two" src="/images/9.png" />
        <img className="game_image" id="one" src="/images/1.png" />
        <img className="game_image" id="two" src="/images/2.png" />
        <img className="game_image" id="two" src="/images/4.png" />
        <img className="game_image" id="two" src="/images/6.png" />
      </div>
    </div>
  );
}
