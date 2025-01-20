import "./userCard.css";
function UserCard(props) {
  return (
    <div className="userCard">
      <h4>Name:{props.name}</h4>
      <p>Age:{props.age}</p>
      <p>Hobby:{props.hobby}</p>
    </div>
  );
}
export default UserCard;
