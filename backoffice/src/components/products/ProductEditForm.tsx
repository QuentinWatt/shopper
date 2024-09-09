import React, { useContext, useState } from "react";
import ProductEditContext from "@/providers/products/ProductEditContext";
import TextInput from "../shared/inputs/TextInput";
import TextareaInput from "../shared/inputs/TextareaInput";
import Loader from "../shared/loader/Loader";

const ProductEditForm: React.FC = () => {
  const { product, isLoading } = useContext(ProductEditContext);

  const [name, setName] = useState<string>(product?.name ?? "");
  const [description, setDescription] = useState<string>(
    product?.description ?? ""
  );
  const [sku, setSku] = useState<string>(product?.sku ?? "");
  const [price, setPrice] = useState<string>(product?.price_cents ?? "");

  if (isLoading || product == null) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <form autoComplete="off" className="grid md:grid-cols-2 gap-5">
      <div>
        <div>
          <TextInput
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="mt-2">
          <TextareaInput
            id="description"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-48"
          />
        </div>
      </div>
      <div>
        <div>
          <TextInput
            id="price"
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <TextInput
            id="sku"
            label="SKU"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default ProductEditForm;
