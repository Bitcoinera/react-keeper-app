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
    }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={() => props.onAdd(item)}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
