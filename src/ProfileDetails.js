import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetails = () => {
  const { id } = useParams(); // Get the dynamic id from the URL

  const profileData = { // Assuming you have profile data here (replace with actual data access)
    firstName: 'John', // Replace with your actual data retrieval logic
    lastName: 'Doe',
    profession: 'Software Engineer',
  };

  return (
    <div>
      <h2>Your Name is: {profileData.firstName} {profileData.lastName}</h2>
      <p>Your Profession is: {profileData.profession}</p>
    </div>
  );
};

export default ProfileDetails;
