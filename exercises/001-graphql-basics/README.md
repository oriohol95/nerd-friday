# Exercise 1: GraphQL Match

In this exercise, you are requested to migrate some of the features of an old good REST API to GraphQL. The API that you have to use is [football-data.org](https://www.football-data.org/).

The scaffold of the project is already created, you just have to fill the gaps, this will allow you to focus on how GraphQL works, which is our goal.

## Set up the project

At the root directory, you'll find a `.env.example` file, you have to copy and rename it to `.env`. After that, you'll have to generate an API Key, this can be easily done by filling [this form](https://www.football-data.org/client/register), don't worry, you don't have to create an account, just give your e-mail (I can provide an API key upon request if you don't want to give your e-mail).

Once you have your API key, you have to fill the `API_KEY` environment variable with it, to do it, edit the `.env` file that you created, you'll see how.

You are ready to go now, just run `yarn dev` and the GraphQL server will be up and running at the port `:4000`.

There is a test query that you can use to check everything is working:

```gql
query {
  greet (playerId: "42") {
    says
  }
}
```

## Exercise requirements

You have to create the schema of the GraphQL to allow users to query all the information about a [team](www.football-data.org/documentation/api#team) and its [players](www.football-data.org/documentation/api#player), to make things more interesting, you have almost complete freedom to define the schema, there are only 3 rules:

1. The root query definition must be:

```gql
type Query {
  team (teamId: ID!): Team
  player (playerId: ID!): Player
}
```

> Tip: You can define `Team` and `Player` as you want.

2. All the information returned by the API must be reflected in one way or another.

3. In the API, the [team](www.football-data.org/documentation/api#team) contains a property `squad` this is an array with the people that are involved in the team, but not just players, also trainers, etc. We are just interested in the players, so you can use the property `role` of each item of the `squad` to discriminate this. So your `Team` type must contain a `players` property instead of `squad`.

```gql
type Team {
  players: [Player!]!
  ...otherRelevantFields
}
