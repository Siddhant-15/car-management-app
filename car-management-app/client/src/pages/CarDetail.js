import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCar, deleteCar } from '../services/api';
import { FaArrowLeft, FaTrashAlt } from 'react-icons/fa';
import {
    DetailWrapper,
    BackButton,
    CarInfo,
    DeleteButton
} from './CarDetailStyles';

const CarDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await getCar(id);
                console.log("API response:", response);
                if (response.data) {
                    setCar(response.data);
                } else {
                    console.error("No data returned from API.");
                    navigate('/cars');
                }
            } catch (error) {
                console.error("Failed to fetch car details:", error);
                navigate('/cars');
            }
        };
        fetchCar();
    }, [id, navigate]);

    const handleDelete = async () => {
        try {
            await deleteCar(id);
            navigate('/cars');
        } catch (error) {
            console.error("Failed to delete car", error);
            alert("Failed to delete the car.");
        }
    };

    if (!car) return <p>Loading...</p>;

    return (
        <DetailWrapper>
            <BackButton onClick={() => navigate('/cars')}>
                <FaArrowLeft /> Back to Car List
            </BackButton>

            <CarInfo>
                <img src={car.image} alt={car.title} />
                <h2>{car.title}</h2>
                <p>{car.description}</p>
                <DeleteButton onClick={handleDelete}>
                    <FaTrashAlt /> Delete Car
                </DeleteButton>
            </CarInfo>
        </DetailWrapper>
    );
};

export default CarDetail;
