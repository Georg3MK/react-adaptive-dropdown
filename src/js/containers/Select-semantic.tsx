import * as React from 'react';
import { connect } from 'react-redux'
import { addDropdown, addToSmartFrame } from '../actions'
import DropdownSeparate from './DropdownSeparate'

const mapStateToProps = (state: any, props: any) => ({
    dropdown: ((drops) => {
        let dropdown: any = undefined
        drops.map(
            (dd: any): void => {
                if(dd.id === props.id){ dropdown = dd }
            }
        )
        return dropdown
    })(state.dropdowns.drops),
    props: props
}),
    mapDispatchToProps =  ({
        addDropdown: addDropdown,
        addToSmartFrame: addToSmartFrame
    }),
    mergeProps = (stateProps:any, dispatchProps:any) => {
        
        let dropdown:any = stateProps.dropdown,
            props:any = stateProps.props,
            addDropdown:any = dispatchProps.addDropdown
            
        if(!dropdown && props.children) {
            let options: any = props.children
            dropdown = {
                id: props.id,
                items:[],
                defaultItem:0
            }
            options.map((option: any) => {
                if(option.type === 'option') {
                    dropdown.items.push(option.props.children)
                    if(option.props.selected){ dropdown.defaultItem = dropdown.items.length - 1}
                }
            })
            addDropdown(dropdown.id, dropdown)
        }

        return Object.assign({}, {dropdown}, dispatchProps)
    },
    connectTo: any = connect

let Select:any = connectTo(mapStateToProps, mapDispatchToProps, mergeProps)(DropdownSeparate)

export default Select