import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout" 
import Sessions from "./pages/sessions" 
import Info from "./pages/info" 
import Docs from "./pages/docs" 
import Comments from "./pages/comments" 


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route element={<Sessions/>} path='/'></Route>
                    <Route element={<Docs/>} path='/docs'></Route>
                    <Route element={<Info/>} path='/info'></Route>
                    <Route element={<Comments/>} path='/comments/:id'></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App