import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";

function Lesson03() {
  function sum() {
    alert(55 + 6);
  }
  function open() {
    window.open("https://de.wikipedia.org/wiki/Wikipedia:Hauptseite");
  }
  return (
    <div>
      <h2>React Props👨‍👩‍👧‍👦</h2>
      {/* <UserCard name={"Peter"} age={35} hobby={"hiking"} />
      <UserCard name={"Rosa"} age={40} hobby={"diving"} />
      <UserCard name={"Anton"} age={28} /> */}

      <MyButton text={"Berechnen"} funk={sum} />
      <MyButton text={"Open"} funk={open} />

      <MyButton text={"Berechnen"} funk={sum} />
      <MyButton />
    </div>
  );
}
export default Lesson03;
