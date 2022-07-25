import { IResolvers } from "@graphql-tools/utils";

const query: IResolvers = {
  Query: {
    students(): string {
      return "Students lists";
    },
  },
};

export default query;
