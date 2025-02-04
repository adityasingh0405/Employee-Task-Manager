import React from 'react'

const Tasklistno = ({Logdata}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
    <div className="bg-white shadow-lg rounded-xl p-6 text-center">
      <h2 className="text-xl font-semibold">Active:{Logdata.taskCounts.active}</h2>
    </div>
    <div className="bg-white shadow-lg rounded-xl p-6 text-center">
      <h2 className="text-xl font-semibold">newtask:{Logdata.taskCounts.newTask}</h2>
    </div>
    <div className="bg-white shadow-lg rounded-xl p-6 text-center">
      <h2 className="text-xl font-semibold">completed:{Logdata.taskCounts.completed}</h2>
    </div>
    <div className="bg-white shadow-lg rounded-xl p-6 text-center">
      <h2 className="text-xl font-semibold">failed:{Logdata.taskCounts.failed}</h2>
    </div>
  </div>

  )
}

export default Tasklistno