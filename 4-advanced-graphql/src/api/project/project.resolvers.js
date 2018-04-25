// resolve the query you made
module.exports = {
  Query: {
    helloWorld() {
      return {
        message:'World!'
      }
    }
  }
}

// type Query {
//   onePerson(id: ID!): Person!
// }