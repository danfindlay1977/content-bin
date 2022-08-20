import { Fragment } from "react";
import { VideoTiles } from "../components/VideoTiles";
const d = new Date();
const VIDEOS = [
  {
    id: 1,
    title: "video 1",
    length: 2.2,
    publishDate: d.getDate(),
  },
  {
    id: 2,
    title: "video 2",
    length: 2.2,
    publishDate: d.getDate(),
  },
  {
    id: 3,
    title: "video 3",
    length: 2.2,
    publishDate: d.getDate(),
  },
  {
    id: 4,
    title: "video 4",
    length: 2.2,
    publishDate: d.getDate(),
  },
  {
    id: 5,
    title: "video 5",
    length: 2.2,
    publishDate: d.getDate(),
  },
  {
    id: 6,
    title: "video 6",
    length: 2.2,
    publishDate: d.getDate(),
  },
];
export const Landing = () => {
  const feautredContent = VIDEOS.map((el) => <VideoTiles {...el} />);

  return (
    <section className="flex-auto w-10">
      <h1>Feautred videos </h1>
      <section className="grid  grid-cols-3 grid-gap-90">
        {feautredContent}
      </section>
    </section>
  );
};
