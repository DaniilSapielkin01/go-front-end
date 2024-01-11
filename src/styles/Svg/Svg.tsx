import React from 'react'
import styles from './Svg.module.scss'

const Svg = (props: any) => {
  return <span className={styles.span}>{props.children}</span>
}

export default Svg
