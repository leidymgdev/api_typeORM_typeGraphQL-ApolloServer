import {Field, Int, InputType} from 'type-graphql';

@InputType()
export class ProductUpdate {
  @Field(() => String, {nullable: true})
  name?: string;

  @Field(() => Int, {nullable: true})
  quantity?: number;
}