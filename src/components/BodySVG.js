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

    // number of shapes related to height of document
    const randShapes = height / 80;
    // create shapes! 🚀
    for (let i = 0; i < randShapes; i++) {
      const currentShape = [];
      // 3 corners to always create triangles
      // const randCorners = randomNumber(3, 4);
      const randCorners = 3;
      const maxSize = 220;
      for (let j = 0; j < randCorners * 2; j++) {
        currentShape.push(randomNumber(0, maxSize));
      }

      // place them randomly in the whole available space:
      // adding random numbers (relative to page size) to the coordinates
      const randX = randomNumber(0, maxX);
      const randY = randomNumber(0, maxY);
      // if coord X (even index) add randX, if coord Y (odd index) add randY => maintain proportion
      const points = currentShape.map((n, ind) =>
        ind % 2 ? n + randY : n + randX
      );

      // fill with random color
      const randHue = randomNumber(-30, 30);
      // const randHue = randomNumber(175, 215);
      const alpha = 0.2;

      g.append('polygon')
        .attr('class', 'shape')
        .attr('points', points)
        .attr('stroke', `hsla(${randHue}, 55%, 35%, ${alpha})`)
        .attr('fill', 'transparent');
      // not much point on rotating them if they are completelly random shapes...
      // rotate random number of degs, use first point as center for rotating
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
