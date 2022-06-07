import React from 'react';
import 'swiper/css';
import './styles/App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PostsPage from './pages/PostsPage/PostsPage';

const App = () => {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path='/' element={ <PostsPage /> } />
                    <Route
                        path='*'
                        element={
                            <p>There's nothing here</p>
                        }
                    />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;