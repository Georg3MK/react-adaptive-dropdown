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
    
    let setDirection = (
        id: number,
        elem: any,
        offset: number,
        dropHeight: number) => {

        let timer: any = null

        function findOffset(elem: any, dropHeight: number, offset: any) {
            if(type === 'joint') {
                var el = elem,
                    offset = el.offsetTop

                while (el.offsetParent !== document.body) {
                    el = el.offsetParent
                    offset += el.offsetTop
                }
            }

            offset = document.documentElement.clientHeight - (offset - window.pageYOffset)

            if(offset >= dropHeight) { return 'bottom' }
            else { return 'top' }
        }

        window.addEventListener('resize',
            () => {
                if(timer) { clearTimeout(timer) }
                timer = setTimeout(
                    () => {
                        setDropDirection(id, findOffset(elem, dropHeight, offset))
                    }
                    ,300)
            },false)

        setDropDirection(id, findOffset(elem, dropHeight, offset))
    }
    
    switch (type) {
        case 'separate':
            return (
                <DropdownSeparate dropdown={dropdown}
                                  clickItem={onItemClick}
                                  setDirection={setDirection} />
            )
        case 'joint':
            return (
                <DropdownJoint dropdown={dropdown}
                               clickItem={onItemClick}
                               setDirection={setDirection} />
            )
    }

}

DropdownBox = connectTo(
    mapStateToProps,
    mapDispatchToProps
)(DropdownBox)

export default DropdownBox