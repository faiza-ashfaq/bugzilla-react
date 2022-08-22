import React from 'react';
import { Link, useParams } from 'react-router-dom';
import GetProject from './components/GetProject';


export default function ProjectPage() {
  let params = useParams();
  const { data, error, loaded } = GetProject(params.id)
  const project = data[0]
  const creator = data[1]
  const devs = data[2]
  const qas = data[3]
  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <div>
        <p class="container">
          <strong>Name: </strong>
          <p>{project.name}</p>
        </p>
        <p class="container">
          <strong>Creator: </strong>
          <p>{creator.username}</p>
        </p>
        <p class="container">
          <strong>Developers Assigned: </strong>
          {devs.map((dev) => (
            <p>{dev.username}</p>
          ))}
        </p>
        <p class="container">
          <strong>QAs Assigned:</strong>
          {qas.map((qa) => (
            <p>{qa.username}</p>
          ))}
        </p>
        <p>TO view bugs, <Link to="bugs">Click here!</Link></p>
      </div>

    );
  }
  return <span>Loading...</span>;
}
