import React from "react";
import style from "./Person_style.module.css";
import fTrollIMG from "../HM01/ftroll.jpg";

function Person() {
  return (
    <div className={style.Person}>
      <img src={fTrollIMG} alt="troll-Img" />

      <div className={style.name}>
        <h1>Sergej</h1>
      </div>
      <p>
        Я увлекаюсь программированием, чтением книг и путешествиями. Люблю
        изучать новые технологии и создавать интересные проекты.
      </p>
    </div>
  );
}
export default Person;
