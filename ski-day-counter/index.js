const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
    scalar Date 
    type SkiDay{
        id:ID!
        date:Date!
        mountain:String!
        conditions:Conditions!
    }
    enum Conditions {
        POWER
        HEAVY
        ICE
        THIN
    }
    type Query {
        totalDays:Int!
        allDays:[SkiDay!]!
    }
    input AddDayInput {
        date :Date!
        mountain:String!
        conditions:Conditions
    }
    type Mutation {
        addDay(input:AddDayInput!): SkiDay
        remove(id:ID!):SkiDay!
    }
    type Subscription{
        newDay:SkiDay!
    }
`;

const resolvers = {

};
const mocks ={
    Date: () => "1/2/20225",
    String:() => "coolData",
}
const server = new ApolloServer({
    typeDefs,
    mocks:mocks
})


server.listen()
.then(({ url }) => console.log(`Server running at ${url}`)) ;