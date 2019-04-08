import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import dragIcon from './icons/drag.svg';

const Container = styled.div`
  background-color: ${props => props.isDragging ? 'lightgreen' : 'white'};
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  user-select: none;
`;
const Title = styled.span`
  margin: 0 0 0 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default class Task extends React.PureComponent {
    render() {
        const { isDragDisabled, index, task } = this.props;

        return (
            <Draggable
                draggableId={task.id}
                index={index}
                isDragDisabled={isDragDisabled}
                type="task"
            >
                {(provided, snapshot) => (
                        <Container
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            isDragging={snapshot.isDragging}
                        >
                            <img src={dragIcon} alt="drag-image"/>
                            <Title>{task.content}</Title>
                        </Container>
                    )}
            </Draggable>
        );
    }
}
