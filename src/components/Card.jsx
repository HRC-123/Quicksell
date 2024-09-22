import React from 'react'
import avatar from '../data/avatar.jpg'
import done from '../data/Done.svg'
import inProcess from '../data/No-priority.svg'
import priority from '../data/Img - Low Priority.svg'
const Card = (props) => {
    const {ticket}=props;
    console.log(ticket);
  return (
        <div className='card'>
            <div className='header-row'>
                <div class='name-label'>{ticket.id}</div>
                <img src={avatar} className='avatar-image' />
            </div>
            <div className='info-row'>
                <img src={done} className='status-icon'/>
                <div className='action-label'>{ticket.title}</div>
            </div>
            <div className='tag-row'>
                <img src={inProcess} className='status-badge'/>
                <div className='tag-item'> 
                    <img src={priority} className='priority-icon' />
                    <div className='tag-label'>ticket.Tag</div>
                </div>
            </div>
        </div>
  )
}

export default Card