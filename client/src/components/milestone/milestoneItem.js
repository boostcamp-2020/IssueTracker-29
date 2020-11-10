import React from 'react';

const MilestoneItem = (props) => {
  return (
    <div>
      <div>
        <h2>{props.milestone.title}</h2>
        <p>{props.milestone.due_date === null ? 'No due date' : `Due by ${props.milestone.due_date}`}</p>
        <p>{props.milestone.description}</p>
      </div>
      <div>
        <div>{/* 여기서 flex를 주고, 각 칸의 길이를 조절해서 퍼센티지를 조정합니다 */}
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default MilestoneItem;

