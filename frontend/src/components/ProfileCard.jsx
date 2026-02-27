import React from 'react';

const ProfileCard = () => {
  return (
    <div className="card profile-card">
      <h2 className="card-title">Business Profile</h2>
      <div className="profile-info">
        <div className="profile-avatar">
          <span>S</span>
        </div>
        <div className="profile-details">
          <h3>Sharma Electronics</h3>
          <p className="gstin">27AAAPL1234C1ZV</p>
          <p className="email">sharma.electronics@email.com</p>
          <div className="subscription">
            <span className="plan-badge">Premium Plan</span>
          </div>
        </div>
      </div>
      <button className="edit-profile-btn">Edit Profile</button>
    </div>
  );
};

export default ProfileCard;
