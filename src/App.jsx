import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css"

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Validation from "./pages/Validation";
import ControlsModal from "./pages/ControlsModal";
import ProgressBar from "./pages/ProgressBar";
import ScrollAnimation from "./pages/ScrollAnimation";
import Error from "./pages/Error";

function App() {
    return (
        <>
            <Routes>
                <Route index element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                } />

                <Route path='/validation' element={
                    <MainLayout>
                        <Validation />
                    </MainLayout>
                } />

                <Route path='modal-control' element={
                    <MainLayout>
                        <ControlsModal />
                    </MainLayout>
                } />

                <Route path='/progress-bar' element={
                    <MainLayout>
                        <ProgressBar />
                    </MainLayout>
                } />

                <Route path='/scroll-animation' element={
                    <MainLayout>
                        <ScrollAnimation />
                    </MainLayout>
                } />

                <Route path='*' element={
                    <MainLayout>
                        <Error />
                    </MainLayout>
                } />
            </Routes>
        </>
    )
}

export default App