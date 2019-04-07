import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  background-color: ${props => props.isDragging ? 'lightgreen' : 'white'};
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

export default class Task extends React.PureComponent {
    render() {
        const { isDragDisabled, index, task } = this.props;

        return (
            <Draggable
                draggableId={task.id}
                index={index}
                isDragDisabled={isDragDisabled}
            >
                {(provided, snapshot) => (
                        <Container
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            isDragging={snapshot.isDragging}
                        >
                            {task.content}
                        </Container>
                    )}
            </Draggable>
        );
    }
}
