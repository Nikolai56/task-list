import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
import initialData from './initialData';
import Column from './column';

class App extends React.PureComponent {
    state = initialData;

    onDragEnd = result => {
        console.log(result);
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
