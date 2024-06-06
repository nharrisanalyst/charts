import type { Story } from "@ladle/react";
import Title from './';

const props ={
    title:"Weight vs Height "
}

import { SVG_STANDARDS } from "../Chart";
 
export const Primary: Story = () => <svg><g transform={`translate(0,${SVG_STANDARDS.margin.top})`}><Title {...props} /></g></svg>;