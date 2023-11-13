import React from "react";


const Article = ({ title, date, preview, minutes  }) => {
  const formattedDate = date ? new Date(date).toDateString() : "January 1, 1970";

    // Calculate the number of emojis based on the minutes
    const calculateEmojis = (minutes) => {
        if (minutes < 30) {
          // Display a coffee cup emoji for every 5 minutes
          const coffeeEmojis = "☕️".repeat(Math.ceil(minutes / 5));
          return `${coffeeEmojis} ${minutes} min read`;
        } else {
          // Display a bento box emoji for every 10 minutes
          const bentoEmojis = "🍱".repeat(Math.ceil(minutes / 10));
          return `${bentoEmojis} ${minutes} min read`;
        }
      };
    
      const minutesToRead = calculateEmojis(minutes || 0);
    

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <p>{minutesToRead}</p>
    </article>
  );
};

export default Article;
