import ProfileCard from "../../assets/components/ProfileCard/ProfileCard.jsx";
function Homework02() {
  const person1 = {
    name: "Ivanov Ivan",
    profession: "Software Developer",
    hobby:
      " Я увлекаюсь программированием, чтением книг и путешествиями. Люблю изучать новые технологии и создавать интересные проекты.",
    img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
  };
  const person2 = {
    name: "Ivanov Ivan",
    profession: "Software Developer",
    hobby:
      " Я увлекаюсь программированием, чтением книг и путешествиями. Люблю изучать новые технологии и создавать интересные проекты.",
    img: "https://99px.ru/cms/temp/module_temp1/image1_image_12910241918402121245150x150.jpg",
  };
  const person3 = {
    name: "Ivanov Ivan",
    profession: "Software Developer",
    hobby:
      " Я увлекаюсь программированием, чтением книг и путешествиями. Люблю изучать новые технологии и создавать интересные проекты.",
    img: "https://99px.ru/cms/temp/module_temp1/image1_image_1251123173741217343150x150.jpg",
  };

  // function showCard(obj) {
  //   if (obj.name && obj.profession && obj.hobby && obj.img) {
  //     return `Developer of ${obj.library} is ${obj.developer}!`;
  //   }
  //   return "Not valid data 😵";
  // }
  //   return;
  // }
  return (
    <div>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
}
export default Homework02;
