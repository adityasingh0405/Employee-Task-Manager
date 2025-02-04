import React from 'react'
import Header from '../other/header'
import Createtask from '../other/createtask'
import Alltask from '../other/alltask'

const Admindash = (props) => {
  return (
    <div>
     <Header changeuser={props.changeuser}/>
     <Createtask/>
      <Alltask/>

    </div>
    
  )
}

export default Admindash