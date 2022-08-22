import { useState, useEffect } from 'react';
import axios from 'axios'

export default function GetCount() {
  const [count, setCount] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/projects/count`);
        console.log("respone", response.data);
        setCount(response.data-1);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);
  console.log("count", count);
  return {count, error, loaded}
}
