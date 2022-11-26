import React, { useContext } from "react";
import { data } from "../../App";
function Favorites() {
  const { favroites } = useContext(data);
  console.log(favroites);
  return (
    <>
      {/* {first.map((first) => (
        <div className="fav">{first}</div>
      ))} */}
    </>
  );
}

export default Favorites;
