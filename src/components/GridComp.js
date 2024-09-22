import React from 'react'
import avatar from '../data/avatar.jpg'
import add from '../data/add.svg'
import dot from '../data/3 dot menu.svg'
import Card from './Card'
const GridComp = (props) => {
    console.log(props);
    const tickets=props.tickets;
    const user=props.user;
    console.log(tickets);
    console.log(user);
  return (
  <div  className='container'>
    <div className='header_2'>
      <div className='user-info'>
      <img src={avatar} className='avatar' />
      <div>{user.name}</div>
      <div className='card-count'>{tickets.length}</div>
      </div>
      <div className='actions'>
        <img src={add} className='icon'/>
        <img src={dot} className='icon'/>
      </div>
    </div>

    <div className='card-section'>
      {
        tickets.map(ticket=><Card ticket={ticket}/>)
      }
    </div>
   
    </div>
  )
}

export default GridComp;