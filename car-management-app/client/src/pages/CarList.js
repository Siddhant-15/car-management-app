import React, { useEffect, useState } from 'react';
import { getCars, deleteCar } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaList, FaTh, FaSignOutAlt, FaSearch, FaEdit, FaTrashAlt } from 'react-icons/fa';
import {
    PageWrapper,
    TopBar,
    TopButtons,
    SmallButton,
    DeleteButton,
    LogoutButton,
    SearchBarContainer,
    TransparentBox,
    CarGrid,
    CarItem,
    ActionButtons
} from './CarListStyles';

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isListView, setIsListView] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCars = async () => {
            const response = await getCars();
            setCars(response.data);
        };
        fetchCars();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleDelete = async (carId) => {
        try {
            await deleteCar(carId);
            setCars(cars.filter(car => car._id !== carId));
            alert("Car deleted successfully!");
        } catch (error) {
            console.error("Error deleting car:", error);
            alert("Failed to delete the car.");
        }
    };

    const filteredCars = cars.filter(car =>
        car.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getImageSource = (image) => {
        try {
            return require(`../assets/images/${image}`);
        } catch {
            return image;
        }
    };

    return (
        <PageWrapper>
            <TopBar>
                <LogoutButton onClick={handleLogout}>
                    <FaSignOutAlt />
                </LogoutButton>
                <SearchBarContainer>
                    <input
                        type="text"
                        placeholder="Search cars..."
                        className="search-bar"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="search-icon" />
                </SearchBarContainer>
                <TopButtons>
                    <SmallButton onClick={() => navigate('/add-car')}>
                        <FaPlus />
                    </SmallButton>
                    <SmallButton onClick={() => setIsListView(!isListView)}>
                        {isListView ? <FaTh /> : <FaList />}
                    </SmallButton>
                </TopButtons>
            </TopBar>

            <TransparentBox>
                <CarGrid isListView={isListView}>
                    {filteredCars.map(car => (
                        <CarItem
                            key={car._id}
                            isListView={isListView}
                            onClick={() => navigate(`/cars/${car._id}`)}
                        >
                            <img src={getImageSource(car.image)} alt={car.title} />
                            <div className="car-details">
                                <h3>{car.title}</h3>
                                <p>{car.description}</p>
                                <div className="tags">{car.tags.join(", ")}</div>
                            </div>
                            <ActionButtons isListView={isListView}>
                                <SmallButton onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/edit-car/${car._id}`);
                                }}>
                                    <FaEdit />
                                </SmallButton>
                                <DeleteButton onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(car._id);
                                }}>
                                    <FaTrashAlt />
                                </DeleteButton>
                            </ActionButtons>
                        </CarItem>
                    ))}
                </CarGrid>
            </TransparentBox>
        </PageWrapper>
    );
};

export default CarList;
