import React from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import HomeLayout from "../../components/home-layout";

const Posts: NextPage = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <HomeLayout>
      <h1>Posts</h1>
    </HomeLayout>
  );
};

export default Posts;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};
