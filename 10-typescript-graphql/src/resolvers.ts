/** @format */

export const resolvers = {
  Query: {
    featuredListings: (_, _, { dataSources }) => {
      return dataSources.listingAPI.getFeaturedListings()
    },
  },
}
