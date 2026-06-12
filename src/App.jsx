import React from 'react';
import foods from './data/foods';
import FoodCard from './components/FoodCard';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">เมนูอาหารโปรดของฉัน 🍽️</h1>
      <p className="subtitle">รวมเมนูเด็ดที่กินกี่ทีก็ไม่เบื่อ</p>
      
      <div className="food-list">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default App;