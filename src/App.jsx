import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory()

const Layout = lazy(() => import ("./components/Layout")) 
const Sessions = lazy(() => import ("./pages/sessions")) 
const Info = lazy(() => import ("./pages/info")) 
const Docs = lazy(() => import ("./pages/docs")) 
const Comments = lazy(() => import ("./pages/comments")) 

 
const App = () => {
    return (
        <BrowserRouter history={history}>
            <Layout>
                <Suspense>
                    <Routes>
                        <Route element={<Sessions/>} path='/post-something-frontend/'></Route>
                        <Route element={<Docs/>} path='/post-something-frontend/docs'></Route>
                        <Route element={<Info/>} path='/post-something-frontend/info'></Route>
                        <Route element={<Comments/>} path='/post-something-frontend/comments/:id'></Route>
                    </Routes>
                </Suspense>    
            </Layout>
        </BrowserRouter>
    )
}

export default App