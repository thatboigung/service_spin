import React, { useState } from "react";
import './prof.css';
import { FaHeart, FaPlus } from "react-icons/fa";

const CreateService = () => {
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [bio, setBio] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [serviceDesc, setServiceDesc] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');

    const userId = localStorage.getItem('userId');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('name', name);
        formData.append('profilePic', profilePic);
        formData.append('bio', bio);
        formData.append('serviceName', serviceName);
        formData.append('serviceDesc', serviceDesc);
        formData.append('location', location);
        formData.append('price', price);

        try {
            const response = await fetch('http://localhost/ServiceSpinBackend/ServiceReg.php', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                alert("Registration successful");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Registration failed:', error);
            alert('An error occurred during registration.');
        }
    };

    return (
        <div className="crtSvc-container">
            <form onSubmit={handleSubmit} className="create-service">
                <h2>Complete Your Profile</h2>
                <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} required />
                <div className="container-crt">
                    <div className="cover-photo-service">
                        <h3>Upload Profile Photo</h3>
                        <div className="uploaded">
                            {profilePic ? (
                                <img
                                    src={URL.createObjectURL(profilePic)}
                                    alt="Profile"
                                    className='photo-upload'
                                />
                            ) : (
                                <label className='upload-photo'>
                                    <FaPlus />
                                    <input type="file" onChange={(e) => setProfilePic(e.target.files[0])} required />
                                </label>
                            )}
                        </div>
                    </div>
                    <textarea placeholder="Tell Us About Yourself" onChange={(e) => setBio(e.target.value)} required></textarea>
                    <input type="text" placeholder="What Service You Are Going To Offer" onChange={(e) => setServiceName(e.target.value)} required />
                    <textarea placeholder="Service Description" onChange={(e) => setServiceDesc(e.target.value)} required></textarea>
                    <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} required />
                    <input type="text" placeholder="Your Starting Price" onChange={(e) => setPrice(e.target.value)} required />
                    <div className="btn-done">
                        <button type="submit">Done</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateService;
