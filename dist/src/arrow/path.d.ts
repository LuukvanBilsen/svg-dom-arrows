export declare const pointSubstract: (point: any, subtrahend: any) => any;
export declare const pointAbsolute: (point: any, offset: any) => any;
export declare const pathListSVG: (points: any) => string;
export declare const smoothCurvesPathSVG: (from: any, to: any) => string;
export declare const path: (from: any, to: any, shapeApparence: any) => {
    offset: {
        x: number;
        y: number;
    };
    size: {
        width: any;
        height: any;
    };
    points: string;
};
