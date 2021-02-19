import { gql } from 'apollo-server-express';

export const typeDefs = gql`

type ListAllHotels {
    helloWorld: String!
    hotels: [Hotel!]!
}

type BookHotels {
    id: ID!
    name: String!
}

type UserProfile {
    createuserProfile(name: String!): Hotel!
}

`;