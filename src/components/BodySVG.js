import React, { useRef, useEffect } from 'react';
import { select } from 'd3';

import useDocumentSize from '../utils/useDocumentSize';

// https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/
// https://medium.com/trabe/react-useref-hook-b6c9d39e2022
const BodySVGs = () => {
  // create ref to div that will contain SVGs
  const SVGDiv = useRef();
  // get current page size
  const { width, height } = useDocumentSize();
  // limit space
  const maxX = width - 100;
  const maxY = height - 100;
  // keep code DRY
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // start the thing
  const addSVGs = () => {
    // clear previous svg
    // important to add .current to the ref here
    select(SVGDiv.current)
      .select('svg')
      .remove('svg');
    const svg = select(SVGDiv.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height - 30);
    const g = svg.append('g');

    // number of shapes
    const randShapes = randomNumber(26, 41);
    // create shapes!
    for (let i = 0; i < randShapes; i++) {
      const currentShape = [];
      // random choice between 6, 8 or 10 for corners of shape
      const randCorners = randomNumber(3, 6);
      // // random choice between 3 and 5 for corners of shape
      // const randCorners = randomNumber(3, 5);
      // random numbers (below 120) to create points -> create a random polygon with 3 - 6 corners
      for (let j = 0; j < randCorners * 2; j++) {
        currentShape.push(randomNumber(0, 120));
      }
      // // for test, try to create more 'regular' polygons...
      // for (let j = 0; j < randCorners * 2; j++) {
      //   if (j === 2) {
      //     currentShape.push(randomNumber(currentShape[0], 120));
      //   } else if (j === 5) {
      //     currentShape.push(randomNumber(0, currentShape[3]));
      //   } else if (j === 6) {
      //     currentShape.push(randomNumber(0, currentShape[4]));
      //   } else if (j === 7) {
      //     currentShape.push(randomNumber(0, currentShape[1]));
      //   } else {
      //     currentShape.push(randomNumber(0, 120));
      //   }
      // }

      // place them randomly in the whole available space:
      // adding random numbers (relative to page size) to the coordinates
      const randX = randomNumber(0, maxX);
      const randY = randomNumber(0, maxY);
      // if coord X (even index) add randX, if coord Y (odd index) add randY => maintain proportion
      const points = currentShape.map((n, ind) =>
        ind % 2 ? n + randY : n + randX
      );

      // fill with random color
      // rotate random number of degs, use first point as center for rotating
      const randHue = randomNumber(-60, 60);
      const alpha = 0.55;

      g.append('polygon')
        .attr('class', 'shape')
        .attr('points', points)
        .attr('stroke', `hsla(${randHue}, 55%, 36%, ${alpha})`)
        .attr('fill', 'transparent');
      // not much point on rotating them if they are completelly random shapes...
      // .attr(
      //   'transform',
      //   `rotate(${randHue}, ${currentShape[0] + randX}, ${currentShape[1] +
      //     randY})`
      // );
    }
  };

  useEffect(() => {
    if (height !== 0) return addSVGs();
  });

  return <div ref={SVGDiv} style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default BodySVGs;
