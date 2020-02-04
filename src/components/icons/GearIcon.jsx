import React from 'react'
import PropTypes from 'prop-types'
import {gear, gearActive} from './Icons.module.scss'

/* Used to edit user profile settings */
const GearIcon = ({dimensions, dataId, isActive}) => {
  return (
    <svg
      className={` ${isActive ? gearActive : ''} ${gear}`}
      data-id={dataId}
      width={dimensions ? dimensions : 24}
      height={dimensions ? dimensions : 24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d="M12,10 C10.9,10 10,10.9 10,12 C10,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,10 12,10 Z M17.25,12 C17.25,12.23 17.23,12.46 17.2,12.68 L18.68,13.84 C18.81,13.95 18.85,14.14 18.76,14.29 L17.36,16.71 C17.27,16.86 17.09,16.92 16.93,16.86 L15.19,16.16 C14.83,16.44 14.43,16.67 14.01,16.85 L13.75,18.7 C13.72,18.87 13.57,19 13.4,19 L10.6,19 C10.43,19 10.28,18.87 10.25,18.71 L9.99,16.86 C9.56,16.68 9.17,16.45 8.81,16.17 L7.07,16.87 C6.91,16.93 6.73,16.87 6.64,16.72 L5.24,14.3 C5.15,14.15 5.19,13.96 5.32,13.85 L6.8,12.69 C6.77,12.46 6.75,12.23 6.75,12 C6.75,11.77 6.77,11.54 6.8,11.32 L5.32,10.16 C5.19,10.05 5.15,9.86 5.24,9.71 L6.64,7.29 C6.73,7.14 6.91,7.08 7.07,7.14 L8.81,7.84 C9.17,7.56 9.57,7.33 9.99,7.15 L10.25,5.3 C10.28,5.13 10.43,5 10.6,5 L13.4,5 C13.57,5 13.72,5.13 13.75,5.29 L14.01,7.14 C14.44,7.32 14.83,7.55 15.19,7.83 L16.93,7.13 C17.09,7.07 17.27,7.13 17.36,7.28 L18.76,9.7 C18.85,9.85 18.81,10.04 18.68,10.15 L17.2,11.31 C17.23,11.54 17.25,11.77 17.25,12 Z" id="Shape" fill="#000000" fillRule="nonzero"></path>
    </svg>
  )
}

GearIcon.propTypes = {
  isActive: PropTypes.bool,
  dimensions: PropTypes.number,
  dataId: PropTypes.string,
}

export default GearIcon
