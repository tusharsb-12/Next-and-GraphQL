import type { NextPage } from "next";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../lib/withApollo";
import { useCharactersQuery } from "../generated";
import Image from "next/image";

const Home: NextPage = () => {
  const { data, loading } = useCharactersQuery();

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <h1 className="title">Using GraphQL API with Next</h1>
      <div className="grid-container">
        {data?.characters?.results?.map((character, index) => (
          <div key={index}>
            <h1>{character?.name}</h1>
            <Image
              src={character?.image!}
              alt={character?.name!}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default withApollo(Home, { getDataFromTree });
