import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Ground{
  @Field()
  type: String;
  @Field()
  disadvantage: String; 
}

export default Ground;