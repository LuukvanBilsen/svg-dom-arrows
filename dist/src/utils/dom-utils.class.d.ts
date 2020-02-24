import { MarkerAttributes } from '../models/marker-attributes.model';
import { PathAttributes } from '../models/path-attributes.model';
/**
 * This class is composed of static utility functions that lets the library make DOM manipulations without
 * adding a layer of complexity.
 */
export declare class DomUtils {
    /**
     * Converts a html string to HTML elements
     * @param {String} HTML representing any number of sibling elements
     * @return {NodeList} Generated array of ChildNodes from the inputted string
    */
    static htmlToElements(html: string): NodeListOf<ChildNode>;
    /**
     * Creates an SVG Marker
     * @param {string} innerXml the inner XML of the marker
     */
    static createMarkerElement(attributes: MarkerAttributes): SVGMarkerElement;
    /**
     *
     * @param {PathParams} attributes the usual attributes of an SVG path
     */
    static createPathElement(attributes: PathAttributes): SVGPathElement;
    static applyAttributesToElement(attributes: MarkerAttributes | PathAttributes, element: SVGElement): void;
    static isDocument(): void;
}
