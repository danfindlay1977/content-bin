import React from "react";

export const VideoTiles = (props) => {
  return (
    <section className=" px-8 py-8 shadow-md">
      <h3>{props.title}</h3>
      <label>{props.title}</label>
      <label>{props.length}</label>
      <label>{props.publishDate}</label>
    </section>
  );
};
