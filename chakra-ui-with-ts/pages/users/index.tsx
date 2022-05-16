import HomeLayout from "../../components/home-layout";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Box } from "@chakra-ui/react";

const Users: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <Box>
      <HomeLayout>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              <a href={`/users/${user.id}`}>{user.name}</a>
            </li>
          ))}
        </ul>
      </HomeLayout>
    </Box>
  );
};

export default Users;

export const getServerSideProps: GetServerSideProps = async () => {
  let users: any = {};
  console.log(process.env.API_URL);
  try {
    const [usersResponse] = await Promise.all([
      fetch(`${process.env.API_URL}/users`),
    ]);

    const [usersJson] = await Promise.all([usersResponse.json()]);
    users = usersJson;
  } catch (e) {
    console.error(e);
  }
  return {
    props: {
      users,
    },
  };
};
