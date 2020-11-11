import React from 'react';
import styled from 'styled-components';

const SideBarContainer = styled.div`
    width: 80%;
    // height: 50px;
    border: 1px solid black;
`;

const ColorBox = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.color};
    border-radius: 5px;
`;

const ProfileBox = styled.img`
    width: 20px;
    height: 20px;
    src: ${props => props.src};
    border: 1px solid black;
`;

const sideBarItem = (props) => {
  return (
    <SideBarContainer>
        {props.username ?
            <>
                <ProfileBox src={props.profile} />
                <div>{props.username}</div>
            </>
        : null}
        {props.name ? 
            <>
                <ColorBox color={props.color} />
                <div>{props.name}</div>
                <div>{props.description}</div>
            </>
        : null}
        {props.title ? <p>{props.title}</p> : null}
    </SideBarContainer>
  )
}

export default sideBarItem;