import React, { useState } from "react";

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
      <form onSubmit={handleSubmit}>
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
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
