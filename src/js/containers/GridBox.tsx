import * as React from 'react';
import { connect } from 'react-redux'
import { setPosition } from '../actions'
import Grid from '../components/Grid-2'


const mapStateToProps = (state: any) => ({
    lists: state.grids.lists,
    dropdowns:state.dropdowns
}),
    mapDispatchToProps =  ({
        setPosition: setPosition
    }),
    connectTo: any = connect   // to avoid typescript types confrontation

let GridBox = ({lists, dropdowns, setPosition}:any) => {
    return (
        <Grid lists={lists} dropdowns={dropdowns} setPosition={setPosition}/>
    )
}

GridBox = connectTo(
    mapStateToProps,
    mapDispatchToProps
)(GridBox)

export default GridBox