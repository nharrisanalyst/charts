//Chart Componet is an SVG 

import {render, screen} from '@testing-library/react';
import Chart from './';


describe("unit test for <Chart/>", ()=>{
    
    it('renders initial svg', ()=>{
        render(<Chart />)
        const chart = screen.getByTestId('chart-svg-test-id');
        expect(chart).toBeInTheDocument();
    })

    it('renders an initial group', ()=>{
        const { container } = render(<Chart />);
        const group = container.querySelector('g');
        expect(group).toBeTruthy();
    })
})
