import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from './component';
import { StudentProps } from '../demo/student';
import { Lecture } from '../demo/lecture';

class Index extends React.Component<{}, {}> {
    public render(): JSX.Element {
        const students: Array<StudentProps> = [
            {
                name: 'Hrvoje',
                surname: 'Bagaric'
            },
            {
                name: 'Dino',
                surname: 'Kacavenda'
            }
        ];
        return (
            <Lecture
                students={students}
                lecturerName="Mark"
            />
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
