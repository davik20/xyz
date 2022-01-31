import React, { useState, useEffect } from "react";

// type Props = {
//   initialData: any;
//   key: string;
// };

function useLocalStorage(key: string = "", initialData: any) {
  const [data, setData] = useState(initialData);
  console.log(data);
  //   useEffect(() => {
  //     localStorage.setItem(key, JSON.stringify([...data]));
  //   }, [data, key]);

  return [data, setData];
}

export default useLocalStorage;
