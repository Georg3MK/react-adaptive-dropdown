import * as React from 'react';
import Welcome from './Welcome';
import Grid from './Grid';
//import AddProductForm from '../containers/AddProductForm';

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>Lets add some goods to our store!</h1>
                <Welcome user="George"/>
                <Grid />
            </div>
        );
    }
}