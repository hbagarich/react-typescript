import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from './component';

class Index extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <Component
                name="barbara"
                occurance={10}
                showOccurances={false}
            />
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
