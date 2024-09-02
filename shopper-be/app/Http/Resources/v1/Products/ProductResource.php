<?php

namespace App\Http\Resources\v1\Products;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'sku' => $this->sku,
            'name' => $this->name,
            'description' => $this->description,
            'price_cents' => $this->price_cents,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
