import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Armor {
  @Field()
  armorClass: number;
  @Field()
  name: String;
  @Field()
  price: String;
  @Field()
  type: String;
}

export default Armor;