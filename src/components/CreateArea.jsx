import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [expanded, setExpanded] = useState();
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
    props.onAdd(item);
    setItem({ title: "", content: "" });
    event.preventDefault();
  };

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {expanded && (
          <input
            onChange={handleChange}
            name="title"
            value={item.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={() => setExpanded(true)}
          onChange={handleChange}
          name="content"
          value={item.content}
          placeholder="Take a note..."
          rows={expanded ? 3 : 1}
        />
        <Zoom in={expanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
