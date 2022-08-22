import { useState, useEffect } from 'react';
import axios from 'axios'

let GetProject = function(id) {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/projects/${id}`);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, [id]);

  return {data, error, loaded}
}
export default GetProject
