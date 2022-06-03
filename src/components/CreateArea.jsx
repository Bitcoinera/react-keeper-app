import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [item, setItem] = useState({ title: "", content: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setItem({ ...item, title: value });
    } else {
      setItem({ ...item, content: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          value={item.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={item.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            props.onAdd(item);
            setItem({ title: "", content: "" });
          }}
        >
            <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
