import { useRef, useEffect, useState } from "react";
import pupils from "/images/pupils.png";
import axios from "axios";

export function Face() {
  const [id, setId] = useState(0);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [mousePos, setMousePos] = useState({});
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  let root = document.documentElement;

  root.addEventListener("mousemove", (event) => {
    root.style.setProperty("--left", String((event.clientX + 500) * 0.025) + "px");
    root.style.setProperty("--top", String((event.clientY - 1900) * 0.03) + "px");
  });

  document.body.style.overflow = "hidden";

  return (
    <div>
      {/* The mouse is at position{" "} */}
      <b hidden>
        ({mousePos.x}, {mousePos.y})
      </b>
      {/* {console.log(left)}
      {console.log(top)} */}
      <div>
        {/* <img
          src={background2}
          style={{
            position: "absolute",
            width: "60vw",
            justifyContent: "center",
            zIndex: 0,
          }}
        /> */}

        <div>
          <img
            src="images/face.png"
            style={{
              position: "absolute",
              width: "530px",
              top: "-50px",
              left: "20px",
              zIndex: 21,
            }}
          />

          <img
            id="pupils"
            src={pupils}
            style={{
              position: "absolute",
              width: "530px",
              zIndex: 19,
            }}
          />

          <img
            src="images/foeglass.png"
            style={{
              position: "absolute",
              width: "530px",
              top: "-50px",
              left: "20px",
              zIndex: 18,
            }}
          />
        </div>

        {/* {(document.getElementById("pupils").style.width = left)} */}
        {console.log()}
      </div>
    </div>
  );
}
