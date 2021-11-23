import React from "react";
import style from "./LaunchCard.module.scss";
import Moment from "react-moment";
import "moment/locale/ru";

export default function LaunchCard(props) {
  return (
    <div className={style.launchCardWrap}>
      <div className={style.launchCardName}>{props.data.name}</div>
      <div>
        <img src={props.data.links.patch.large} alt="" />
      </div>
      <div className={style.launchCardFields}>
        <div className={style.launchCardField}>
          <span>Дата и время: </span>
          <Moment format="DD.MM.YYYY HH:mm:ss">{props.data.date_utc}</Moment>
        </div>
        <div className={style.launchCardField}>
          <span>Результат: </span>
          {props.data.success ? "Успех ✅" : "Неудача ❌"}
        </div>
        <div className={style.launchCardField}>
          <a href={props.data.links.wikipedia} target="_blank">
            Ссылка на Wiki
          </a>
        </div>
      </div>
    </div>
  );
}
