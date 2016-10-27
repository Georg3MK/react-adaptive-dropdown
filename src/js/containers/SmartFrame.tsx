import * as React from 'react'
import { connect } from 'react-redux'
import DropdownSeparate from '../components/Dropdown-3'

const mapStateToProps = (state: any) => ({
        elements: state.smartFrame
    }),
    mapDispatchToProps =  ({

    }),
    connectTo: any = connect

let SmartFrame = (props:any) => {
    let count: number = 0
    return (
        <div className="smartFrame">
            {
                props.elements.map((el: any) => {
                    switch (el.type) {
                        case 'dropdownSeparate':
                            let {dropdown, clickItem, setDirection, changeDirection} = el.props
                            return (
                                <DropdownSeparate dropdown={dropdown}
                                                  clickItem={clickItem}
                                                  setDirection={setDirection}
                                                  changeDirection={changeDirection}
                                                  key={count++}
                                />
                            )
                    }
                })
            }
        </div>
    )
}

SmartFrame = connectTo(
    mapStateToProps,
    mapDispatchToProps
)(SmartFrame)

export default SmartFrame
