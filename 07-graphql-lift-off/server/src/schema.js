const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    modules: [Module!]!
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    title: String!
    length: Int
    content: String
  }
`;

module.exports = typeDefs;
