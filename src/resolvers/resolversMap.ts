import { IResolvers } from "@graphql-tools/utils";
import query from "./query";

const resolvers: IResolvers = {
  Query: {
    ...query,
  },
};

export default resolvers;
