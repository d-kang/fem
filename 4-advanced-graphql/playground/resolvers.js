module.exports = {
  Query: {
    onePerson() {
      return {
        name: 'Jamie!'
      }
    }
  },
  Mutation: { // 4 args in a mutation
    newPerson(_, args, context, info /*almost never use*/) {
      const name = args.input.name
      return {
        name
      }
    }
  }
}


// module.exports = {
//   Query: {
//     onePerson: () => {
//       return {
//         name: 'David'
//       }
//     }
//   }
// }