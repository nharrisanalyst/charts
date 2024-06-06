import React from 'react';


interface chartPresentation{
    title?:string;
}


type chartProps ={
    presentation?:chartPresentation,
}

export const SVG_STANDARDS ={
     height:400,
     width:640,
     margin:{top: 20, right: 30, bottom: 30, left: 40}
}

const Chart = ({}:chartProps):React.JSX.Element =>{

    return(
        <svg data-testid="chart-svg-test-id" height={SVG_STANDARDS.height} width={SVG_STANDARDS.width}>
            <g transform={`translate(${SVG_STANDARDS.margin.left},${SVG_STANDARDS.margin.top})}`} ></g>
        </svg>
    )
}

export default Chart;