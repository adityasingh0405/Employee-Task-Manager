import React from 'react'

const FailedTask = ({Logdata}) => {
  return (
    <div>
        <div className="min-w-[200px] bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold">{Logdata.taskTitle}</h2>
        <h3 className="text-xl font-semibold">{Logdata.taskDescription}</h3>
        <h3 className="text-xl font-semibold">{Logdata.taskDate}</h3>
        <h3 className="text-xl font-semibold">{Logdata.category}</h3>
      </div>
    </div>
  )
}

export default FailedTask