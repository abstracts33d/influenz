import React from 'react';

const ArrowIcon = (props) =>(
  <svg width={props.size} height={props.size} viewBox="0 0 16 16" fill={props.fill}
       xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
      <path d="M2.13647 8.13638H14.8637" stroke="#5644F6" stroke-width="2"
            stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round"/>
      <path d="M10.4092 3.68182L14.8637 8.13637L10.4092 12.5909"
            stroke="#5644F6" stroke-width="2" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="15.2727" height="15.2727"
              transform="translate(0.545654 0.181824)"/>
      </clipPath>
    </defs>
  </svg>
)

export default  ArrowIcon
