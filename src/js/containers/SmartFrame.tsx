import * as React from 'react'
import { connect } from 'react-redux'
import { setValue, setDropDirection } from '../actions'
import Dropdown from '../components/Dropdown'

const mapStateToProps = (state: any) => ({
        smartFrame: state.dropdowns.smartFrame,
        dropdowns: state.dropdowns.drops,
        changeDirection: state.dropdowns.actions.changeDirection
    }),
    mapDispatchToProps =  ({
        onItemClick: setValue,
        setDropDirection: setDropDirection
    }),
    connectTo: any = connect

let SmartFrame = (props:any) => {
    let count: number = 0
    
    return (
        <div className="smartFrame">
            {
                props.smartFrame.map((el: any) => {
                    switch (el.type) {
                        case 'dropdown':
                            let dropdown = ((drops) => {
                                let drop:any = undefined
                                    drops.map((dd:any) => {
                                        if(dd.id === el.id) {
                                            drop = dd
                                        }
                                    })
                                return drop
                            })(props.dropdowns)

                            return (
                                <Dropdown dropdown={dropdown}
                                        onItemClick={props.onItemClick}
                                        setDropDirection={props.setDropDirection}
                                        changeDirection={props.changeDirection}
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
