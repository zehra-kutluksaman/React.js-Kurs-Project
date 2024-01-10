import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Courses from "./Courses";
import Loading from "./Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeletedCourses);
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      //atacağım isteği bir değişkene attım
      const response = await axios.get("http://localhost:3000/courses");

      //burdan gelen 5 tane obje bulunan arrayi coursesın içine atacak
      setCourses(response.data);
      setLoading(false);
    } catch (error) {}

    debugger;
  };

  //bu kullanımda array kullanırsa render bir kere yapılır sürekli renderlanmaz.
  useEffect(() => {
    //istek atacak method
    fetchCourses();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="refleshDiv">
              <h2>Kursların hepsini sildiniz!</h2>
              <button
                className="cardDeleteBtn"
                onClick={() => {
                  fetchCourses();
                }}
              >
                Yenile
              </button>
            </div>
          ) : (
            <Courses
              //ilk courses props ismi
              courses={courses}
              removeCourse={deleteCourse}
            ></Courses>
          )}
        </>
      )}
    </div>
  );
}

export default App;
