import React, { useState } from 'react';
import Header from './header';
import Footer from './Footer';
import Portfolio from './Portfolio';

function Dashboard() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  
  const userData = {
    profilePic: '/src/assets/profile.png',
    name: 'Aditya',
    age: 21,
    value: '₹2,50,000'
  };

  if (showPortfolio) {
    return (
      <Portfolio 
        profilePic={userData.profilePic}
        name={userData.name}
        age={userData.age}
        value={userData.value}
        onBack={() => setShowPortfolio(false)}
      />
    );
  }

  return (
    <div>
      <Header />
      <div>
        <h2>Dashboard</h2>
        <img src={userData.profilePic} alt="Profile" />
        <h3>{userData.name}</h3>
        <p>Age: {userData.age}</p>
        <p>Value: {userData.value}</p>
        <button onClick={() => setShowPortfolio(true)}>Portfolio</button>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;