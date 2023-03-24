import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Tendency{
  @Field()
  type: String;
  @Field()
  disadvantage: String;
}

export default Tendency;