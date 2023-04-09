'use client'

import Link from "next/link";

const Courses = ({ courses }) => {
  return (
    <div className="courses">
      {courses.map((course) => {
        return (
          <div className="card" key={course.id}>
            <h2>{course.title}</h2>
            <small>Level: {course.level}</small>
            <p>{course.description}</p>
            <Link href={course.link} target="_blank" className="btn">
              Go To Course
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
