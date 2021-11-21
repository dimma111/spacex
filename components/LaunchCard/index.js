import React from "react";
import style from "./LaunchCard.module.scss";

export default function LaunchCard(props) {
  console.log(props.data);
  return <div className={style.launchCardWrap}>{props.data.name}</div>;
}
