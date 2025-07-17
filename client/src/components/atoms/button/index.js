import React from 'react'

import styles from './button.module.scss'

function Button(props) {
    const {text, fIcon, bIcon, className, clickHandler} = props
  return (
    <button className={`${styles.button} ${className}`} onClick={clickHandler}>
        {bIcon}
    </button>
  )
}

export default Button