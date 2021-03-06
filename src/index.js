import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import initialData from './initialData';
import Column from './column';

const Container = styled.div`
  display: flex;
`;

class App extends React.PureComponent {
    state = initialData;

    onDragEnd = result => {
        console.log(result);
        const { destination, source, draggableId, type } = result;

        if (!destination) { return; }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) { return; }

        if (type === 'column') {
            const newColumnOrder = Array.from(this.state.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            const newState = {
                ...this.state,
                columnOrder: newColumnOrder,
            };

            this.setState(newState);
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {
            const newtaskIds = Array.from(start.taskIds);
            newtaskIds.splice(source.index, 1);
            newtaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newtaskIds,
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            };

            this.setState(newState);
            return;
        }

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        this.setState(newState);

    };

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <Droppable
                    droppableId="all-columns"
                    direction="horizontal"
                    type="column"
                >
                    {(provided, snapshot) => (
                        <Container
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.state.columnOrder.map((columnOrderId, index) => {
                                const column = this.state.columns[columnOrderId];
                                console.log('column', column);
                                const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                                console.log('tasks', tasks);

                                return <Column
                                    key={columnOrderId}
                                    column={column}
                                    tasks={tasks}
                                    index={index}
                                />;
                            })}
                            {provided.placeholder}
                        </Container>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
