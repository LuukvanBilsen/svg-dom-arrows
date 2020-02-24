import { ArrowParams } from './models/arrow-params.model';
export declare class Arrow {
    private arrowPath;
    private node;
    constructor(params: ArrowParams);
    getNode(): ChildNode;
    private drawSvgContent;
    private createSvg;
    private addMarkers;
}
