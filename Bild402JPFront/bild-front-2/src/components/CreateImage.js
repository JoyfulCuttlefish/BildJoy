import React, { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Rect, Circle, RegularPolygon } from 'react-konva';
import Nav from './Navbar';
import Shapes from './Shapes';

const CreateImage = () => {

    const stageRef = useRef(null);
    const [shapes, setShapes] = useState([]);
    const [imageName, setImageName] = useState('');

    useEffect(() => {
        console.log(shapes);
    }, [shapes]);
    
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
    
        setShapes((oldShapes) => [...oldShapes, shapeData]);
    };

    //     console.log('Generated shape:', shapeData); // Log shapeData
    //     setShapes((oldShapes) => {
    //         return [...oldShapes, shapeData];
    //     });
    // };


    const handleShapeUpdate = (newData) => {

        let currentShapeIndex = shapes.findIndex((s) => s.id === newData.id);

        if (currentShapeIndex !== -1) {
            const currentShape = { ...shapes[currentShapeIndex], ...newData };

            setShapes((oldShapes) => {
                oldShapes[currentShapeIndex] = currentShape;
                return [...oldShapes];
            })
        }

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
            name: imageName,
            shapesList: shapes.map((shape) => {
                const { id, type, ...rest } = shape;

              switch (type) {
                case Shapes.types.CIRCLE:
                  return { type, ...rest, radius: shape.radius };
                case Shapes.types.RECTANGLE:
                  return { type, ...rest, width: shape.width, height: shape.height };
                case Shapes.types.TRIANGLE:
                  return { type, ...rest, radius: shape.radius, sides: shape.sides };
                default:
                  return null;
              }
            })
        };
          
        console.log('Shapes array:', shapes); // Log shapes array
        console.log('ImageName:', imageName);

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
                setImageName(imageName);
                setShapes([...shapes, data]);
                console.log('Updated shapes array:', shapes); // Log updated shapes array
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
                <div>

                <input
                        type="text"
                        value={imageName}
                        onChange={(e) => setImageName(e.target.value)}
                        placeholder="Image Name"
                    />
                    <button type="button" id="POST" onClick={addImage}>
                        Save Image
                    </button>
                </div>

            </>
            <div>

                <button onClick={() => generateShape('circle')}>Circle</button >
                <button onClick={() => generateShape('rectangle')}>Rectangle</button>
                <button onClick={() => generateShape('triangle')}>Triangle</button>
            <div className='stage-container'>
                <Stage width={900} height={600} ref={stageRef} className='stage'>
                    <Layer>
                    {shapes.map((shapeData, index) => getShapeComponent(shapeData, index))}
        
                    <Shapes shapes={shapes} setShapes={handleShapeUpdate}></Shapes>
                    </Layer>
                </Stage>
                </div>
            </div >
            
        </React.Fragment>

    )
}

export default CreateImage