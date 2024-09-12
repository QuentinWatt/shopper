import React, { FormEvent, useContext, useState } from "react";
import ProductEditContext from "@/providers/products/ProductEditContext";
import TextInput from "../shared/inputs/TextInput";
import TextareaInput from "../shared/inputs/TextareaInput";
import Loader from "../shared/loader/Loader";
import Button from "../shared/Button";
import Panel from "../shared/layout/Panel";
import putPostProductRequest from "@/requests/products/putProductRequest";
import BaseErrorResponse from "@/models/responses/BaseErrorResponse";
import Alert from "../shared/alerts/Alert";
import { useToast } from "../shared/toasts/ToastContext";

const ProductEditForm: React.FC = () => {
  const { addToast } = useToast();
  const { product, setProduct, isFetching } = useContext(ProductEditContext);
  const [saving, setSaving] = useState<boolean>(false);
  const [error, setError] = useState<BaseErrorResponse | null>(null);

  const [name, setName] = useState<string>(product?.name ?? "");
  const [description, setDescription] = useState<string>(
    product?.description ?? ""
  );
  const [sku, setSku] = useState<string>(product?.sku ?? "");
  const [price, setPrice] = useState<string>(product?.price_cents ?? "");

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { product: newProduct, responseError } = await putPostProductRequest({
      id: product!.id,
      name,
      description,
      sku,
      price_cents: price,
    });
    if (!responseError) {
      addToast("success");
      setProduct(newProduct);
    } else {
      addToast("error");
    }
    setError(responseError);
    setSaving(false);
  };

  if (isFetching) {
    return (
      <Panel className="flex justify-center">
        <Loader width={50} height={50} />
      </Panel>
    );
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSave}
      className="grid md:grid-cols-5 md:gap-5"
    >
      <Panel className="md:col-span-4 order-2 md:order-1">
        {error !== null && (
          <Alert className="bg-red-300 mb-3">{error.message}</Alert>
        )}

        <div className="grid gap-3">
          <div>
            <TextInput
              id="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div>
            <TextareaInput
              id="description"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="h-48"
            />
          </div>
          <div>
            <TextInput
              id="price"
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <TextInput
              id="sku"
              label="SKU"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
            />
          </div>
        </div>
      </Panel>
      <Panel className="mb-3 order-1 md:order-2">
        <Button type="submit" loading={saving} className="w-full">
          Save
        </Button>
      </Panel>
    </form>
  );
};

export default ProductEditForm;
