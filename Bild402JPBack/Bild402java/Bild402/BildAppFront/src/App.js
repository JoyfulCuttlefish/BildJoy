import React, { Component } from "react";

import {
  Stage,
  Layer,
  Rect,
  Circle,
  RegularPolygon
} from "react-konva";

import Toolbar from "./components/Toolbar";
import Header from "./components/Header";

class Graphics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layerX: 0,
      layerY: 0,
      layerScale: 1,
      selectedShapeName: "",
      errMsg: "",
      rectangles: [],
      circles: [],
      triangles: [],
      count: 0,
      lastFill: null,
      saving: null,
      saved: [],
      roadmapId: null,
      alreadyCreated: false,
      publishing: false,
      title: "",
      category: "",
      description: "",
      isPasteDisabled: false,
      circleDeleteCount: 0,
      trianglesDeleteCount: 0,
      rectDeleteCount: 0
    };

    this.handleWheel = this.handleWheel.bind(this);

  }

  handleSave = () => {
    const rects = this.state.rectangles,
      circles = this.state.circles,
      triangles = this.state.triangles
    if (
      JSON.stringify(this.state.saved) !==
      JSON.stringify([rects, circles, triangles])
    ) {
      this.setState({ saved: [rects, circles, triangles] });

      if (this.state.roadmapId) {
        //if draft already exists
        this.setState({ saving: true });
        // fetch("/api/roadmap/modifyDraftDB", {
        fetch("http://localhost:8080/images", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            roadmapId: this.state.roadmapId,

            data: {
              rects: rects,
              circles: circles,
              triangles: triangles
            }
          })
        }).then(res => {
          this.setState({ saving: false });
        });
      } else {
        //if first time pressing sav
        this.setState({ saving: true });
        fetch("/api/roadmap/saveRoadmapToDB", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: this.props.auth.user.id,
            roadmapType: "draft",
            data: {
              rects: rects,
              circles: circles,
              triangles: triangles
            }
          })
        }).then(res =>
          res.json().then(data => {
            this.setState({ saving: false });
            this.setState({ roadmapId: data.roadmapId });
          })
        );
      }
    }
  };
  
  handleWheel(event) {
    if (
      this.state.rectangles.length === 0 &&
      this.state.circles.length === 0 &&
      this.state.triangles.length === 0 
    ) {
    } else {
      event.evt.preventDefault();
      const scaleBy = 1.2;
      const stage = this.refs.graphicStage;
      const layer = this.refs.layer2;
      const oldScale = layer.scaleX();
      const mousePointTo = {
        x:
          stage.getPointerPosition().x / oldScale -
          this.state.layerX / oldScale,
        y:
          stage.getPointerPosition().y / oldScale - this.state.layerY / oldScale
      };

      const newScale =
        event.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

      layer.scale({ x: newScale, y: newScale });

      this.setState({
        layerScale: newScale,
        layerX:
          -(mousePointTo.x - stage.getPointerPosition().x / newScale) *
          newScale,
        layerY:
          -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
      });
    }
  }

  IsJsonString = str => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  async componentDidMount() {
    this.setState({ selectedShapeName: "" });
  }

  render() {

    const canvas = document.createElement("canvas");
    // const ctx = canvas.getContext("2d");
    
    const errMsg = this.state.errMsg;
    let errDisplay;
    if (errMsg !== "") {
      errDisplay = (
        <div className="errMessnger">
          <span style={{ color: "white" }}>
            {errMsg !== "" ? errMsg : null}
          </span>
        </div>
      );
    } else {
    }

    return (
      <React.Fragment>
        <div>
          <Header />
          <Stage
            onClick={this.handleStageClick}
            onMouseMove={this.handleMouseOver}
            onWheel={event => this.handleWheel(event)}
            height={600}
            width={900}
            ref="graphicStage"
          >
            <Layer
              scaleX={this.state.layerScale}
              scaleY={this.state.layerScale}
              x={this.state.layerX}
              y={this.state.layerY}
              height={600}
              width={900}
              draggable
              onDragEnd={() => {
                this.setState({
                  layerX: this.refs.layer2.x(),
                  layerY: this.refs.layer2.y()
                });
              }}
              ref="layer2"
            >
              <Rect
                x={-5 * window.innerWidth}
                y={-5 * window.innerHeight}
                height={window.innerHeight * 10}
                width={window.innerWidth * 10}
                name=""
                id="ContainerRect"
              />

              {this.state.rectangles.map(eachRect => {
                return (
                  <Rect
                    ref={eachRect.ref}
                    fill={eachRect.fill}
                    name={eachRect.name}
                    x={eachRect.x}
                    y={eachRect.y}
                    width={eachRect.width}
                    height={eachRect.height}
                    stroke={eachRect.stroke}
                    strokeWidth={eachRect.strokeWidth}
                    strokeScaleEnabled={false}
                    draggable
                    onDragStart={() => {
                     this.setState({
                       isDragging: true,
                     });
                   }}
                   
                    onDragEnd={event => {
                      //cannot compare by name because currentSelected might not be the same
                      //have to use ref, which appears to be overcomplicated
                      var shape = this.refs[eachRect.ref];
                      /*    this.state.rectangles.map(eachRect => {
                          if (eachRect.name === shape.attrs.name) {
                            shape.position({
                              x: event.target.x(),
                              y: event.target.y()
                            });
                          }
                        });*/

                      this.setState(prevState => ({
                        rectangles: prevState.rectangles.map(eachRect =>
                          eachRect.name === shape.attrs.name
                            ? {
                                ...eachRect,
                                x: event.target.x(),
                                y: event.target.y()
                              }
                            : eachRect
                        )
                      }));
                    }}
                  />
                );
              })}
              {this.state.circles.map(eachCircle => (
                <Circle
                  ref={eachCircle.ref}
                  name={eachCircle.name}
                  x={eachCircle.x}
                  y={eachCircle.y}
                  radius={eachCircle.radius}
                  fill={eachCircle.fill}
                  stroke={eachCircle.stroke}
                  strokeWidth={eachCircle.strokeWidth}
                  strokeScaleEnabled={false}

                  draggable
                  onDragMove={() => {
                    console.log(
                      "name of circle moving: ",
                      eachCircle.name,
                      "new x y",
                      eachCircle.x,
                      eachCircle.y
                    );
                  }}

                  onDragEnd={event => {
                    //cannot compare by name because currentSelected might not be the same
                    //have to use ref, which appears to be overcomplicated
                    var shape = this.refs[eachCircle.ref];

                    this.setState(prevState => ({
                      circles: prevState.circles.map(eachCircle =>
                        eachCircle.name === shape.attrs.name
                          ? {
                              ...eachCircle,
                              x: event.target.x(),
                              y: event.target.y()
                            }
                          : eachCircle
                      )
                    }));

                    this.refs.graphicStage.draw();
                  }}
                />
              ))}

              {this.state.triangles.map(eachTriangle => (
                <RegularPolygon
                  ref={eachTriangle.ref}
                  name={eachTriangle.name}
                  x={eachTriangle.x}
                  y={eachTriangle.y}
                  sides={3}
                  radius={40}
                  stroke={eachTriangle.stroke}
                  strokeWidth={eachTriangle.strokeWidth}
                  fill={eachTriangle.fill}
                  strokeScaleEnabled={false}
         
                  draggable
                  
                  onDragStart={() => {
                     this.setState({
                       isDragging: true,
                     });
                   }}

                  onDragEnd={event => {
                    //cannot compare by name because currentSelected might not be the same
                    //have to use ref, which appears to be overcomplicated
                    var shape = this.refs[eachTriangle.ref];

                    this.setState(prevState => ({
                      triangles: prevState.triangles.map(eachTriangle =>
                        eachTriangle.name === shape.attrs.name
                          ? {
                              ...eachTriangle,
                              x: event.target.x(),
                              y: event.target.y()
                            }
                          : eachTriangle
                      )
                    }));
                  }}

                />
              ))}
              
            </Layer>

            <Layer
              height={window.innerHeight}
              width={window.innerWidth}
              ref="layer"
            >
              <Toolbar
                layer={this.refs.layer2}
                rectName={
                  this.state.rectangles.length + 1 + this.state.rectDeleteCount
                }
                circleName={
                  this.state.circles.length + 1 + this.state.circleDeleteCount
                }
                triangleName={
                  this.state.triangles.length + 1 + this.state.trianglesDeleteCount
                }
                
                appendToRectangles={stuff => {
                  var layer = this.refs.layer2;
                  var toPush = stuff;
                  var stage = this.refs.graphicStage;
                 
                  this.setState(prevState => ({
                    rectangles: [...prevState.rectangles, toPush],
                    selectedShapeName: toPush.name
                  }));
                }}
                appendToCircles={stuff => {
                  var layer = this.layer2;
                  var toPush = stuff;
                  var stage = this.graphicStage;

                  this.setState(prevState => ({
                    circles: [...prevState.circles, toPush],
                    selectedShapeName: toPush.name
                  }));
                }}
                appendToTriangles={stuff => {
                  var layer = this.layer2;
                  var toPush = stuff;
                  var stage = this.graphicStage;
                 
                  this.setState(prevState => ({
                    triangles: [...prevState.triangles, toPush],
                    selectedShapeName: toPush.name
                  }));
                }}

              />
            </Layer>
          </Stage>

          <div className="errMsg">{errDisplay}</div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default Graphics;