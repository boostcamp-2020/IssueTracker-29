import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import SvgSettingsLogo from './svgSettingsLogo.js';
import { useAssignees, useLabels, useMilestones } from './issueSideBarHook';
import Modal from './modal';
import useModal from './modalhook';
import { ControlValueContext } from './context.js';
import { Redirect } from 'react-router-dom';
import SideBarItem from './sideBarItem.js';
// import tabList from '../issuelist/tabList';

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
    display: flex;
`;

const MilestoneContainer = styled.div`
    height: 100px;
    border: 1px solid #d1d5da;
`;

const SideBarWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AssigneesModal = (props) => {
    const [onModal, setOnModal] = useModal('assignee');
    const assignees = useAssignees();
    const [selectedAssignees, setSelectedAssignees] = useState([]);
    const assigneesComponent = assignees.map(item => <SideBarItem key={item.id} username={item.username} profile={item.profile} selectedAssignees={selectedAssignees} setSelectedAssignees={setSelectedAssignees}/>)

    const toggleModal = () => setOnModal(!onModal);
    return (
        <div>
            <SvgSettingsLogo toggle={toggleModal} />
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

    const labelsComponent = labels.map(item => <SideBarItem key={item.id} name={item.name} description={item.description} color={item.color}/>)
    const toggleModal = () => setOnModal(!onModal)
    return (
        <div>
            <SvgSettingsLogo toggle={toggleModal} />
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

    const milestonesComponent = milestones.map(item => <SideBarItem key={item.id} title={item.title} />)
    const toggleModal = () => setOnModal(!onModal)
    return (
        <div>
            <SvgSettingsLogo toggle={toggleModal} />
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
                        <SideBarWrap>
                            <h3>Assignees</h3>
                            <AssigneesModal />
                        </SideBarWrap>
                    </AssigneesHeader>
                </AssigneesContainer>
                <LabelsContainer>
                    <LabelsHeader>
                        <h3>Labels</h3>
                        <LabelsModal />
                    </LabelsHeader>
                </LabelsContainer>
                <MilestoneContainer>
                    <MilestoneHeader>
                        <h3>Milestone</h3>
                        <MilestonesModal />
                    </MilestoneHeader>
                </MilestoneContainer>
            </IssueSideBar>
        </>
    )
}

export default IssueDetailSideBar;