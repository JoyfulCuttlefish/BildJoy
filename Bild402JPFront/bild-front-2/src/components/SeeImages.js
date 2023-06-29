import React, { useState, useEffect, useRef } from 'react';
import Nav from './Navbar';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Page2 from './Page2';

function SeeImages() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/images")
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  return (
    
    <div>
        <Nav />
      <nav>
        <ul>
          {
            images && images.map((image, index) => (
                <li key={index}>
                  <Link to={`/seeimages/${image.id}`} >
                    Click to see {image.name} that has {image.numberOfShapes} shapes 
                    </Link>
                </li>
              )
            )
          }
        </ul>
      </nav>
      <Routes>
        {
          images && images.map((image, index) => (
            <Route
              key={index}
              path={`/seeimages/${image.id}`} 
              render={() => <Page2 imageId={image.id} />}
            />
          ))
        }
      </Routes>
  </div>
);
}
export default SeeImages;
