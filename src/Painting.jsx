import { useEffect, useState } from "react";
import axios from "axios";

export function Painting() {
  return (
    <div>
      <div>
        <h2 className="header" id="center-div-snake">
          {" "}
          Oil Paintings{" "}
        </h2>
        <br></br>
        <p className="fonted" id="center-div-painting">
          {" "}
          Some oil paintings I've done since 2020. Mostly of images taken by my sister Lauren.{" "}
        </p>
      </div>
      <div className="paintings_container">
        <img width="80%" src="/images/paintings.jpg" />
      </div>
    </div>
  );
}
