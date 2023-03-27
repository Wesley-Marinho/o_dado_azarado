import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Grab{
  @Field()
  type: String;
  @Field()
  effect: String;
}

export default Grab;