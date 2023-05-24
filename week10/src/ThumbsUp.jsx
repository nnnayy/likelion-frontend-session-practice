import React, { useState, useEffect } from "react";

const ThumbsUp = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const handleChangeName = (e) => setName(e.target.value);
  const handleCountUp = () => setCount(count + 1);

  useEffect(() => {
    console.log("렌더링!");
    console.log({ count, name });
  }, [name]);

  return (
    <div className="background">
      <p>이름 : 
      <input type={"text"} value={name} onChange={handleChangeName} />
      </p>

      <p>👍🏻 {count}</p>
      <button onClick={handleCountUp}>굳</button>
    </div>
  );
}

export default ThumbsUp;