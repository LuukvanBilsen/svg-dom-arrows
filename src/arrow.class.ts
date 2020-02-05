import { DomUtils } from "./utils/dom-utils.class";
import { ends } from './arrow/ends';
import { path } from './arrow/path';
import { ArrowPath } from "./models/arrow-path.model";
import { ArrowParams } from "./models/arrow-params.model";
import { DEFAULT_MARKER, DEFAULT_MARKER_PATH } from "./consts/default-marker.const";
import { SVG_NS } from "./consts/consts";

export class Arrow {

    private arrowPath: ArrowPath;
    private node: ChildNode;

    constructor(params: ArrowParams) {
        if (params.className === undefined) {
            throw new Error('You must define a className for the arrow.');
        }
        this.arrowPath = path(ends(params.from), ends(params.to), params.shapeApparence);
        this.node = this.drawSvgContent(params, this.arrowPath, params.className);
    }

    private drawSvgContent(params: ArrowParams, arrow, className: string): ChildNode {
        const node = this.createSvg(arrow, className);

        const pathArrow = DomUtils.createPathElement({
            d: arrow.points,
            id: `${className}__${Math.floor(Math.random() * 100)}`,
            class: `${className}__path`,
        });
        node.svgItem.appendChild(pathArrow);

        this.addMarkers(params, pathArrow, node.defsRef)

        return node.svgItem;
    }

    private createSvg(arrow, className: string): {
        svgItem: SVGSVGElement,
        defsRef: SVGDefsElement,
     } {
        const svg = document.createElementNS(SVG_NS, 'svg');
        const defs = document.createElementNS(SVG_NS, 'defs');
        
        svg.setAttribute('xmlns', SVG_NS);
        svg.setAttribute('class', className);
        svg.style.left = `${arrow.offset.x}px`;
        svg.style.top = `${arrow.offset.y}px`;
        svg.style.position = 'absolute';
        svg.setAttribute('width', arrow.size.width);
        svg.setAttribute('height', arrow.size.height);

        defs.setAttribute('id', `defs__${className}`);

        svg.appendChild(defs);

        return {
            svgItem: svg,
            defsRef: defs,
        };
    }

    public getNode(): ChildNode {
        return this.node;
    }

    private addMarkers(params: ArrowParams, arrowPath: SVGPathElement, defsRef: SVGDefsElement) {
        if (params.arrowSettings === undefined) {
            const defaultMarker = DomUtils.createMarkerElement(DEFAULT_MARKER);
            defaultMarker.appendChild(DomUtils.createPathElement(DEFAULT_MARKER_PATH));
            defsRef.appendChild(defaultMarker);
            arrowPath.setAttribute('marker-end', `url(#${DEFAULT_MARKER.id})`);
            arrowPath.setAttribute('marker-start', `url(#${DEFAULT_MARKER.id})`);
        } else {
            if (params.arrowSettings.markerStart) {
                const markerStart = params.arrowSettings.markerStart;
                defsRef.appendChild(markerStart);
                arrowPath.setAttribute('marker-start', `url(#${markerStart.id})`);
            }
            if (params.arrowSettings.markerEnd) {
                const markerEnd = params.arrowSettings.markerEnd;
                defsRef.appendChild(markerEnd);
                arrowPath.setAttribute('marker-end', `url(#${markerEnd.id})`);
            }
        }
    }
}