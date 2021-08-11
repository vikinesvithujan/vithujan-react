import React from 'react'
import Header from '../components/Header'
import Grid from '@material-ui/core/Grid';
import SideBar from './SideBar';
import BodyContant from './BodyContant';
export default function Dashboard() {
    return (
        <div>
            <Header />
            <Grid container spacing={4}>
                <Grid item xs={4}> <SideBar/></Grid>
                <Grid item xs={8}> <BodyContant/></Grid>
            </Grid>
        </div>
    )
}
