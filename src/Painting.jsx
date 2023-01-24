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
      {items.map((item) => (
        <button
          onClick={() => {
            handleShow();
            setCurrentItem(item.image_url);
            setDescription(item.description);
            console.log(currentItem);
          }}
        >
          <img src={item.image_url} width="200px" />
        </button>
      ))}
    </div>
  );
}
