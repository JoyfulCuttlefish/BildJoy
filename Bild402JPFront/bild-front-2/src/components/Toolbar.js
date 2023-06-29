// import React, { Component } from 'react'
// import * as ReactDOMClient from 'react-dom/client';
// import { Rect, Circle, RegularPolygon } from 'react-konva'


// //at start, two same rectangles at one place
// //at the end of drag, note the x and y of the dragged rectangle, append it to GraphicsMain
// //return the dragged rectangle to original

// const ToolBar = () => (
//     <Rect
//         x={10}
//         y={60}
//         width={125}
//         height={380}
//         fill="white"
//         shadowBlur={5}
//         shadowColor="black"
//     />
// )

// export default class Toolbar extends Component {
//     state = {
//         previousShape: undefined,
//         count: 0,
//         isDragging: false
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 {this.props.layer ? (
//                     <React.Fragment>
//                         <ToolBar />
//                         <Circle
//                             radius={40}
//                             stroke="black"
//                             strokeWidth={1.5}
//                             fill= 'blue'
//                             x={70}
//                             y={125}
//                         />
//                         <Circle
//                             radius={40}
//                             stroke="black"
//                             strokeWidth={1.5}
//                             fill='blue'
//                             x={70}
//                             y={125}
//                             draggable
//                             ref="draggableCircle"
//                             onDragEnd={e => {
//                                 //add the rectangle to parent
//                                 let name = 'circle' + this.props.circleName
//                                 let toSend = {
//                                     x: e.target.x(),
//                                     y: e.target.y(),
//                                     radius: 40,
                                    
//                                     stroke: 'black',
//                                     strokeWidth: 1.5,
//                                     name: name,
//                                     fill: 'blue',
//                                     ref: name,
//                                     rotation: 0
//                                 }
//                                 this.props.appendToCircles(toSend)

//                                 var circle = this.refs.draggableCircle

//                                 circle.position({
//                                     x: 70,
//                                     y: 125
//                                 })
//                             }}
//                         />
//                         <Rect
//                             width={60}
//                             height={120}
//                             stroke="black"
//                             strokeWidth={1.5}
//                             x={40}
//                             y={180}
//                             fill="red"
//                         />
//                         <Rect
//                             width={60}
//                             height={120}
//                             stroke="black"
//                             strokeWidth={1.5}
//                             x={40}
//                             y={180}
//                             draggable
//                             fill="red"
//                             ref="draggableRect"
//                             onDragEnd={e => {
//                                 //add the rectangle to parent
//                                 let name = 'rectangle' + this.props.rectName
//                                 let toSend = {
//                                     x: e.target.x(),
//                                     y: e.target.y(),
//                                     width: 60,
//                                     height: 120,
//                                     stroke: 'black',
//                                     strokeWidth: 1.5,
//                                     rotation: 0,
//                                     name: name,
//                                     ref: name,
//                                     fill: 'red',
//                                     useImage: false
//                                 }
//                                 this.props.appendToRectangles(toSend)

//                                 var rect = this.refs.draggableRect

//                                 rect.position({
//                                     x: 40,
//                                     y: 180
//                                 })
//                             }}
//                         />
//                         <RegularPolygon
//                             // points={[0, 0, 100, 0, 100, 100]}
//                             sides={3}
//                             radius={50}
//                             closed
//                             stroke="black"
//                             strokeWidth={1.5}
//                             x={65}
//                             y={370}
//                             fill="yellow"
//                         />
//                         <RegularPolygon
//                             // points={[0, 0, 100, 0, 100, 100]}
//                             sides={3}
//                             radius={50}
//                             stroke="black"
//                             strokeWidth={1.5}
//                             fill="yellow"
//                             x={65}
//                             y={370}
//                             draggable
//                             ref="draggableTriangle"
//                             onDragEnd={e => {
//                                 //add the rectangle to parent
//                                 let name = 'triangle' + this.props.triangleName
//                                 let toSend = {
//                                     x: e.target.x(),
//                                     y: e.target.y(),
//                                     // points:[0, 0, 100, 0, 100, 100],
//                                     sides:3,
//                                     radius:50,
//                                     stroke: 'black',
//                                     strokeWidth: 1.5,
//                                     name: name,
//                                     fill: 'yellow',
//                                     ref: name,
//                                     rotation: 0
//                                 }
//                                 this.props.appendToTriangles(toSend)

//                                 var triangle = this.refs.draggableTriangle

//                                 triangle.position({
//                                     x: 65,
//                                     y: 370
//                                 })
//                             }}
//                         />

//                     </React.Fragment>
//                 ) : null}
//             </React.Fragment>
//         )
//     }
// }