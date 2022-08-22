import React, { Component, useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function ProjectForm() {
  const [ id, setId ] = useState(0)
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/projects/${id}`)
  }
  return (
    <form onSubmit={e => {handleSubmit(e)}}>
      <label>
        Project ID:
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

