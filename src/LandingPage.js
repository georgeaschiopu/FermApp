
import React from 'react';

const features = [
  { icon: '🌱', title: 'Farm-to-Table Freshness', description: 'Get fresh produce directly from local farmers.' },
  { icon: '🤝', title: 'Direct Support', description: 'Support farmers by adopting crops or livestock.' },
  { icon: '📦', title: 'Subscription Boxes', description: 'Receive curated seasonal produce delivered to your door.' },
  { icon: '📢', title: 'Real-Time Updates', description: 'Track your orders and get farm updates anytime.' },
];

const testimonials = [
  { name: 'Alice', feedback: 'Amazing freshness and quality. Love supporting local farmers!' },
  { name: 'Marco', feedback: 'Easy to use platform and reliable deliveries every week.' },
];

function LandingPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#4CAF50', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 20px' }}>
          Fresh Produce Direct from Farmers to You
