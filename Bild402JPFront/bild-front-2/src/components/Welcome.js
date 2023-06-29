// import * as React from 'react';
// import { Link } from 'react-router-dom';

// export default function Welcome() {
//   return (
//     <>
//       <h1>Welcome page</h1>
//       <Link to="/seeimages">See Images</Link>
//     </>
//   );
// }


// // import React, { Component, useState, useEffect, useRef } from 'react';
// // import { createRoot } from 'react-dom/client';
// // import { Stage, Layer, Rect, Text, Circle, RegularPolygon } from 'react-konva';

// // import axios from 'axios';

// // import { Link } from "react-router-dom";
  
// // const Welcome = () => {
// //     const [isDragging, setDragging] = useState(false);
// //   const [shapes, setShapes] = useState([]);

// //   // useEffect(() => {
// //   //   const fetchShapes = async () => {
// //   //     try {
// //   //       const response = await axios.get('http://localhost:8080/images');
// //   //       setShapes(response.data);

// //   //       console.log('Got the shapes!:', response.data);
// //   //     } catch (error) {
// //   //       console.error('Error happened getting the shapes', error);
// //   //     }
// //   //   };
// //   //   fetchShapes();
// //   // }, []);

// //   function generateShapes() {
// //     return [...Array(5)].map((_, i) => ({
// //       id: i.toString(),
// //       isDragging: false,
// //     }))
// //   }

// //   const INITIAL_STATE = generateShapes();

// //   const [circles, setCircles] = React.useState(INITIAL_STATE);
// //   const [rectangles, setRectangles] = React.useState(INITIAL_STATE);
// //   const [triangles, setTriangles] = React.useState(INITIAL_STATE);
// //   const stageRef = useRef(null);

// //   const handleDragStart = (e) => {
// //     const id = e.target.id();
// //     setCircles(
// //       circles.map((circle) => {
// //         return {
// //           ...circle,
// //           isDragging: circle.id === id,
// //         };
// //       })
// //     );
// //     setRectangles(
// //       rectangles.map((rectangle) => {
// //         return {
// //           ...rectangle,
// //           isDragging: rectangle.id === id,
// //         };
// //       })
// //     );
// //     setTriangles(
// //       triangles.map((triangle) => {
// //         return {
// //           ...triangle,
// //           isDragging: triangle.id === id,
// //         };
// //       })
// //     );
// //   };
// //   const handleDragEnd = (e) => {
// //     setCircles(
// //       circles.map((circle) => {
// //         return {
// //           ...circle,
// //           isDragging: false,
// //         };
// //       })
// //     );
// //     setRectangles(
// //       rectangles.map((rectangle) => {
// //         return {
// //           ...rectangle,
// //           isDragging: false,
// //         };
// //       })
// //     );
// //     setTriangles(
// //       triangles.map((triangle) => {
// //         return {
// //           ...triangle,
// //           isDragging: false,
// //         };
// //       })
// //     );
// //   };

// //   const addImage = () => {
// //     console.log("POST request");
// //   }
// //   const updateImage = () => {
// //     console.log("PUT request");
// //   }
// //   const removeImage = () => {
// //     console.log("DELETE request");
// //   }


// //   return (
// // <React.Fragment>
// //       <Stage width={900} height={600} ref={stageRef}>
// //         <Layer>
          
// //           <Rect
// //             x={10}
// //             y={60}
// //             width={125}
// //             height={380}
// //             fill="white"
// //             shadowBlur={5}
// //             shadowColor="black"
// //           />
          
// //           <Circle
// //             x={70}
// //             y={125}
// //             radius={40}
// //             fill='#E77EE7'
// //           />
// //           {circles.map((circle) => (
// //           <Circle
// //           key={circle.id}
// //           id={circle.id}
// //           x={70}
// //           y={125}
// //           radius={40}
// //           fill="#E77EE7"
// //           draggable
// //             onDragStart={handleDragStart}
// //             onDragEnd={handleDragEnd}
// //             />
// //         ))}
// //           <Rect
// //           width={60}
// //           height={120}
// //           x={40}
// //           y={180}
// //           fill="#7E7EE7"
// //           />
// //           {rectangles.map((rectangle) => (
// //             <Rect
// //             key={rectangle.id}
// //             id={rectangle.id}
// //           x={40}
// //           y={180}
// //           width = {60}
// //           height={120}
// //           draggable
// //           fill="#7E7EE7"
// //           onDragStart={handleDragStart}
// //           onDragEnd={handleDragEnd}
// //           />
// //         ))}
       
// //           {/* <Rect
// //           width={60}
// //           height={120}
// //           // stroke="black"
// //           // strokeWidth={1.5}
// //           x={40}
// //           y={180}
// //           draggable
// //           fill="#7E7EE7"
// //           onDragStart={() => {
// //             setDragging(true);
// //           }}
// //           onDragEnd={() => {
// //             setDragging(false);
// //           }}
// //           /> */}
// //           <RegularPolygon
// //            sides={3}
// //            radius={50}
// //            closed
// //            // stroke="black"
// //            // strokeWidth={1.5}
// //            x={65}
// //            y={370}
// //            fill="#B6E77C"
// //           />
// //           {triangles.map((triangle) => (
// //           <RegularPolygon
// //           x={65}
// //           y={370}
// //           sides={3}
// //           radius={50}
// //           fill="#B6E77C"
// //           draggable
// //           onDragStart={handleDragStart}
// //           onDragEnd={handleDragEnd}
// //           />
// //         ))}
// //         </Layer>
// //         <Layer>
// //           {/* {shapes.map((shape, index) => {
// //             switch (shape.type) {
// //               case 'circle':
// //                 return (
// //                   <Circle
// //                     key={index}
// //                     x={shape.x}
// //                     y={shape.y}
// //                     radius={shape.radius}
// //                     //stroke="black"
// //                     fill="blue"
// //                     draggable={true}
// //                     onDragStart={() => {
// //                       setDragging(true);
// //                     }}
// //                     onDragEnd={() => {
// //                       setDragging(false);
// //                     }}
// //                   />
// //                 );
// //               case 'rectangle':
// //                 return (
// //                   <Rect
// //                     key={index}
// //                     x={shape.x}
// //                     y={shape.y}
// //                     width={shape.width}
// //                     height={shape.length}
// //                     stroke="black"
// //                     fill="red"
// //                     draggable={true}
// //                     onDragStart={() => {
// //                       setDragging(true);
// //                     }}
// //                     onDragEnd={() => {
// //                       setDragging(false);
// //                     }}
// //                   />
// //                 );
// //               case 'triangle':
// //                 return (
// //                   <RegularPolygon
// //                     key={index}
// //                     x={shape.x}
// //                     y={shape.y}
// //                     sides={3}
// //                     radius={40}
// //                     closed
// //                     stroke="black"
// //                     fill="yellow"
// //                     draggable={true}
// //                     onDragStart={() => {
// //                       setDragging(true);
// //                     }}
// //                     onDragEnd={() => {
// //                       setDragging(false);
// //                     }}
// //                   />
// //                 );

// //               default:
// //                 return null;
// //             }
// //           })} */}
// //         </Layer>
// //       </Stage>
// //       <div>
// //         <button type="button" id="POST" onClick={addImage}>Save image (post)</button>
// //         <button type="button" id="PUT" onClick={updateImage}>Modify Image (put)</button>
// //         <button type="button" id="DELETE" onClick={removeImage}>Delete Image (delete)</button>
// //       </div>

// //     <div>
// //       <h1>Welcome Page</h1>
// //       <br />
// //       <ul>
// //         <li>
// //           {/* Endpoint to route to Home component */}
// //           <Link to="/">Welcome</Link>
// //         </li>
// //         <li>
// //           {/* Endpoint to route to About component */}
// //           <Link to="/seeimages">See Images</Link>
// //         </li>
// //         <li>
// //           {/* Endpoint to route to Contact Us component */}
// //           <Link to="/image">Image</Link>
// //         </li>
// //       </ul>
// //     </div>
// //     </React.Fragment>
// //   );
// // };

// // export default Welcome;