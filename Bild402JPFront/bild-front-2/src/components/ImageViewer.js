import Nav from './Navbar';
 import { Stage, Layer, Rect, Circle, RegularPolygon } from 'react-konva';
 import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
  

  const ImageViewer = () => {
    const params = useParams();
    const [shapes, setShapes] = useState(null);
    const [name, setName] = useState(null);    

  useEffect(() => {

    if(!params.id) return;
    const fetchImages = async () => {
      try {
      
        const response = await fetch(`http://localhost:8080/images/${params.id}`);
        if (!response.ok){
          throw new Error('nope');
        }
        const data = await response.json();
        setShapes(data.shapesList);
        setName(data.name);
        console.log(data.shapesList);
        
      } catch (error) {
        console.error(error.message);
      }
    };

     fetchImages();
  }, []);

  
const updateImage = async () => {
  try {
    const requestBody = {
      // update the image properties here
    };
    const response = await fetch(`http://localhost:8080/images/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      throw new Error('Failed to update image');
    }
    console.log('Image updated successfully');
  } catch (error) {
    console.error(error.message);
  }
}



const removeImage = async () => {
  try {
    const response = await fetch(`http://localhost:8080/images/${params.id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete image');
    }
    // redirect to page 1 after successful deletion
    window.location.replace('/seeimages');
  } catch (error) {
    console.error(error.message);
  }
}


  return (
    <div>
      <h1>Image: name </h1>
      <Nav />
      <Stage width={900} height={600}>
        <Layer>
        {shapes &&
          shapes.map((shape, index) => {

      switch(shape.type) {

              case 'circle':
                return (
                  <Circle
                  key={index}
                  x={shape.x}
                  y={shape.y}
                  radius={shape.radius}
                  fill={shape.fill}
                    draggable={true}
                    
                  />
                );
               case 'rectangle':
                 return (
                   <Rect
                   key={index}
                   x={shape.x}
                   y={shape.y}
                   width={shape.width}
                   height={shape.height}
                   fill={shape.fill}
                    draggable={true}
                   
                  />
                );
              case 'triangle':
                const sides = shape.sides || 3;
                const radius = shape.radius || 50;
                return (
                  <RegularPolygon
                  key={index}
                  x={shape.x}
                  y={shape.y}
                  sides={sides}
                  radius={radius}
                  fill={shape.fill}
                    draggable={true}
                   
                  />
                );

              default:
                return null;
            }
          })} 
          
         </Layer>
      </Stage>

      <div>
       
                    <button type="button" id="PATCH" onClick={updateImage}>Modify Image (patch)</button>
                    <button type="button" id="DELETE" onClick={removeImage}>Delete Image (delete)</button>
                
      </div>
      </div>

  )
}
export default ImageViewer
