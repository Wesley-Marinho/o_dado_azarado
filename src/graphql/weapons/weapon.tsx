import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Weapon {
  @Field()
  name: String;
  @Field()
  damage: String;
  @Field()
  properties: String;
  @Field()
  price: String;
}

export default Weapon;