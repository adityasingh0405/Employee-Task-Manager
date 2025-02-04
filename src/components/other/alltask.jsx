import React, { useContext } from 'react';
import { AuthContext } from '../../context/authcontext';

const Alltask = () => {
  const authdata = useContext(AuthContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {authdata.employees.map((elem, key) => (
        <div
          key={key} 
          className="bg-white shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">{elem.firstName}</h2>
          
          <div className="text-gray-600">
            <p  className="font-semibold">Active: {elem.taskCounts.active} </p>
            <p className="ml-2 font-semibold">New: {elem.taskCounts.newTask}</p>
            <p className="ml-2 font-semibold">Completed: {elem.taskCounts.completed}</p>
            <p className="ml-2 font-semibold">Failed: {elem.taskCounts.failed}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Alltask;
