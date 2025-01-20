import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
function LoginForm({ name, type }) {
  return (
    <div>
      <form action="" className="form-login">
        <div>
          <label htmlFor="name">Enter your name:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="password">Enter your password:</label>
          <input type="password" name="" id="" />
        </div>
        <div>
          <label htmlFor="email">Enter your Email:</label>
          <input type="email" name="" id="" />
        </div>
      </form>
      <div>
        <MyButton submit={type} />
      </div>
      <div>
        <MyInput />
      </div>
    </div>
  );
}
export default LoginForm;
