// * импорты
// импорт картинки из src папки
// нужно выбрать имя переменной в которой будут содержаться импортируемые данные и указать путь
import reactImg from "../../assets/react.svg";
// * объявление функции из компонента App
// функция называется по названию компонента
// компонент называется с большой буквы и имеет расширение jsx
function Lesson01() {
  // * возвращенное значение
  // jsx компоненты возвращают xml верстку
  // динамические данные из тела функции мы можем вставлять в теги и использовать на странице
  return (
    <div>
      <h2>Hello,React!👌</h2>

      {/* для того чтобы воспользоваться данными из переменных в верстке мы используем фигурные скобки */}
      <img src={reactImg} alt="react-Img" />
      <p>
        React — это JavaScript-библиотека для разработки пользовательского
        интерфейса. React используют для создания одностраничных и
        многостраничных приложений, разработки крупных сайтов.
      </p>
    </div>
  );
}
// *  экспорт функции
// без него мы не сможем использовать этот компонент в других частях react приложения
export default Lesson01;
