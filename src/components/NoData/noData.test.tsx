import {render, screen} from "@testing-library/react";
import NoData from './';





describe("test for the <NoData /> component", ()=>{
    it('displays no data supplied', ()=>{
        render(<NoData />);
        const noData = screen.getByText('No Data Supplied to Chart');
        expect(noData).toBeInTheDocument()
    })
})