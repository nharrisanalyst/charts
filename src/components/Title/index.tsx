/// Title componet for charts 

// copyright leyendo llc 

// this component will only work in a SVG chart

import React from 'react'
import type * as CSS from 'csstype';

type titleProps ={
    title: string;
}
 
const groupStyles: CSS.Properties ={
  textAnchor: "middle",
}


const  Title = ({title}: titleProps):React.JSX.Element =>(
  <g>
    <text style={groupStyles} x="50%">{title}</text>
  </g>
)

export default Title;