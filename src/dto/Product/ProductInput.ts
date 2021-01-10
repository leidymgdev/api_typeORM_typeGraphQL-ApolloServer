import {Field, Int, InputType} from 'type-graphql';

@InputType()
export class ProductInput {
  @Field(() => String)
  name!: string;

  @Field(() => Int)
  quantity!: number;
}