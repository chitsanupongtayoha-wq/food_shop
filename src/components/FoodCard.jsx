import React from 'react';
function FoodCard({ food }) {
  return (
    <div className="food-card">
      {food.isBestSeller && <div className="bestseller-badge">ขายดี!</div>}
      <img src={food.image} alt={food.name} />
      <div className="food-content">
        <h2>{food.name}</h2>
        <p><strong>ประเภท:</strong> {food.type}</p>
        <p><strong>รีวิว:</strong> <span className="rating">{food.rating}</span></p>
        <p><strong>ราคา:</strong> {food.price} บาท</p>
        <button className="order-btn" onClick={() => alert(`คุณได้สั่ง: ${food.name}`)}>
          สั่งเลย
        </button>
      </div>
    </div>
  );
}
export default FoodCard;