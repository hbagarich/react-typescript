import * as React from 'react';

interface ComponentProps {
    name: string;
    occurance: number;
    showOccurances?: boolean;
}

interface ComponentState {
    name: string;
}

export class Component extends React.PureComponent<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props);

    }

    public render(): JSX.Element {
        return (
            <div>This is {this.props.name} and it occurs {this.props.occurance} </div>
        );
    }
}
