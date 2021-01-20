import React, { useState, useEffect,  } from "react";
import { useFetch } from "./useFetch";


export function Counter(props) {
  const [jokes, setJokes] = useState([]);

  const { data, error, loading, getData } = useFetch("https://icanhazdadjoke.com/")
  console.log("🚀 ~ file: Counter.jsx ~ line 49 ~ Counter ~ data", data)

  async function onClick() {
    const oldJokes = [...jokes]
    await getData()
    setJokes([data.joke, ...oldJokes])
  }

  useEffect(() => {
    if(jokes.length === 0) {
      getData()
    }
  }, [jokes.length, getData])

  return (
    <div>
      <button onClick={onClick}>Click to get a bad dad joke!</button>
      {/* {data.joke} */}
      {jokes.map((joke, index) => {
        return <p key={index} onClick={getData}>{joke}</p>;
      })}
    </div>
  );
}
