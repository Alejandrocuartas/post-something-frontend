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
                    <Route element={<Sessions/>} path='/post-something-frontend/'></Route>
                    <Route element={<Docs/>} path='/post-something-frontend/docs'></Route>
                    <Route element={<Info/>} path='/post-something-frontend/info'></Route>
                    <Route element={<Comments/>} path='/post-something-frontend/comments/:id'></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App