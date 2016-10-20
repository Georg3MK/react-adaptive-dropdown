import * as React from 'react';

let Welcome = (props: any) => {
    const {user} = props

    return (
        <div>
            <h2>Welcome to products management system, {user}!</h2>
            <p>Here you can add, edit and remove products in stock.</p>
        </div>
    )
}

export default Welcome