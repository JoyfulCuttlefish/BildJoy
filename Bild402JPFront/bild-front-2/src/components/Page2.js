import Nav from './Navbar';
 import { Stage, Layer, Rect, Circle, RegularPolygon } from 'react-konva';
 import React, { useState, useEffect } from 'react';
  

  const Page2 = ({ imageId }) => {
    
  const [isDragging, setDragging] = useState(false);
   //const [images, setImages] = useState([]);

  const[shapes, setShapes] = useState([]);
  useEffect(() => {
     //const fetchImages = async () => {
    const fetchShapes = async () => {
      try {
        
        const response = await fetch(`http://localhost:8080/images/${imageId}/shapes`);
        if (!response.ok){
          throw new Error('nope');
        }
        const data = await response.json();
        // setImages(data);
        setShapes(data);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    };

     //fetchImages();
    fetchShapes();
  }, []);

  
const updateImage = async () => {
  try {
    const requestBody = {
      // update the image properties here
    };
    const response = await fetch(`http://localhost:8080/images/${imageId}`, {
      method: 'PATCH',
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
    const response = await fetch(`http://localhost:8080/images/${imageId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete image');
    }
    // redirect to page 1 after successful deletion
    window.location.replace('/');
  } catch (error) {
    console.error(error.message);
  }
}


  return (
    <div>
      <h1>Image: </h1>
      <Nav />
      <Stage width={900} height={600}>
        <Layer>
        {/* {images && images.map((image, index) => { */}
          {shapes.map((shape, index) => {
      // switch (image.type) { 
      switch(shape.type) {

              case 'circle':
                return (
                  <Circle
                    key={index}
                    //  x={image.x}
                    //  y={image.y}
                    //  radius={image.radius}
                    x= {shape.x}
                    y={shape.y}
                    radius={shape.radius}

                    fill="#E77EE7"
                    draggable={true}
                    onDragStart={() => {
                      setDragging(true);
                    }}
                    onDragEnd={() => {
                      setDragging(false);
                    }}
                  />
                );
               case 'rectangle':
                 return (
                   <Rect
                     key={index}
                    //  x={image.x}
                    //  y={image.y}
                    //  width={image.width}
                    //  height={image.length}
                     x={shape.x}
                     y={shape.y}
                     width={shape.width}
                     height={shape.length}
                    fill="#7E7EE7"
                    draggable={true}
                    onDragStart={() => {
                      setDragging(true);
                    }}
                    onDragEnd={() => {
                      setDragging(false);
                    }}
                  />
                );
              case 'triangle':
                return (
                  <RegularPolygon
                    key={index}
                    //  x={image.x}
                    //  y={image.y}
                     x={shape.x}
                     y={shape.y}
                    sides={3}
                    radius={40}
                    closed
                    fill="#B6E77C"
                    draggable={true}
                    onDragStart={() => {
                      setDragging(true);
                    }}
                    onDragEnd={() => {
                      setDragging(false);
                    }}
                  />
                );

              default:
                return null;
            }
          })} 
          
         </Layer>
         <Layer name="top-layer" />

      </Stage>

      <div>
       
                    <button type="button" id="PATCH" onClick={updateImage}>Modify Image (patch)</button>
                    <button type="button" id="DELETE" onClick={removeImage}>Delete Image (delete)</button>
                
      </div>
      </div>

  )
}
export default Page2
