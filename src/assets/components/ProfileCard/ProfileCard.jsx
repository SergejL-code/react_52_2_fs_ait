import "./profileCard.css";
function ProfileCard() {
  return (
    <div className="card">
      <img
        className="avatar-img"
        src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
        alt=""
      />
      <div className="name">Ivanov Ivan</div>
      <div className="profession">Software Developer</div>
      <div className="hobby">
        <p>
          Я увлекаюсь программированием, чтением книг и путешествиями. Люблю
          изучать новые технологии и создавать интересные проекты.w
        </p>
      </div>
    </div>
  );
}
export default ProfileCard;
