import "./NextVideos.css";
import { NextVideoItem } from "./NextVideoItem";
import img1 from "../../imgs/next/1.png";
import img2 from "../../imgs/next/2.png";
import img3 from "../../imgs/next/3.png";
import img4 from "../../imgs/next/4.png";

const nextImgsList = [
  {
    src: img1,
    title: "Baby Monitor Technology",
    views: "123k",
    author: "Dollie Blair",
  },
  {
    src: img2,
    title: "A Good Autoresponder",
    views: "123k",
    author: "Dollie Blair",
  },
  {
    src: img3,
    title: "Selecting The Right Hotel",
    views: "123k",
    author: "Dollie Blair",
  },
  {
    src: img4,
    title: "Baby Monitor Technology",
    views: "123k",
    author: "Dollie Blair",
  },
];
export const NextVideos = () => {
  return (
    <div className="next">
      <div className="next__header">
        <h2 className="next__title">Next</h2>
        <div className="next__autoplay">
          <span className="autoplay__text">autoplay</span>
          <input type="checkbox" id="autoplay__switch"></input>
          <label htmlFor="autoplay__switch" className="autoplay__switch switch">
            <span className="switch__btn"></span>
          </label>
        </div>
      </div>
      <ul className="next__content">
        {nextImgsList.map((nextImg) => (
          <NextVideoItem img={nextImg} key={nextImg.title} />
        ))}
      </ul>
    </div>
  );
};
