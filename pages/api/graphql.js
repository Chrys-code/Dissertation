/*
import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'
const mongoose = require('mongoose')
const User = require('../schema/userschema')
const typeDefs = gql`

    type Arrival {
        location: String!,
        time: String!,
    },

    type Departure {
        location: String!,
        time: String!,
    },

  type user {
    _id: ID!,
    firstname: String!,
    lastname: String!,
    children: Boolean!,
    departure: Departure!,
    arrival: Arrival!
    transport: [String!],
    links: [String!],
  },

  type Query {
    user(_id: ID!): user
  }

`

const resolvers = {
    Query: {
        user(_parent, _args, _context, _info) {
            return User.findOne()
        },
    },
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

let db;

const apolloServer = new ApolloServer({
    schema,
    context: async () => {
        if (!db) {
            try {
                const dbClient = mongoose.connect(process.env.DB_KEY, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
                //if (!dbClient.isConnected()) await dbClient.connect()
                db = dbClient
            } catch (e) {
                console.log(e)
            }
        }
        console.log(db)
        return { db }
    },
})


export const config = {
    api: {
        bodyParser: false,
    },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
*/

