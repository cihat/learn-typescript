import React from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import HomeLayout from "../../components/home-layout";

const Photos: NextPage = ({
  photos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <HomeLayout>
      <h1>Photos</h1>
    </HomeLayout>
  );
};

export default Photos;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};
