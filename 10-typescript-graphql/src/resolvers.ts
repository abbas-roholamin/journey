/** @format */
import { Resolvers } from "./types";

export const resolvers:Resolvers = {
  Query: {
    featuredListings: (_, _, { dataSources }) => {
      return dataSources.listingAPI.getFeaturedListings()
    },
  },
}
