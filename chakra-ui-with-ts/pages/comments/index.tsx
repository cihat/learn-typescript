import React from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import HomeLayout from "../../components/home-layout";

const Comments: NextPage = ({
  comments,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <HomeLayout>
      <h1>Comments</h1>
    </HomeLayout>
  );
};

export default Comments;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};
