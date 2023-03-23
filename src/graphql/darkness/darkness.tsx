import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Darkness {
  @Field()
  type: String;
  @Field()
  example: String;
  @Field()
  disadvantage: String;
}

export default Darkness;