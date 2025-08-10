import { nextImgsList } from "../../constants";
import { NextVideoItem } from "./NextVideoItem";
import "./NextVideos.css";

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
