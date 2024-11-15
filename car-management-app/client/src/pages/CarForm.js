import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createCar, updateCar, getCar } from '../services/api';
import { FaArrowLeft } from 'react-icons/fa';
import {
    FormWrapper,
    FormContainer,
    BackButton,
    Title,
    Form,
    Input,
    TextArea,
    FileInputWrapper,
    FileLabel,
    HiddenFileInput,
    Button
} from './CarFormStyles';

const CarForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (id) {
            const fetchCar = async () => {
                const response = await getCar(id);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setTags(response.data.tags.join(', '));
            };
            fetchCar();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('tags', JSON.stringify(tags.split(',').map(tag => tag.trim())));
        images.forEach((image) => formData.append('images', image));

        try {
            if (id) {
                await updateCar(id, formData);
                alert("Car updated successfully!");
            } else {
                await createCar(formData);
                alert("Car created successfully!");
            }
            navigate('/cars');
        } catch (err) {
            console.error("Error creating/updating car:", err);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <FormWrapper>
            <FormContainer>
                <BackButton onClick={() => navigate('/cars')}>
                    <FaArrowLeft /> Back to Cars List
                </BackButton>
                <Title>{id ? "Edit Car" : "Add New Car"}</Title>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Enter a descriptive title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <TextArea
                        placeholder="Write a detailed description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Tags (comma-separated)"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                    <FileInputWrapper>
                        <FileLabel htmlFor="file-upload">Upload Images</FileLabel>
                        <HiddenFileInput
                            id="file-upload"
                            type="file"
                            multiple
                            onChange={(e) => setImages(Array.from(e.target.files))}
                        />
                    </FileInputWrapper>
                    <Button type="submit">{id ? "Update Car" : "Create Car"}</Button>
                </Form>
            </FormContainer>
        </FormWrapper>
    );
};

export default CarForm;
