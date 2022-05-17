import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

export type Adress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: Adress;
  phone: string;
  website: string;
  company: Company;
};

type Props = {
  users: Array<User>;
};

const ListUsers: React.FC<Props> = (props: { users: Array<User> }) => {
  return (
    <Box>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <a href={`/users/${user.id}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ListUsers;
