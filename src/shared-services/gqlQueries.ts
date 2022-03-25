import { gql } from "@apollo/client";


export class GQLQueries {
  static GET_FEED = gql`
    query ($limit: Int!, $offset: Int!) {
      getFeed(input: { limit: $limit, offset: $offset }) {
        items {
          ... on IGStoryMission {
            date
            title
            cashReward
            video {
              alt
              src
            }
          }
          ... on FBPostMission {
            date
            title
            image {
              alt
              src
            }
            cashReward
          }
        }
        hasNextPage
      }
    }
  `;
}

