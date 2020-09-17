import React, { useState } from 'react';
import { css } from 'emotion'


import List from './List';
import Map from './Map';
import ListSize from './ListSize';



const Body = (props) => {
    return (
        <div className={styles.list_wrapper}>
            <List view={props.view} business={props.business} restaurant={props.restaurant} setRestaurant={props.setRestaurant} currentCity={props.currentCity} />
            <Map view={props.view} restaurant={props.restaurant} />
        </div>
    )
}




const styles = {
    list_wrapper: css`
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
        // border: 3px solid blue;
        // margin-top: 220px;
    `,
}

export default Body;