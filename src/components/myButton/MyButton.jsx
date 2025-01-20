/*// * компонент button должен принимать props: text - с текстом кнопки, func - с функцией которая сработает по нажатию на кнопку

// для того чтобы функция отработала на кнопке присвойте ее на аттрибут onClick внутри кнопки
// <button onClick={...}>Click me!</button>
// в качестве теста может функции могут выводить в консоль разные данные

// вызовите кнопку два раза внутри Lesson03.jsx с разными данными
*/

// пример отдельного компонента кнопки
// экспорт по умолчанию можно писать как в конце так и в начале
import "./myButton.css";
function MyButton({ text, func }) {
  return (
    <button onClick={func} className="MyButton">
      {text}
    </button>
  );
}

export default MyButton;
