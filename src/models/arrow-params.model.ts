/**
 * Defines the entry config that tue user provides in order to draw an arrow from element A to B
 */
export interface ArrowParams {
    /**
     * Associated className to the SVG's arrow items
     */
    className: string;

    /**
     * Reference point from where the point will start
     */
    from: ArrowParamPoint;

    /**
     * Reference point where the arrow will arrive
     */
    to: ArrowParamPoint;

    /**
     * The shape apparence of the arrow
     */
    shapeApparence?: string; // FIXME: Review this to an enum

    /**
     * Arrow settings for customization
     */
    arrowSettings?: ArrowSettings;
}

export interface ArrowParamPoint {
    /**
     * The direction refers to the bounding box of the HTMLElement
     */
    direction: string; // FIXME: Review this to an enum

    /**
     * The concerned HTMLElement
     */
    node: HTMLElement;

    /**
     * Defines the level of curvature of your arrows's bezier     * 
     */
    translation?: Array<number>;
}

export interface ArrowSettings {
    /**
     * When defined, the markerStart will be called and its marker will be pushed in the SVG defs,
     * this will be used to override the default marker provided by the library
     * @param {string} id is a valid SVG id that is used as the marker's unique ID
     * @param {SVGMarkerElement} marker is the marker element that will be appended to the SVG's defs
     */
    markerStart?: SVGMarkerElement;
    markerEnd?: SVGMarkerElement;
}
