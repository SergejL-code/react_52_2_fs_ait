import User from "./User";

function UserCard() {
  const name1 = "Michail";
  return (
    <div>
      <User
        firstName={name1}
        lastName="Ivanova"
        age="13"
        userName="alalala"
        email="mail2@gmail.com"
      />
      <User
        firstName="Anna"
        lastName="Sidorova"
        age="33"
        userName="hhnhnhn"
        email="mail3@gmail.com"
      />
      <User
        firstName="Petr"
        lastname="Ushanov"
        age="55"
        userName="rmrmrr"
        email="mail4@gmail.com"
      />
      <User
        firstName="Anna"
        lastname="Sidorova"
        age="33"
        userName="hhnhnhn"
        email="mail3@gmail.com"
      />
      <User
        firstName="Petr"
        lastname="Ushanov"
        age="55"
        userName="rmrmrr"
        email="mail4@gmail.com"
      />
    </div>
  );
}

export default UserCard;
