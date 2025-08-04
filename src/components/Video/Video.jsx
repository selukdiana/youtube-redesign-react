import "./Video.css";
import poster from "../../imgs/poster.png";
import channelImg from "../../imgs/channel.png";
import { Icon } from "@iconify/react";
export const Video = () => {
  return (
    <div className="video">
      <div className="video__container">
        <video src="#" className="video__img" poster={poster}></video>
        <div className="video__controls">
          <div className="controls__duration">
            <span className="duration__now">1:34</span>
            <span className="duratioan__all">19:00</span>
          </div>
          <input type="range" className="controls__range" />
          <div className="controls__btns">
            <div className="controls__action-btns">
              <Icon icon="material-symbols:pause" />
              <Icon icon="mdi:next-title" />
              <div className="actions__volume">
                <Icon icon="material-symbols:volume-up" />
                <input type="range" className="volume__input" />
              </div>
            </div>
            <div className="controls__other-btns">
              <Icon icon="bi:badge-cc-fill" />
              <Icon icon="material-symbols-light:settings" />
              <Icon icon="ix:rectangle" />
              <Icon icon="material-symbols:fullscreen" />
            </div>
          </div>
        </div>
        <div className="video__controls-sm">
          <Icon icon="material-symbols:pause" />
          <div className="controls__duration">
            <span className="duration__now">1:34</span>
            <input type="range" className="controls__range" />
            <span className="duratioan__all">19:00</span>
          </div>
          <Icon icon="material-symbols:volume-up" />
        </div>
      </div>
      <p className="video__title">
        <span>Dude You Re Getting A Telescope</span>
        <Icon className="title__icon" icon="subway:down-2" />
      </p>
      <div className="video__footer">
        <span className="video__views">123k views</span>
        <div className="video__actions">
          <ul className="actions__items">
            <li className="actions__item">
              <Icon icon="ant-design:like-outlined" className="actions__icon" />
              <span>123k</span>
            </li>
            <li className="actions__item">
              <Icon icon="uiw:dislike-o" className="actions__icon" />
              <span>435k</span>
            </li>
            <li className="actions__item">
              <Icon icon="ooui:share" className="actions__icon" />
              <span>Share</span>
            </li>
          </ul>
          <Icon icon="ri:more-fill" className="actions__more" />
        </div>
      </div>
      <hr className="video__separator" />
      <div className="video__info">
        <div className="video__about">
          <div className="about__img img__container">
            <img src={channelImg} alt="channel img" />
          </div>
          <div className="about__content">
            <h3 className="about__title">Food & Drink</h3>
            <span className="about__date">Published on 14 Jun 2019</span>
            <span className="about__subscribers">245K subscribed</span>
            <p className="about__description">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy; it is based on
              a number of factors, including ad placement, demographic, even the
              consumer’s mood when they see your ad.{" "}
            </p>
            <span className="about__more">Show more</span>
          </div>
        </div>
        <button className="video__btn subcription__btn">Subscribe 2.3m</button>
        <button className="video__btn btn-transparent">Subscribe</button>
      </div>
      <hr className="video__separator" />
    </div>
  );
};
