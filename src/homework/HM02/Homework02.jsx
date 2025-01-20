import ProfileCard from "../../assets/components/ProfileCard/ProfileCard.jsx";

function Homework02() {
  const person1 = {
    name: " Anton Shurupov",
    profession: "Software Developer",
    hobby:
      " Я увлекаюсь программированием, чтением книг и путешествиями. Люблю изучать новые технологии и создавать интересные проекты.",
    img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
  };
  const person2 = {
    name: "Anna Smirnova",
    profession: "QA Engineer",
    hobby: " Я увлекаюсь игрой на гитаре. ",
    img: "https://99px.ru/cms/temp/module_temp1/image1_image_12910241918402121245150x150.jpg",
  };
  const person3 = {
    name: " Alex Petrov",
    profession: "Financial Consultant",
    hobby: "Я увлекаюсь фотографированием  дикой природы",
    img: "https://99px.ru/cms/temp/module_temp1/image1_image_1251123173741217343150x150.jpg",
  };
  function showCard(person) {
    return (
      <ProfileCard
        img={person.img}
        name={person.name}
        profession={person.profession}
        hobby={person.hobby}
      />
    );
  }

  return (
    <div>
      {showCard(person1)}
      {showCard(person2)}
      {showCard(person3)}
    </div>
  );
}

export default Homework02;
