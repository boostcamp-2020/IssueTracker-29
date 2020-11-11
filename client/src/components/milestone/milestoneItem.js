import React from 'react';
import { Link } from 'react-router-dom';

const MilestoneItem = ({ milestone }) => {
  return (
    <div>
      <div>
        <h2>{milestone.title}</h2>
        <p>{milestone.due_date === null ?
          'No due date' :
          `Due by ${new Date(milestone.due_date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`}
        </p>
        <p>{milestone.description}</p>
      </div>
      <div>
        <div>{/* 여기서 flex를 주고, 각 칸의 길이를 조절해서 퍼센티지를 조정합니다 */}
          <span></span>
          <span></span>
        </div>
        <div>
          <Link to={{pathname: `/milestone/${milestone.id}`, state: {
            oldTitle: milestone.title,
            oldDueDate: new Date(milestone.due_date).toISOString().slice(0, 10),
            oldDescription: milestone.description,
            isOpen: milestone.is_open,
          }
          }}>Edit</Link>
          <span>{milestone.is_open? 'Close' : 'Open'}</span>
          <span>Delete</span>
        </div>
      </div>
    </div>
  )
}

export default MilestoneItem;

