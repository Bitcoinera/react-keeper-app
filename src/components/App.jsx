import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems(items.concat(item));
  };

  const deleteItem = (id) => {
    setItems(
      // eslint-disable-next-line
      items.filter((item, index) => {
        if (index !== id) return item;
      })
    );
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
