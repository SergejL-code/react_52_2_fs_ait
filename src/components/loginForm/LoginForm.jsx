import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
function LoginForm({ name, type }) {
  const handleSubmit = () => {
    alert("Submit");
  };
  return (
    <div className="form">
      <form action="" method="get" className="form-login">
        <div>
          <input type="text" name="name" required placeholder="" title="" />
        </div>
        <div>
          <input type="password" name="" id="" />
        </div>
        <div>
          <input type="email" name="" id="" />
        </div>
      </form>
      <div>
        <MyButton type={"submit"} text={"SUBMIT"} funk={handleSubmit} />
      </div>
      <div>
        <MyInput />
        <MyButton />
      </div>

      <div></div>
    </div>
  );
}
export default LoginForm;
