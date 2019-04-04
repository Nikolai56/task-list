import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
import initialData from './initialData';
import Column from './column';

class App extends React.PureComponent {
    state = initialData;

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) { return; }

        if (
            destination.draggableId === source.draggableId &&
            destination.index === source.index
        ) { return; }

        const column = this.state.columns[source.droppableId];
        const newtaskIds = Array.from(column.taskIds);
        newtaskIds.splice(source.index, 1);
        newtaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds: newtaskIds,
        };

        const newState = {
            ...this.state,
            columns: {
                [newColumn.id]: newColumn,
            },
        };

        this.setState(newState);
    };

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                {this.state.columnOrder.map(columnOrderId => {
                    const column = this.state.columns[columnOrderId];
                    const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                    console.log(column, tasks);

                    return <Column
                        key={columnOrderId}
                        column={column}
                        tasks={tasks}
                    />;
                })}
            </DragDropContext>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
