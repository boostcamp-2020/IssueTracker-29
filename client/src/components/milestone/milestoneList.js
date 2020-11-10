import React from 'react';
import { Link } from 'react-router-dom';
import { useMilestones } from './milestoneHook';
import MilestoneItem from './milestoneItem';

const MilestoneList = (props) => {
  const [milestones, setMilestones] = useMilestones();

  const milestoneItemComponent = milestones.map((item) => <MilestoneItem milestone={item}/>);
  return (
    <div>
      <div>
        <button>Label</button>
        <p>Milestones</p>
        <Link to='/milestone/create'><button>New milestone</button></Link>
      </div>
      <div>

      </div>
      <div>
        {milestoneItemComponent}
      </div>
    </div>
  )
}

export default MilestoneList;