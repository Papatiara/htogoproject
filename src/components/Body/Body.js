import React from "react"
import { css } from "emotion"

import { List } from "../List"
// import Map from './Map';

const styles = {
  list_wrapper: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
  `,
}

export const Body = () => {
  return (
    <div className={styles.list_wrapper}>
      <List />
      {/* <Map view={props.view} places={props.places} /> */}
    </div>
  )
}
