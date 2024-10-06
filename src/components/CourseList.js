import React from 'react';

const CourseList = () => {
  const courses = [
    { id: 1, title: "Course 1", description: "Description of Course 1" },
    { id: 2, title: "Course 2", description: "Description of Course 2" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id} className="mb-2 border p-2">
            <h3 className="font-bold">{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
