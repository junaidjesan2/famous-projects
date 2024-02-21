import { useState } from "react";
import { CiStar } from "react-icons/ci";

export default function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function starOnClick(index) {
    setRating(index);
  }
  function starMouseLeave() {
    setHover(rating);
  }
  function starMouseMove(index) {
    setHover(index);
  }
  return (
    <div className="flex gap-2">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <CiStar
            className={
              index <= (hover || rating) ? `text-yellow-300` : `text-black`
            }
            key={index}
            onClick={() => starOnClick(index)}
            onMouseLeave={() => starMouseLeave()}
            onMouseMove={() => starMouseMove(index)}
            size={30}
          />
        );
      })}
    </div>
  );
}
