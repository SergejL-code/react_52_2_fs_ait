import "./profileCard.css";
function ProfileCard({ name, profession, hobby, img }) {
  return (
    <div className="card">
      <img className="avatar-img" src={img} alt={`${name}'s avatar`} />
      <div className="name">{name}</div>
      <div className="profession">{profession}</div>
      <div className="hobby">
        <p>{hobby}</p>
      </div>
    </div>
  );
}
export default ProfileCard;
