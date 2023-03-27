import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Mount{
  @Field()
  type: String;
  @Field()
  displacement: String;
}

export default Mount;