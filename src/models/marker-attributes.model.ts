/**
 * Defines a preset of marker parameters that are used by the marker creator function mostly for ease of use
 * The model's attributes are all strings just to avoid useless validation functions
 */
export interface MarkerAttributes {
    id: string;
    viewBox: string;
    refX: string;
    refY: string;
    markerWidth: string;
    markerHeight: string;
    orient: string;
}