import React, { useState, useEffect } from 'react';
import Nav from './Navbar';
import { Link, Routes, Route } from 'react-router-dom';
import ImageViewer from './ImageViewer';

function SeeImages() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/images")
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  //each time images changes, useEffect called as function and executes console.log 
  useEffect(() => {
    console.log(images)
  }, [images]);


  return (
    <div>
      <Nav />
      <nav>
        <ul>
          {images.map((image) => (
            <li key={image.id}>
              <Link to={`/seeimages/${image.id}`}>
                Click to see {image.name} that has {image.numberOfShapes} shapes
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SeeImages;