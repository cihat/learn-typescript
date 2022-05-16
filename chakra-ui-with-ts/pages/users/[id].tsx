import HomeLayout from "../../components/home-layout";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Box } from "@chakra-ui/react";

const UserDetail: NextPage = ({
  userDetail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(userDetail);
  const { id, name, username, email, address, phone, website, company } =
    userDetail || {};

  return (
    <HomeLayout>
      <h1>User Detail </h1>
      <Box>
        <Box>
          <strong>id: {id}</strong>
        </Box>
        <Box>
          <strong>Name: {name}</strong>
        </Box>
        <Box>
          <strong>username: {username}</strong>
        </Box>
        <Box>
          <strong>email: {email}</strong>
        </Box>
        <Box>
          <strong>address: {address.street}</strong>
        </Box>
        <Box>
          <strong>phone: {phone}</strong>
        </Box>
        <Box>
          <strong>website: {JSON.stringify(website, null, 4)}</strong>
        </Box>
      </Box>
    </HomeLayout>
  );
};

export default UserDetail;

export const getServerSideProps: GetServerSideProps = async (props) => {
  let userDetail: any = {};
  try {
    const [userDetailResponse] = await Promise.all([
      fetch(`${process.env.API_URL}/users/${props.query.id}`),
    ]);
    const [userDetailJson] = await Promise.all([userDetailResponse.json()]);
    userDetail = userDetailJson;
    console.log("userDetail", userDetail);
  } catch (e) {
    console.error(e);
  }
  return {
    props: {
      userDetail,
    },
  };
};
