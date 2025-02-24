import React from "react";
import { useNavigate } from "react-router-dom";
// 메인페이지의 아이템
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showProduct = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="card" onClick={() => showProduct(item.id)}>
      <img src={item?.img} />
      <div className="choice">{item?.choice ? "운영자 추천" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="new-product">{item?.new ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
