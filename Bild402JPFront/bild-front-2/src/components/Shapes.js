import React from 'react';
import { Circle, Rect, RegularPolygon } from 'react-konva';

const Shapes = ({ shapes, setShapes }) => {
    
    const handleDragEnd = (shape) => {
        const attrs = shape.attrs;

        if (setShapes) {
            setShapes(attrs);
        }
    }

        
    const getShapeComponent = (shapeData, index) => {
        switch (shapeData.type) {

            case Shapes.types.CIRCLE:
        
                return <Circle key={index} {...shapeData} draggable onDragEnd={(e) => handleDragEnd(e.target)} />;
            
            case Shapes.types.RECTANGLE:
        
                return <Rect key={index} {...shapeData} draggable onDragEnd={(e) => handleDragEnd(e.target)} />;
            
            case Shapes.types.TRIANGLE:
        
                return <RegularPolygon key={index} {...shapeData} draggable onDragEnd={(e) => handleDragEnd(e.target)} />;

                default: return null;
        }
    }

    return <>{shapes.map((shapeData, index) => getShapeComponent(shapeData, index))}</>;
};

Shapes.types = {
    CIRCLE: 'circle',
    RECTANGLE: 'rectangle',
    TRIANGLE: 'triangle',
};

export default Shapes;
