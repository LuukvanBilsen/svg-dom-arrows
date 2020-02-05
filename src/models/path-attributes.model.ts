/**
 * Defines a path element model used by the DOM utils to generate a path
 * TODO: Maybe add more items if needed?
 */
export interface PathAttributes {
    id?: string;
    class?: string;
    d: string;
    fill?: string;
    stroke?: string;
    'marker-start'?: string;
    'marker-end'?: string;
    refX?: string;
    refY?: string;
}
