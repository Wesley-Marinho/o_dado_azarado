import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Pursue{
  @Field()
  type: String;
  @Field()
  description: String;
}

export default Pursue;