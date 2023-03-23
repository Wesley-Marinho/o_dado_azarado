import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Track{
  @Field()
  type: String;
  @Field()
  disadvantage: String;
}

export default Track;