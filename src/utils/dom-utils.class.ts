import { SVG_NS } from './../consts/consts';
import { MarkerAttributes } from '../models/marker-attributes.model';
import { PathAttributes } from '../models/path-attributes.model';

/**
 * This class is composed of static utility functions that lets the library make DOM manipulations without
 * adding a layer of complexity.
 */
export class DomUtils {
    /**
     * Converts a html string to HTML elements
     * @param {String} HTML representing any number of sibling elements
     * @return {NodeList} Generated array of ChildNodes from the inputted string
    */
    public static htmlToElements(html: string): NodeListOf<ChildNode> {
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    }

    /**
     * Creates an SVG Marker
     * @param {string} innerXml the inner XML of the marker
     */
    public static createMarkerElement(attributes: MarkerAttributes): SVGMarkerElement {
        DomUtils.isDocument();
        const marker = document.createElementNS(SVG_NS, 'marker');
        DomUtils.applyAttributesToElement(attributes, marker);
        return marker;
    }

    /**
     * 
     * @param {PathParams} attributes the usual attributes of an SVG path
     */
    public static createPathElement(attributes: PathAttributes): SVGPathElement {
        DomUtils.isDocument();
        const path = document.createElementNS(SVG_NS, 'path');
        DomUtils.applyAttributesToElement(attributes, path);
        console.log(path.nodeType)
        return path;
    }

    public static applyAttributesToElement(attributes: MarkerAttributes|PathAttributes, element: SVGElement) {
        if (attributes) {
            Object.keys(attributes).map(key => element.setAttribute(key, attributes[key]));
        }
    }

    public static isDocument(): void {
        if (!document) {
            throw Error('Document is not defined, this library works only on browser environnements.');
        }
    }
}
