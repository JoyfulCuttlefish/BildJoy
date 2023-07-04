import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateImage from './CreateImage';
import ImageViewer from './ImageViewer';
import SeeImages from './SeeImages';



const Rooter = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<CreateImage />} />
                <Route path="/seeimages" element={<SeeImages />} />
                <Route path="/seeimages/:id" element={<ImageViewer />} />
            </Routes>
        </Router>
    );
};

export default Rooter;