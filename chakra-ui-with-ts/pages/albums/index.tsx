import React from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import HomeLayout from "../../components/home-layout";
import Link from "next/link";

const Albums: NextPage = ({
  albums,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <HomeLayout>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link href={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </HomeLayout>
  );
};

export default Albums;

export const getServerSideProps: GetServerSideProps = async () => {
  let albums: any = {};
  console.log(process.env.API_URL);
  try {
    const [albumsResponse] = await Promise.all([
      fetch(`${process.env.API_URL}/albums`),
    ]);

    const [albumsJson] = await Promise.all([albumsResponse.json()]);
    albums = albumsJson;
  } catch (e) {
    console.error(e);
  }
  return {
    props: {
      albums,
    },
  };
};
