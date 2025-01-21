import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";

function Lesson03() {
  const handleClick = () => {
    console.log("Click!");
  };

  const handleSubmit = () => {
    alert("Submit");
  };
  return (
    <div>
      <h2>React Props👨‍👩‍👧‍👦</h2>
      {/* Вызов компонента */}
      {/* <UserCard name={"Peter"} age={35} hobby={"hiking"} />
      <UserCard name={"Rosa"} age={40} hobby={"diving"} />
      <UserCard name={"Anton"} age={28} /> */}

      <MyButton func={handleClick} text={"Click me!"} type={"button"} />
      <MyButton func={handleSubmit} text={"Submit"} type={"submit"} />

      {/* Пример передачи небольшой функций внутри тега вызова без прописного в теле  */}
      <MyButton
        func={() => alert("👌 No Handle")}
        text={"No Handel!"}
        type={"submit"}
      />
    </div>
  );
}
export default Lesson03;
