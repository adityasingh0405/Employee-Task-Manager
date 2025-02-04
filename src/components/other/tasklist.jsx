import React from 'react';
import Acceptask from '../Tasklist/Acceptask';
import FailedTask from '../Tasklist/failedtask';
import NewTask from '../Tasklist/newtask';
import CompletedTask from '../Tasklist/completetask';

const Tasklist = ({ Logdata }) => {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap mt-8 p-4">
      <div className="flex space-x-4">
        {Logdata.tasks.map((elem, index) => {
          if (elem.active) {
            return <Acceptask key={index} Logdata={elem} />;
          }
          if (elem.newTask) {
            return <NewTask key={index} Logdata={elem} />;
          }
          if (elem.completed) {
            return <CompletedTask key={index} Logdata={elem} />;
          }
          if (elem.failed) {
            return <FailedTask key={index} Logdata={elem} />;
          }
          return null; 
        })}
      </div>
    </div>
  );
};

export default Tasklist;


{/* <div className="w-full overflow-x-auto whitespace-nowrap mt-8 p-4">
    <div className="flex space-x-4">
      <div className="min-w-[200px] bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold">Task 5</h2>
      </div>
      <div className="min-w-[200px] bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold">Task 6</h2>
      </div>
      <div className="min-w-[200px] bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold">Task 7</h2>
      </div>
      <div className="min-w-[200px] bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold">Task 8</h2>
      </div>
      <div className="min-w-[200px] bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold">Task 9</h2>
      </div>
      <div className="min-w-[200px] bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold">Task 10</h2>
      </div>
      <div className="min-w-[200px] bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold">Task 11</h2>
      </div>
      <div className="min-w-[200px] bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold">Task 12</h2>
      </div>
      <div className="min-w-[200px] bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold">Task 13</h2>
      </div>
      <div className="min-w-[200px] bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold">Task 14</h2>
      </div>
    </div>
  </div> */}