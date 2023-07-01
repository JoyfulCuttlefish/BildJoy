import React from 'react';
import { Circle, Rect, RegularPolygon } from 'react-konva';

const Shapes = ({ shapes, handleDragStart, handleDragEnd }) => {
  const types = {
    CIRCLE: 'circle',
    RECTANGLE: 'rectangle',
    TRIANGLE: 'triangle',
  };

  const getShapeComponent = (shapeData) => {
    if (shapeData.type === types.CIRCLE) {
      return (
        <Circle
          key={shapeData.id}
          {...shapeData}
          draggable
          onDragStart={() => handleDragStart(shapeData.id)}
          onDragEnd={() => handleDragEnd(shapeData.id)}
        />
      );
    } else if (shapeData.type === types.RECTANGLE) {
      return (
        <Rect
          key={shapeData.id}
          {...shapeData}
          draggable
          onDragStart={() => handleDragStart(shapeData.id)}
          onDragEnd={() => handleDragEnd(shapeData.id)}
        />
      );
    } else if (shapeData.type === types.TRIANGLE) {
      return (
        <RegularPolygon
          key={shapeData.id}
          {...shapeData}
          draggable
          onDragStart={() => handleDragStart(shapeData.id)}
          onDragEnd={() => handleDragEnd(shapeData.id)}
        />
      );
    }
    return null;
  };

  return <>{shapes.map((shapeData) => getShapeComponent(shapeData))}</>;
};

Shapes.types = {
  CIRCLE: 'circle',
  RECTANGLE: 'rectangle',
  TRIANGLE: 'triangle',
};

export default Shapes;
