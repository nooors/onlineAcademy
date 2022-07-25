import { IResolvers } from "@graphql-tools/utils";
import query from "./query";

const resolversMap: IResolvers = {
  Query: {
    ...query,
  },
};

export default resolversMap;
