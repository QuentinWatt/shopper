import React from "react";
import { useParams } from "react-router-dom";

const ProductView: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto my-6">
      <h1 className="font-bold text-2xl mb-5">Product Name</h1>
      <div>{id}</div>
    </div>
  );
};

export default ProductView;
