import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import SeeImages from './SeeImages.js';



const Rooter = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/images")
            .then(response => response.json())
            .then(data => setImages(data));
    }, []);

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Page1 />} />
                    <Route path="/seeimages/*" element={<SeeImages />} />
                    {images && images.map((image, index) => (
                        <Route
                            key={index}
                            path={`/seeimages/${image.id}`}
                            element={<Page2 imageId={image.id} />}
                        />
                    ))}


                </Routes>

            </Router>
        </>
    )

};

export default Rooter