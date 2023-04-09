"use client";

import { useState, useEffect } from "react";
import LoadingPage from "./loading";

import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setIsLoading(false);
    };

    getCourses();
  }, []);

  if (isLoading) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  return (
    <>
      <h1>Welcome To Mohammed Media</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
