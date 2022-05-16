import React from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import HomeLayout from "../../components/home-layout";

const Todos: NextPage = ({
  todos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <HomeLayout>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <a href={`/todos/${todo.id}`}>{todo.title}</a>
          </li>
        ))}
      </ul>
    </HomeLayout>
  );
};

export default Todos;

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  let todos: any = {};

  try {
    const [todosResponse] = await Promise.all([
      fetch(`${process.env.API_URL}/todos`),
    ]);

    const [todosJson] = await Promise.all([todosResponse.json()]);
    todos = todosJson;
  } catch (e) {}

  return {
    props: { todos },
  };
};
