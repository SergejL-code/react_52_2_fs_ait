//*здесь  импорты и статические элементы

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CityPage from "./assets/Consultation/components/CityPage/CityPage.jsx";
import Lesson02 from "./lessons/lesson_02/Lesson02.jsx";
//import Lesson01 from './lessons/lesson_01/Lesson01'
//import Hm01 from './HomeWork/HM01/Hm01'
//! обьявление
function App() {
  return (
    <div>
      <Lesson02 />
    </div>
  );
}

export default App;
