import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Conversation{
  @Field()
  type: String;
  @Field()
  disadvantage: String;
}

export default Conversation;