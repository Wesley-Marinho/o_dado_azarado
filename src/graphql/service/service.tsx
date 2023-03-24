import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Service{
  @Field()
  type: String;
  @Field()
  disadvantage: String;
}

export default Service;