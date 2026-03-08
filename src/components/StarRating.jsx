import { useState } from "react";

const StarRating = ({
  totalStars = 5,
  rating = 0,
  onRate,
  color = "gold",
  size = 30,
}) => {
  const [hover, setHover] = useState(null);


  return (
    <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={index}
            style={{
              fontSize: size,
              color:
                starValue <= (hover || rating)
                  ? color
                  : "#ccc",
              transition: "0.2s",
            }}
            onClick={() => onRate(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(null)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;