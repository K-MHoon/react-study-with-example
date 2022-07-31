import React from "react";

const students = [
  {
    id:1,
    name: "Black-Shiba"
  },
  {
    id:2,
    name: "White-Shiba"
  },
  {
    id:3,
    name: "Yellow-Shiba"
  },
  {
    id:4,
    name: "Rainbow-Shiba"
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>
  );
}

export default AttendanceBook;