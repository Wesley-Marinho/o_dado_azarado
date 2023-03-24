import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Escape{
  @Field()
  type: String;
  @Field()
  disadvantage: String;
}

export default Escape;