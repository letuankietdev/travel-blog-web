import createClient from "services/apollo/apolloCleint";
import LOGIN_MUTATION from "services/apollo/mutations/login";

export const handleRequestLogin = async (values) => {
  try{
    const client = await createClient();
    const resultLogin = await client.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        userName: "kietle",
        password: 'qweqweqweq123123',
        typeDevice: "browser",
        deviceId:'123123123',
        os: 'windown',
      }
    })
    console.log('resultLogin', resultLogin);
  }catch(error){
    console.log('error12123123', error);
  }
}