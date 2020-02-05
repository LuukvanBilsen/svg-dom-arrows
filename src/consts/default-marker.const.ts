import { MarkerAttributes } from "../models/marker-attributes.model";
import { PathAttributes } from "../models/path-attributes.model";

export const DEFAULT_MARKER: MarkerAttributes = {
    id: 'arrow',
    viewBox: '0 0 10 10',
    refX: '5',
    refY: '5',
    markerWidth: '12',
    markerHeight: '12',
    orient: 'auto-start-reverse',
}

export const DEFAULT_MARKER_PATH: PathAttributes = {
    d: 'M 0 0 L 10 5 L 0 10 z',
}
