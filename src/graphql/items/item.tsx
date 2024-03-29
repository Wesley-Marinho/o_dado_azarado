import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Item {
  @Field()
  name: String;
  @Field()
  price: String;
  @Field()
  quantity: String;
}

export default Item;