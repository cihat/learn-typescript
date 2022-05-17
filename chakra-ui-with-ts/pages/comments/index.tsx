import React from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import HomeLayout from "../../components/home-layout";
import ListComments from "../../containers/list-comments";

const Comments: NextPage = ({
  comments,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log("comments: ", comments);

  return (
    <HomeLayout>
      <ListComments comments={comments} />
    </HomeLayout>
  );
};

export default Comments;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let comments = [];
  try {
    const fetchData = await fetch(`${process.env.API_URL}/comments`).then(
      (res) => res.json()
    );
    if (Array.isArray(fetchData)) {
      comments = fetchData;
    }

    console.log("comments: ", comments);
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      comments,
    },
  };
};
