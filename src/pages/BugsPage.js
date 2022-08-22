import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import GetBugs from '../api/GetBugs'

export default function BugsPage() {
  let params = useParams();
  const { data, error, loaded } = GetBugs(params.project_id);
  const bugs = data
  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <div>
        <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Bug type</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Project</th>
            <th>Reporter</th>
            <th>Assignee</th>
            <th>Screenshot</th>
            <th colSpan="5"></th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug, i) =>
            <tr>
              <td>{bug.title}</td>
              <td>{bug.bug_type}</td>
              <td>{bug.status}</td>
              <td>{bug.deadline || "Not Available"}</td>
              <td><Link to={'/projects/'.concat(params.project_id)}>{bug.project}</Link></td>
              <td>{bug.reporter}</td>
              <td>{bug.reporter}</td>
              <td>{bug.image==="Not Attached" ? bug.image : <a href={bug.image}>Click here to view Screenshot</a>}</td>
            </tr>
          )}
          </tbody>
      </table>
      </div>

    );
  }
  return <span>Loading...</span>;
}
