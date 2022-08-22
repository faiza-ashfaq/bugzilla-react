import { useState, useEffect } from 'react';
import axios from 'axios'

export default function GetBugs(project_id) {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/projects/${project_id}/bugs`);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, [project_id]);
  console.log(data)
  return {data, error, loaded}
}
