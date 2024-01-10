import Course from "./Course";

function Courses({ courses, removeCourse }) {
  //console.log(courses);
  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="cardDiv">
        {/* döndürme işlemi */}
        {courses.map((course) => {
          return (
            <Course
              key={course.id}
              //objenin içindeki bütün proportylere erişilebilir
              {...course}
              removeOneCourse={removeCourse}
            ></Course>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
