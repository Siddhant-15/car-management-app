import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CarList from './pages/CarList';
import CarDetail from './pages/CarDetail';
import CarForm from './pages/CarForm';

const MainRouter = () => (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cars" element={<ProtectedRoute component={CarList} />} />
            <Route path="/car/:id" element={<ProtectedRoute component={CarDetail} />} />
            <Route path="/add-car" element={<ProtectedRoute component={CarForm} />} />
        </Routes>
    </Router>
);

export default MainRouter;
