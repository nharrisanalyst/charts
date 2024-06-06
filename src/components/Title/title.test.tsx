import {render, screen } from '@testing-library/react' ;
import Title from './';



describe('test for the <title> components', ()=>{
    it('has the title', ()=>{
        const title = "Weight vs Height";
        render(<svg><Title title={title} /></svg>);
        const titleText = screen.getAllByText(title);
        expect(titleText).toBeTruthy();
    })
})