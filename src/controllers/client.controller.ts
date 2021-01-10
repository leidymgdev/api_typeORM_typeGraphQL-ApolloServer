import { Product } from '../entity/Product';

import { ProductInput } from '../dto/Product/ProductInput';
import { ProductUpdate } from '../dto/Product/ProductUpdate';

export const createProduct = async(variables: ProductInput) => {
    const newProduct = Product.create(variables);
    return await newProduct.save();
}

export const deleteProduct = async (id: number) => {
    const productDeleted = await Product.delete(id);
    return true;
}

export const updateProduct = async (id: number, fields: ProductUpdate) => {
    await Product.update({id}, fields);
    return true;
}

export const getAllProducts = () => {
    return Product.find();
}