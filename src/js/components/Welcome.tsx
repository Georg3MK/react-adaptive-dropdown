import * as React from 'react';

export interface WelcomeProps { user: string }

export default class Welcome extends React.Component<WelcomeProps, {}> {
    render() {
        return (
            <div>
                <h2>Welcome to products management system, {this.props.user}!</h2>
                <p>Here you can add, edit and remove products in stock.</p>
            </div>
        );
    }
}