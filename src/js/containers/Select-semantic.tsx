import * as React from 'react';
import { connect } from 'react-redux'
import { addDropdown, setValue, setDropDirection, addToSmartFrame } from '../actions'
import DropdownSimple from '../components/Dropdown'
import DropdownJoint from '../components/Dropdown-2'

const mapStateToProps = (state: any, props: any) => ({
    dropdown: ((drops) => {
        let dd: any = undefined
        drops.map(
            (dropdown: any): void => {
                if(dropdown.id === props.id){ dd = dropdown }
            }
        )
        return dd
    })(state.dropdowns),
    props: props
}),
    mapDispatchToProps =  ({
        addDropdown: addDropdown,
        onItemClick: setValue,
        setDropDirection: setDropDirection,
        addToSmartFrame: addToSmartFrame
    }),
    connectTo: any = connect

let Select = ({
        dropdown,
        addDropdown,
        onItemClick,
        setDropDirection,
        addToSmartFrame,
        changeDirection,
        props
    }: any) => {

    if(!dropdown && props.children) {
        let options: any = props.children
        var dropdown: any = {
                id: props.id,
                items:[],
                type: props.type
            }

        options.map((option: any) => {
            if(option.type === 'option') {
                dropdown.items.push(option.props.children)
                if(option.props.selected){ dropdown.defaultItem = dropdown.items.length - 1}
            }
        })

        if(!dropdown.defaultItem) { dropdown.defaultItem = 0 }
        addDropdown(dropdown.id, dropdown)
    }

    switch (dropdown.type) {
        case 'separate':
            addToSmartFrame(dropdown.id, 'dropdownSeparate', {
                dropdown: dropdown,
                clickItem: onItemClick,
                setDirection: setDropDirection,
                changeDirection: changeDirection
            })
            return null
        case 'joint':
            return (
                <DropdownJoint dropdown={dropdown}
                               clickItem={onItemClick}
                               setDirection={setDropDirection}
                               changeDirection={changeDirection}/>
            )
        case 'simple':
            return (
                <DropdownSimple dropdown={dropdown}
                               clickItem={onItemClick}
                               setDirection={setDropDirection}
                               changeDirection={changeDirection}/>
            )
    }
}

Select = connectTo(
    mapStateToProps,
    mapDispatchToProps
)(Select)

export default Select