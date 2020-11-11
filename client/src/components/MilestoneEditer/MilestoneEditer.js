import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { sendPutRequest } from '../common/api';
import { useDueDate } from '../milestone/milestoneHook';
import MilestoneInputForm from '../newMilestone/milestoneInputForm';
import LabelMilestoneTab from '../topbar/labelMilestoneTab';

const MilestoneEditer = ({ match, location }) => {
  const { oldTitle, oldDueDate, oldDescription, isOpen } = location.state;
  const [title, setTitle] = useState(oldTitle);
  const { dueDate, setDueDate, dateColor } = useDueDate(new Date(oldDueDate));
  const [description, setDescription] = useState(oldDescription);
  const [redirect, setRedirect] = useState(false);

  const { id } = match.params;

  const editMilestone = async () => {
    if (!title.length) return alert('제목을 입력해주세요.');
    if (dateColor === 'red') return alert('유효한 날짜를 입력해주세요.');
    await sendPutRequest(`/milestone/${id}`, { title, dueDate: dueDate.toISOString().slice(0, 10), description });
    setRedirect(true);
  };

  const editMilestoneState = async () => {
    debugger;
    await sendPutRequest(`/milestone/${id}/state`, { isOpen: isOpen? 0 : 1 });
    setRedirect(true);
  };

  return (
    <div>
      <div>
        <LabelMilestoneTab selected='milestone' isEdit={true} />
      </div>
      <hr />
      <MilestoneInputForm
        title={title}
        setTitle={setTitle}
        dueDate={dueDate}
        setDueDate={setDueDate}
        description={description}
        setDescription={setDescription}
        dateColor={dateColor}
      />
      <div>
        <button onClick={() => {setRedirect(true)}}>Cancel</button>
        <button onClick={editMilestoneState}>{isOpen? 'Close' : 'Open'} milestone</button>
        <button onClick={editMilestone}>Save changes</button>
      </div>
      {redirect? <Redirect to='/milestone' /> : null}
    </div>
  );
};

export default MilestoneEditer;
