import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Mounted{
  @Field()
  type: String;
  @Field()
  effect: String;
}

export default Mounted;