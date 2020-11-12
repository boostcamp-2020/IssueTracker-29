import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import SvgSettingsLogo from './svgSettingsLogo.js';
import { useAssignees, useLabels, useMilestones, useIssueAssignees, useIssueLabels } from './issueSideBarHook';
import Modal from './modal';
import useModal from './modalhook';
import { ControlValueContext } from './context.js';
import { Redirect } from 'react-router-dom';
import SideBarItem from './sideBarItem.js';
import LabelItem from './labelItem';

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
    const [onModal, setOnModal] = useModal('assignee');
    const assignees = useAssignees();
    const issueAssignees = useIssueAssignees(props.issue_id);

    const assigneesNameComponent = issueAssignees.map(item => <AssgineesBox><ProfileBox src={item.profile} /><div>{item.username}</div></AssgineesBox>)
    const [selectedAssignees, setSelectedAssignees] = useState([]);

    const assigneesComponent = assignees.map(item => <SideBarItem key={item.id} username={item.username} profile={item.profile} selectedAssignees={selectedAssignees} setSelectedAssignees={setSelectedAssignees}/>)

    const toggleModal = () => setOnModal(!onModal);
    return (
        <div>
            <SvgSettingsLogo toggle={toggleModal} />
            {assigneesNameComponent}
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
    const [onModal, setOnModal] = useModal('label');
    const labels = useLabels();

    const issueLabels = useIssueLabels(props.issue_id);
    const labelsListComponent = issueLabels.map(item => <LabelItem key={item.id} label={item}/>)

    const labelsComponent = labels.map(item => <SideBarItem key={item.id} name={item.name} description={item.description} color={item.color}/>)

    const toggleModal = () => setOnModal(!onModal)
    return (
        <div>
            <SvgSettingsLogo toggle={toggleModal} />
            {labelsListComponent}
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
    const [onModal, setOnModal] = useModal('milestone');
    const milestones = useMilestones();

    const [milestoneTitle, setMilestoneTitle] = useState(props.issue.milestone_title);
    useEffect(() => {setMilestoneTitle(props.issue.milestone_title)}, [props.issue.milestone_title]);

    const milestonesComponent = milestones.map(item => <SideBarItem key={item.id} id={item.id} title={item.title} due_date={item.due_date} issue_id={props.issue_id} setMilestoneTitle={setMilestoneTitle}/>)

    const toggleModal = () => setOnModal(!onModal)
    return (
        <div>
            <SvgSettingsLogo toggle={toggleModal} />
            {milestoneTitle ? <div>{milestoneTitle}</div> : <div>No milestone</div>}
            <Modal
                onModal={onModal}
                setOnModal={setOnModal}
                title="Set milestone"
                items={milestonesComponent}
            />
        </div>
    );
};

const IssueDetailSideBar = (props) => {
    return (
        <>
            <IssueSideBar>
                <AssigneesContainer>
                    <AssigneesHeader>
                            <h3>Assignees</h3>
                            <AssigneesModal issue_id={props.issue_id} issue={props.issue} />
                    </AssigneesHeader>
                </AssigneesContainer>
                <LabelsContainer>
                    <LabelsHeader>
                        <h3>Labels</h3>
                        <LabelsModal issue_id={props.issue_id} issue={props.issue} />
                    </LabelsHeader>
                </LabelsContainer>
                <MilestoneContainer>
                    <MilestoneHeader>
                        <h3>Milestone</h3>
                        <MilestonesModal issue_id={props.issue_id} issue={props.issue} />
                    </MilestoneHeader>
                </MilestoneContainer>
            </IssueSideBar>
        </>
    )
}

export default IssueDetailSideBar;