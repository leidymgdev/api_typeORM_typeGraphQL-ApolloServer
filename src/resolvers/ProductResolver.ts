import {Resolver, Query, Mutation, Arg, Field, Int, InputType} from 'type-graphql'

import { Product } from '../entity/Product';

@InputType()
class ProductInput {
  @Field(() => String)
  name!: string;

  @Field(() => Int)
  quantity!: number;
}

@InputType()
class ProductUpdate {
  @Field(() => String, {nullable: true})
  name?: string;

  @Field(() => Int, {nullable: true})
  quantity?: number;
}

@Resolver()
export class ProductResolver {
    
    @Mutation(() => Product)
    async createProduct(@Arg('variables', () => ProductInput) variables: ProductInput) {
        const newProduct = Product.create(variables);
        return await newProduct.save();
    }

    @Mutation(() => Boolean)
    async deleteProduct(@Arg('id', () => Int) id: number) {
        const productDeleted = await Product.delete(id);
        console.log(productDeleted);
        return true;
    }

    @Mutation(() => Boolean)
    async updateProduct(
        @Arg('id', () => Int) id: number, 
        @Arg('fields', () => ProductUpdate) fields: ProductUpdate) {
            await Product.update({id}, fields);
            return true;
    }

    @Query(() => [Product])
    getAllProducts() {
        return Product.find();
    }
}