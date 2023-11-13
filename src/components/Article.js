import React from "react";

const Article = ({ title, date, preview }) => {
  const formattedDate = date ? new Date(date).toDateString() : "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
