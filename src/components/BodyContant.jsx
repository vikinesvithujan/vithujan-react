import React from 'react'
import Button from '@material-ui/core/Button'
import MyTable from './MyTable';

export default function BodyContant() {
    return (
        <div>
            <h1> Wristband</h1>
            <Button variant="contained" color="primary">
                Add Item
            </Button>
            <MyTable/>
        </div>
    )
}
