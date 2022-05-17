import React, {
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from "react";

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

const UsersContext = createContext({
  users: [] as Array<User>,
  fetchUsers: (): void => {},
});

export const useUsers = () => useContext(UsersContext);

export const UsersProvider: FunctionComponent<{ users: Array<User> }> = (
  props
) => {
  const [users, setUsers] = useState(props.users);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/users`);
      const json = await response.json();
      setUsers(json);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UsersContext.Provider value={{ users, fetchUsers }}>
      {props.children}
    </UsersContext.Provider>
  );
};
