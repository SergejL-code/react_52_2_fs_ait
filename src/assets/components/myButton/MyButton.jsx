// пример отдельного компонента кнопки
// экспорт по умолчанию можно писать как в конце так и в начале
import "./myButton.css";
function MyButton(text, func) {
  return (
    <button onClick={func} className="MyButton">
      {text}
    </button>
  );
}

export default MyButton;
