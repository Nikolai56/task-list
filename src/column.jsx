import React from 'react';
import styled from 'styled-components';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
  background-color: white;
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  width: 220px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  background-color: ${props => props.isDraggingOver ? 'skyblue' : 'white'};
  padding: 8px;
  transition: background-color 0.2s ease;
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.PureComponent {
    render() {
        const { isDragDisabled, tasks, column, index } = this.props;

        return (
            <Draggable
                draggableId={column.id}
                index={index}
                isDragDisabled={isDragDisabled}
                type="column"
            >
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <Title {...provided.dragHandleProps} >{column.title}</Title>
                        <Droppable droppableId={column.id} type="task">
                            {(provided, snapshot) => (
                                <TaskList
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    isDraggingOver={snapshot.isDraggingOver}
                                >
                                    {tasks.map((task, index) => (
                                        <Task
                                            key={task.id}
                                            task={task}
                                            index={index}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </TaskList>
                            )}
                        </Droppable>
                    </Container>
                )}
            </Draggable>
        );
    }
}
