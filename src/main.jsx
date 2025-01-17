import { createRoot } from "react-dom/client";
//корневой css файл проекта
import "./index.css";
import App from "./App.jsx";
import CityPage from "./assets/Consultation/components/CityPage/CityPage.jsx";
import Person from "./homework/HM01/Person.jsx";
// код в тегах ниже будет отображаться в div c id root на странице
createRoot(document.getElementById("root")).render(
  <>
    {/* вызов компонента App */}

    <App />
  </>
);
