import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import SvgSettingsLogo from '../common/svgSettingsLogo.js';
import { useAssignees, useLabels, useMilestones, useIssueAssignees, useIssueLabels } from '../common/issueSideBarHook';
// import IssueSideBarModal from '../common/issueSideBarModal';
import Modal from '../common/modal';
import { ControlValueContext, LabelContext, AssigneesContext } from '../common/context.js';
import NewIssueSidebarItem from './newIssueSidebarItem';
import LabelItem from '../common/labelItem';


const IssueSideBar = styled.div`
    width: 30%;
    height: 200px;
    backgrond-color: black;
`;

const AssigneesHeader = styled.div`
    height: 30px;
    display: flex;
`;

const AssigneesContainer = styled.div`
    height: 100px;
    border: 1px solid #d1d5da;
`;

const LabelsHeader = styled.div`
    height: 30px;
    display: flex;
`;

const LabelsContainer = styled.div`
    height: 100px;
    border: 1px solid #d1d5da;
`;

const LabelListContainer = styled.div`
    margin-top: 20px;
    display: flex;
`;

const MilestoneHeader = styled.div`
    height: 30px;
    // display: flex;
`;

const MilestoneContainer = styled.div`
    height: 100px;
    border: 1px solid #d1d5da;
`;

const SideBarWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProfileBox = styled.img`
    width: 20px;
    height: 20px;
    src: ${props => props.src};
    border: 1px solid black;
`;

const AssgineesBox = styled.div`
    display: flex;
`;

const AssigneesModal = (props) => {
    const [onModal, setOnModal] = useState(false);
    const assignees = useAssignees();
    // const [newAssignees, setNewAssignees] = useState([]);
    const assigneesComponent = assignees.map(item => <NewIssueSidebarItem key={item.id} user={item} username={item.username} profile={item.profile} newAssignees={props.newAssignees} setNewAssignees={props.setNewAssignees} />)

    const filteredNewAssignees = assignees.filter(item => props.newAssignees.includes(item.id));
    const newAssigneesComponent = filteredNewAssignees.map(item => <AssgineesBox><ProfileBox src={item.profile} /><div>{item.username}</div></AssgineesBox>);

    const toggleModal = () => setOnModal(!onModal);
    return (
        <div>
            <SvgSettingsLogo toggle={toggleModal} />
            {newAssigneesComponent}
            <Modal
                onModal={onModal}
                setOnModal={setOnModal}
                title="Assign up to 10 people to this issue"
                items={assigneesComponent}
            />
        </div>
    );
};

const LabelsModal = (props) => {
    const [onModal, setOnModal] = useState(false);
    const labels = useLabels();
    // const [newLabels, setNewLabels] = useState([]);

    const labelsComponent = labels.map(item => <NewIssueSidebarItem key={item.id} label={item} name={item.name} description={item.description} color={item.color} newLabels={props.newLabels} setNewLabels={props.setNewLabels} />)

    const filteredNewLabels = labels.filter(item => props.newLabels.includes(item.id));
    const newLabelsComponent = filteredNewLabels.map(item => <LabelItem key={item.id} label={item} />)

    const toggleModal = () => setOnModal(!onModal)
    return (
        <div>
            <SvgSettingsLogo toggle={toggleModal} />
            {newLabelsComponent ? <div>{newLabelsComponent}</div> : <div>No Labels</div>}
            <Modal
                onModal={onModal}
                setOnModal={setOnModal}
                title="Apply labels to this issue"
                items={labelsComponent}
            />
        </div>
    );
};

const MilestonesModal = (props) => {
    const [onModal, setOnModal] = useState(false);
    const milestones = useMilestones();
    // const [newMilestone, setNewMilestone] = useState("");

    const milestonesComponent = milestones.map(item => <NewIssueSidebarItem key={item.id} id={item.id} milestone={item} title={item.title} due_date={item.due_date} newMilestone={props.newMilestone} setNewMilestone={props.setNewMilestone} />)

    // const filteredNewMilestone = milestones.filter(item => newMilestone.id === item.id);
    // const newMilestoneComponent = filteredNewMilestone
    // console.log(filteredNewMilestone);
    // console.log(newMilestone)
    // const [milestoneTitle, setMilestoneTitle] = useState(props.issue.milestone_title);
    // useEffect(() => {setMilestoneTitle(props.issue.milestone_title)}, [props.issue.milestone_title]);

    const toggleModal = () => setOnModal(!onModal)
    return (
        <div>
            <SvgSettingsLogo toggle={toggleModal} />
            {/* {milestoneTitle ? <div>{milestoneTitle}</div> : <div>No milestone</div>} */}
            {props.newMilestone.title}
            <Modal
                onModal={onModal}
                setOnModal={setOnModal}
                title="Set milestone"
                items={milestonesComponent}
            />
        </div>
    );
};

const NewIssueDetailSideBar = (props) => {
    return (
        <>
            <IssueSideBar>
                <AssigneesContainer>
                    <AssigneesHeader>
                        <h3>Assignees</h3>
                        <AssigneesModal newAssignees={props.newAssignees} setNewAssignees={props.setNewAssignees} />
                    </AssigneesHeader>
                </AssigneesContainer>
                <LabelsContainer>
                    <LabelsHeader>
                        <h3>Labels</h3>
                        <LabelsModal newLabels={props.newLabels} setNewLabels={props.setNewLabels} />
                    </LabelsHeader>
                </LabelsContainer>
                <MilestoneContainer>
                    <MilestoneHeader>
                        <h3>Milestone</h3>
                        <MilestonesModal newMilestone={props.newMilestone} setNewMilestone={props.setNewMilestone} />
                    </MilestoneHeader>
                </MilestoneContainer>
            </IssueSideBar>
        </>
    )
}

export default NewIssueDetailSideBar;