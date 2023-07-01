import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateImage from './CreateImage.js';
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
                    <Route path="/" element={<CreateImage />} />
                    <Route path="/seeimages/" element={<SeeImages />} />
                    <Route path="/seeimages/:id" element={<SeeImages />} />

                </Routes>

            </Router>
        </>
    )

};

export default Rooter