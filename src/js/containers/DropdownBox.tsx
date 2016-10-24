import * as React from 'react';
import { connect } from 'react-redux'
import { setValue, setDropDirection } from '../actions'
import DropdownJoint from '../components/Dropdown-2'
import DropdownSeparate from '../components/Dropdown-3'

const mapStateToProps = (state: any, props: any) => ({
    dropdown:state.dropdowns[props.id]
}),
    mapDispatchToProps =  ({
        onItemClick: setValue,
        setDropDirection: setDropDirection
    }),
    connectTo: any = connect

let DropdownBox = ({dropdown, onItemClick, setDropDirection, type}: any) => {
    switch (type) {
        case 'separate':
            return (
                <DropdownSeparate dropdown={dropdown}
                                  clickItem={onItemClick}
                                  setDirection={setDropDirection} />
            )
        case 'joint':
            return (
                <DropdownJoint dropdown={dropdown}
                               clickItem={onItemClick}
                               setDirection={setDropDirection} />
            )
    }

}

DropdownBox = connectTo(
    mapStateToProps,
    mapDispatchToProps
)(DropdownBox)

export default DropdownBox