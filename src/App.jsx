//*здесь  импорты и статические элементы

//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
//import CityPage from "./assets/Consultation/components/CityPage/CityPage.jsx";
//import Lesson01 from "./lessons/lesson_01/Lesson01.jsx";
//import Person from "./homework/HM01/Person";
//import Lesson02 from "./lessons/lesson_02/Lesson02.jsx";
import Homework02 from "./homework/HM02/Homework02.jsx";

// // * объявление функции из компонента App */}
// // функция называется по названию компонента
// // компонент называется с большой буквы и имеет расширение jsx
// function App() {
//   // {/* // * возвращенное значение
//   // jsx компоненты возвращают xml верстку
//   // динамические данные из тела функции мы можем вставлять в теги и использовать на странице
//   return (
//     <div>
//       <p>Hello</p>
//     </div>
//   );
// }
// // *  экспорт функции
// // без него мы не сможем использовать этот компонент в других частях react приложения
// export default App;

//-------------------- Lesson 01--------------------------------

function App() {
  return (
    <div>
      <Homework02 />
    </div>
  );
}
export default App;
