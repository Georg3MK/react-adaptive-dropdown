import * as React from 'react';
import { connect } from 'react-redux'
import { setValue, setDropDirection } from '../actions'
import DropdownSeparate from '../components/Dropdown-4'

const mapStateToProps = (state: any, props: any) => ({
    dropdown:state.dropdowns[props.id]
})

const mapDispatchToProps =  ({
    onItemClick: setValue,
    setDropDirection: setDropDirection
})

let DropdownBox = ({dropdown, pos, onItemClick, setDropDirection}:any) => {
    return (
        <DropdownSeparate dropdown={dropdown}
                          pos={pos} 
                          clickItem={onItemClick}
                          setDirection={setDropDirection} />
    )
}

DropdownBox = connect<any, {}, {}>(
    mapStateToProps,
    mapDispatchToProps
)(DropdownBox)

export default DropdownBox