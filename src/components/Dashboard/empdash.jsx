import React from 'react';
import Header from '../other/header';
import Tasklistno from '../other/tasklistno';
import Tasklist from '../other/tasklist';

const Empdash = (props) => {
  
  return (
    <div>
      <Header changeuser={props.changeuser} Logdata={props.Logdata} />
      <Tasklistno Logdata={props.Logdata}/>
       <Tasklist Logdata={props.Logdata} />
      
    </div>

  );
};

export default Empdash;
