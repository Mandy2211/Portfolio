import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Intro from "./components/Intro";
import AllProjects from "./sections/Allprojects";
import Navbar from "./components/Navbar";
import SparkleTrail from "./components/SparkleTrail";

function App() {
    // Initialize the state to show the intro when the app loads
    const [showIntro, setShowIntro] = useState(true);

    return (
        <>
            <SparkleTrail />
            <Navbar />
            <Routes>
                <Route 
                    path="/" 
                    element={
                        showIntro ? (
                            <Intro onFinish={() => setShowIntro(false)} />
                        ) : (
                            <Home />
                        )
                    } 
                />
            <Route
                path="/projects"
                element={<AllProjects/>}
            />
            <Route 
                    path="/personal" 
                    element={<Personal />} 
                />
            
            </Routes>
        </>
    );
}

export default App;