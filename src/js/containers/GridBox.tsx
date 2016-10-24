import * as React from 'react';
import { connect } from 'react-redux'
import { setPosition } from '../actions'
import Grid from '../components/Grid'


const mapStateToProps = (state: any) => ({
    lists: state.grids.lists
}),
    mapDispatchToProps =  ({
        setPosition: setPosition
    }),
    connectTo: any = connect   // to avoid typescript types confrontation

let GridBox = ({lists, setPosition}:any) => {
    return (
        <Grid lists={lists} setPosition={setPosition}/>
    )
}

GridBox = connectTo(
    mapStateToProps,
    mapDispatchToProps
)(GridBox)

export default GridBox