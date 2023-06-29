import React, { useRef, useState } from 'react';
import { Stage, Layer, Rect, Circle, RegularPolygon } from 'react-konva';
import Nav from './Navbar';

const Page1 = () => {

    function generateShapes() {
        console.log('generateShapes called');
        return [...Array(10)].map((_, i) => ({
            id: i.toString(),
            isDragging: false,
        }))
    }

    const stageRef = useRef(null);
    const INITIAL_STATE = generateShapes();

    const [circles, setCircles] = useState(INITIAL_STATE);
    const [rectangles, setRectangles] = useState(INITIAL_STATE);
    const [triangles, setTriangles] = useState(INITIAL_STATE);
    const [shapesList, setShapesList] = useState([]);


    const handleDragStart = (e) => {
        const id = e.target.id();
        setCircles(
            circles.map((circle) => {
                return {
                    ...circle,
                    isDragging: circle.id === id,
                };
            })
        );
        setRectangles(
            rectangles.map((rectangle) => {
                return {
                    ...rectangle,
                    isDragging: rectangle.id === id,
                };
            })
        );
        setTriangles(
            triangles.map((triangle) => {
                return {
                    ...triangle,
                    isDragging: triangle.id === id,
                };
            })
        );
    };

    const handleDragEnd = (e) => {
        console.log('Dragging ended');
        const id = e.target.id();
        console.log('Selected shape id:', id);
  console.log('Current shapesList:', shapesList);
        const newShapesList = shapesList.map((shape) => {
            if (shape.id === id) {
                const newPosition = {
                    x: e.target.x(),
                    y: e.target.y(),
                };
                return {
                    ...shape,
                    position: newPosition,
                };
            } else {
                return shape;
            }
        });
        console.log('Updated shapesList:', newShapesList);
        setShapesList(newShapesList);
        console.log(newShapesList);
        console.log('shapes:', newShapesList);
        console.log('INITIAL_STATE:', newShapesList);
      
        setCircles(
            circles.map((circle) => {
                return {
                    ...circle,
                    isDragging: false,
                };
            })
        );
        setRectangles(
            rectangles.map((rectangle) => {
                return {
                    ...rectangle,
                    isDragging: false,
                };
            })
        );
        setTriangles(
            triangles.map((triangle) => {
                return {
                    ...triangle,
                    isDragging: false,
                };
            })
        );
    };


    const addImage = () => {
     
        const dataURL = stageRef.current.toDataURL();
        
        const requestBody = {
            name: "My Image",
            image: dataURL,
            shapes: shapesList,
        };

        fetch('http://localhost:8080/images/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
           
            setShapesList([...shapesList, data]);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

    return (


    <React.Fragment>
        <>
            <Nav />
            <h1>Welcome * Bienvenue * Wilkommen : Bild 402</h1>
            <h3>You can drag and drop the shapes to create a picture. Have fun!</h3>
            <p>There are 5 of each shape.</p>
            <div>
                <button type="button" id="POST" onClick={addImage}>Save image (post)</button>
            </div>

        </>
        <Stage width={900} height={600} ref={stageRef}>
            <Layer>

                <Rect
                    x={10}
                    y={60}
                    width={125}
                    height={380}
                    fill="white"
                    shadowBlur={5}
                    shadowColor="black"
                />

                <Circle
                    x={70}
                    y={125}
                    radius={40}
                    fill='#E77EE7'
                />
                {circles.map((circle) => (
                    <Circle
                        key={circle.id}
                        id={circle.id}
                        x={70}
                        y={125}
                        radius={40}
                        fill="#E77EE7"
                        draggable
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    />
                ))}
                <Rect
                    width={60}
                    height={120}
                    x={40}
                    y={180}
                    fill="#7E7EE7"
                />
                {rectangles.map((rectangle) => (
                    <Rect
                        key={rectangle.id}
                        id={rectangle.id}
                        x={40}
                        y={180}
                        width={60}
                        height={120}
                        draggable
                        fill="#7E7EE7"
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    />
                ))}

                <RegularPolygon
                    sides={3}
                    radius={50}
                    closed
                    // stroke="black"
                    // strokeWidth={1.5}
                    x={65}
                    y={370}
                    fill="#B6E77C"
                />
                {triangles.map((triangle) => (
                    <RegularPolygon
                        x={65}
                        y={370}
                        sides={3}
                        radius={50}
                        fill="#B6E77C"
                        draggable
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    />
                ))}
            </Layer>

        </Stage>

    </React.Fragment>

)}

export default Page1