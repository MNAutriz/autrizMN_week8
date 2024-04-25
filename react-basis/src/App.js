import React from 'react';
import SubjectList from './SubjectList'; // Removed curly braces

const CMSCSubjects = [
  { code: "CMSC100", description: "Web Programming", id: 1 },
  { code: "CMSC150", description: "Scientific Computation", id: 2 },
  { code: "CMSC22", description: "Object-Oriented Programming", id: 3 },
];


function App() {
  return (
    <div>
      <SubjectList data={CMSCSubjects} title={'Computer Science'} /> {/* Changed title */}
    </div>
  );
}

export default App;
