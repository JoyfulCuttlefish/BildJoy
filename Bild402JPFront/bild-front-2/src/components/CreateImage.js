import React, { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Rect, Circle, RegularPolygon } from 'react-konva';
import Nav from './Navbar';
import Shapes from './Shapes';

const CreateImage = () => {

    const stageRef = useRef(null);
    const [shapes, setShapes] = useState([]);
    
    const generateShape = (type) => {

        let shapeData = null;

        switch (type) {

            case 'circle':
                shapeData = {
                    id: Math.random() + '',
                    x: 70,
                    y: 125,
                    radius: 40,
                    fill: '#E77EE7',
                    type: Shapes.types.CIRCLE
                }

                break;

            case 'rectangle':
                shapeData = {
                    id: Math.random() + '',
                    x: 40,
                    y: 180,
                    width: 60,
                    height: 120,
                    fill: '#7E7EE7',
                    type: Shapes.types.RECTANGLE
                }

                break;

            case 'triangle':
                shapeData = {
                    id: Math.random() + '',
                    x: 65,
                    y: 370,
                    sides: 3,
                    radius: 50,
                    fill: '#B6E77C',
                    type: Shapes.types.TRIANGLE
                }

                break;

            default:
                shapeData = null;

                break;

        }

        setShapes((oldShapes) => {
            return [...oldShapes, shapeData];
        });
    };

    const getShapeComponent = (shapeData, index) => {
        switch (shapeData.type) {

            case Shapes.types.CIRCLE:
                return <Circle key={index} {...shapeData} draggable />;

            case Shapes.types.RECTANGLE:
                return <Rect key={index} {...shapeData} draggable />
            case Shapes.types.TRIANGLE:
                return <RegularPolygon key={index} {...shapeData} draggable />

            default: return null;
        }
    };

    const addImage = () => {

        const dataURL = stageRef.current.toDataURL();

        const requestBody = {
            name: "My Image",
            image: dataURL,
            shapes: shapes,
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

                setShapes([...shapes, data]);
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
            <div>

                <button onClick={() => generateShape('circle')}>Circle</button >
                <button onClick={() => generateShape('rectangle')}>Rectangle</button>
                <button onClick={() => generateShape('triangle')}>Triangle</button>

                <Stage width={900} height={600} ref={stageRef} className='stage'>
                    <Layer>
                    {shapes.map((shapeData, index) => getShapeComponent(shapeData, index))}
                    </Layer>
                </Stage>

            </div >
            
        </React.Fragment>

    )
}

export default CreateImage