import React from "react";
import style from "./Person_style.module.css";
import fTrollIMG from "../HM01/ftroll.jpg";

function Person() {
  return (
    <div className={style.Person}>
      <img src={fTrollIMG} alt="troll-LSW" />

      <div className={style.div_name}>
        <h1 className="name">Legendary Software Wanderer</h1>
      </div>
      <div className="div_hobby">
        <p className="hobby">
          Я увлекаюсь программированием, чтением книг и путешествиями. Люблю
          изучать новые технологии и создавать интересные проекты.
        </p>
      </div>
    </div>
  );
}
export default Person;
