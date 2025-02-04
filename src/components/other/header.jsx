import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState("");


  // useEffect(() => {
  //   if (!props.Logdata) {
  //     setUsername("Admin");
  //   } else {
  //     setUsername(props.Logdata.firstName); 
  //   }
  // }, [Logdata]); 

  const logout = () => {
    localStorage.setItem('Loggedinuser',"");
    // window.location.reload();
    props.changeuser('')
    }

  return (
    <div className="flex items-center justify-between bg-blue-500 p-4 text-white">
      <div className="flex items-center space-x-3">
        <h1 className="text-xl font-bold">Hello{username}</h1>
      </div>
      <div>
        <button onClick={logout} className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow hover:bg-gray-200">
          Log out
        </button>
      </div>
    </div>
  );
}

export default Header;
