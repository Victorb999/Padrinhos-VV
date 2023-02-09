import { GetServerSideProps } from "next";
import path from "path";
import { promises as fs } from "fs";
import { ParsedUrlQuery } from "querystring";

import { Groomsman } from "../../services/types";

type WeddingProps = {
  groomsmen: Groomsman;
};

function Wedding({ groomsmen }: WeddingProps) {
  return <div>{JSON.stringify(groomsmen)}</div>;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}
// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ctx => {
  const params = ctx.params as Params;
  //   const protocol = ctx.headers["x-forwarded-proto"] || "http";
  //   const baseUrl = ctx ? `${protocol}://${ctx.headers.host}` : "";

  const jsonDirectory = path.join(process.cwd(), "json");
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/groomsmen.json",
    "utf8"
  );
  //Return the content of the data file in json format

  const groomsmen = JSON.parse(fileContents).groomsmen.filter(
    (groom: any) => groom.slug === params.slug
  );

  // Pass data to the page via props
  return { props: { groomsmen } };
};

export default Wedding;
