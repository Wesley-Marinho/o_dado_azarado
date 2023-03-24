import { Query, Resolver } from "type-graphql";
import Service from "./service";
import serviceSchema from "../../model/serviceSchema";

@Resolver(Service)
export class ServiceResolver {
  @Query(() => [Service])
  async services() {
    const service = await serviceSchema.find();
    return service
  }
}
