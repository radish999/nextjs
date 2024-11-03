import { gql } from 'apollo-boost';
// 定义 GraphQL 查询
export const listItems = gql`
  query listUserMessages {
    listUserMessages {
      items {
        name
      age
      }
    }
  }
`;