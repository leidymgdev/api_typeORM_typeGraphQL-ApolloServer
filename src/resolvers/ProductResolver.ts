import {Resolver, Query, Mutation, Arg, Field, Int, InputType} from 'type-graphql'

import { Product } from '../entity/Product';
import { ProductInput } from '../dto/Product/ProductInput';
import { ProductUpdate } from '../dto/Product/ProductUpdate';

import {createProduct, deleteProduct, updateProduct, getAllProducts} from '../controllers/client.controller';

@Resolver()
export class ProductResolver {
    
    @Mutation(() => Product)
    async createProduct(@Arg('variables', () => ProductInput) variables: ProductInput) {
        return createProduct(variables);
    }

    @Mutation(() => Boolean)
    async deleteProduct(@Arg('id', () => Int) id: number) {
        return deleteProduct(id);
    }

    @Mutation(() => Boolean)
    async updateProduct(
        @Arg('id', () => Int) id: number, 
        @Arg('fields', () => ProductUpdate) fields: ProductUpdate) {
            return updateProduct(id, fields);
    }

    @Query(() => [Product])
    getAllProducts() {
        return getAllProducts();
    }
}