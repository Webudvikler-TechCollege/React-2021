import { useState } from "react";

export const HookExample = () => {
  const [keyword, setKeyword] = useState("");

  console.log(keyword);

  return (
    <main>
      <input
        type="text"
        name="keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </main>
  );
};
