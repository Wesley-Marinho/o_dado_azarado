import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Hunger{
  @Field()
  type: String;
  @Field()
  description: String;
}

export default Hunger;