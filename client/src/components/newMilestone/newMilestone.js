import React, { useState } from 'react';

const NewMilestone = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");

  return (
    <div>
      <div>

      </div>
      <div>
        <label>
          Title
          <input/>
        </label>
        <label>
          Due date (optional)
          <input type="date" onChange={(e) => console.log(new Date(e.target.value))}/>
        </label>
        <label>
          Description (optional)
          <textarea value={description} onChange={e => setDescription(e.target.value)}/>
        </label>
      </div>
      <div>
        <button>Create milestone</button>
      </div>
    </div>
  )
}

export default NewMilestone;