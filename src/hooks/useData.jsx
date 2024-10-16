import { useEffect, useState, useRef } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  const ref = useRef(null)

  const Api = "https://jsonplaceholder.typicode.com/posts/1/comments";

  useEffect(() => {
    fetch(Api)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        ref.current = data
        console.log(ref)
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return {
    data,
  };
};

export default useData;
