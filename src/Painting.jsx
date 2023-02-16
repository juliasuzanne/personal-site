import { useEffect, useState } from "react";
import axios from "axios";

export function Painting() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);
  const [description, setDescription] = useState([]);

  const handleGetItems = () => {
    axios.get(`https://moon--egg.fly.dev/items.json?cat=painting`).then((response) => {
      console.log(response);
      setItems(response.data);
    });
  };

  useEffect(handleGetItems, []);

  const handleShow = () => {
    console.log(currentItem);
  };

  return (
    <div>
      <a className="link" id="home" href="/">
        {" "}
        home{" "}
      </a>
      <div className="paintings_container">
        <img width="80%" src="/images/paintings.jpg" />
      </div>
    </div>
  );
}
