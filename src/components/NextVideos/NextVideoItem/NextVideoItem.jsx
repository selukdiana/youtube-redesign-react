import "./NextVideoItem.css";
export const NextVideoItem = ({ img: { src, title, views, author } }) => {
  return (
    <li className="next__item">
      <div className="img__container next__img">
        <img src={src} alt="next img" />
        <span className="img__duration">4:15</span>
      </div>
      <h4 className="next-content__title">{title}</h4>
      <div className="next-content__description">
        <div className="description__info">
          <span className="info__views">{views} </span>
          views
        </div>
        <div className="description__author">{author}</div>
      </div>
    </li>
  );
};
