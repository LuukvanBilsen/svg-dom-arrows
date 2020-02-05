window.addEventListener('load', function () {
  const arrowProps = JSON.parse(`{
    "className": "arrow",
    "shapeApparence": "normal",
    "from": {
      "point": {
        "x": 500,
        "y": 100
      },
      "direction": "left",
      "translation": [
        0.1,
        -1
      ]
    },
    "to": {
      "point": {
        "x": 450,
        "y": 50
      },
      "direction": "right",
      "translation": [
        0.9,
        1
      ]
    }
  }`);

  const nodes = {
    from: document.getElementById('from'),
    to: document.getElementById('to')
  }

  const textarea = document.querySelector('textarea')
  const button = document.querySelector('button')

  const TEST_MARKER = {
    id: 'input-marker',
    refX: '0.0',
    refY: '0.0',
    style: 'overflow:visible',
    orient: 'auto',
};

const TEST_MARKER_PATH = {
  d: 'M -2.5,-1.0 C -2.5,1.7600000 -4.7400000,4.0 -7.5,4.0 C -10.260000,4.0 -12.5,1.7600000 -12.5,-1.0 C -12.5,-3.7600000 -10.260000,-6.0 -7.5,-6.0 C -4.7400000,-6.0 -2.5,-3.7600000 -2.5,-1.0 z ',
  style: 'fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1;fill:#000000;fill-opacity:1'
}

const marker = SvgDomArrows.DomUtils.createMarkerElement(TEST_MARKER);
const path = SvgDomArrows.DomUtils.createPathElement(TEST_MARKER_PATH);
marker.appendChild(path);

  let arrow = null

  function update() {
    const arrowProps = JSON.parse(textarea.value)
    arrowProps.from.node = nodes.from
    arrowProps.to.node = nodes.to

    nodes.from.style.left = arrowProps.from.point.x + 'px'
    nodes.from.style.top = arrowProps.from.point.y + 'px'
    nodes.to.style.left = arrowProps.to.point.x + 'px'
    nodes.to.style.top = arrowProps.to.point.y + 'px'
    arrowProps.arrowSettings = {
      markerStart: marker,
      markerEnd: marker,
    };
    console.log(arrow)

    if (arrow) document.body.removeChild(arrow.node)
    arrow = new SvgDomArrows.Arrow(arrowProps)
    console.log(arrow)
    document.body.appendChild(arrow.getNode())
  }

  document.querySelector('textarea').value = JSON.stringify(arrowProps, null, 2)
  button.addEventListener('click', update)

  update()
})