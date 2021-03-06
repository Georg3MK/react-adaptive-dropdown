import * as React from 'react';
import Welcome from './Welcome';
import GridBox from '../containers/GridBox';
import SmartFrame from '../containers/SmartFrame';

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>Lets add some goods to our store!</h1>
                <Welcome user="George"/>
                <GridBox />
                <SmartFrame />
            </div>
        );
    }
}