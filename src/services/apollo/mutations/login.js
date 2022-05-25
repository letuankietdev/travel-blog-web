import gql from 'graphql-tag';

const LOGIN_MUTATION = gql`
  mutation userLogin($userName: String!, $password: String!, $typeDevice: String!, $deviceId: String!, $os: String!){
    userLogin(userName: $userName, password: $password, typeDevice: $typeDevice, deviceId: $deviceId, os: $os){
      isSuccess,
      message,
      statusCode, 
      auth {
        token
      },
    }
  }
`

export default LOGIN_MUTATION;