import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import GetBugs from './components/GetBugs'

export default function BugsPage() {
  let params = useParams();
  const { data, error, loaded } = GetBugs(params.project_id);
  const bugs = data[0];
  const project = data[1];
  const reporters = data[2];
  const assignees = data[3];
  const stringifiedData = useMemo(() => {
    return JSON.stringify(data || {});
  }, [data]);
  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <div>
        <table class="table">
        <thead class="thead-light">
          <tr>
            <th>Title</th>
            <th>Bug type</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Project</th>
            <th>Reporter</th>
            <th>Assignee</th>
            <th colSpan="5"></th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug, i) =>
            <tr>
              <td>{bugs[i].title}</td>
              <td>{bugs[i].bug_type}</td>
              <td>{bugs[i].status}</td>
              <td>{bugs[i].deadline || "Not Available"}</td>
              <td><Link to={'/projects/'.concat(params.project_id)}>{project.name}</Link></td>
              <td>{reporters[i].username}</td>
              <td>{assignees[i] ? assignees[i].username : "Null"}</td>
            </tr>
          )}
          </tbody>
      </table>
      </div>

    );
  }
  return <span>Loading...</span>;
}
