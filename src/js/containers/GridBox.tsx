import * as React from 'react';
import { connect } from 'react-redux'
import { setPosition } from '../actions'
import Grid from '../components/Grid-semantic'

const mapDispatchToProps =  ({
        setPosition: setPosition
    }),
    connectTo: any = connect   // to avoid typescript types confrontation

let GridBox = connectTo(null, mapDispatchToProps)(Grid)

export default GridBox