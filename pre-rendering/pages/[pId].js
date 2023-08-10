import path from "path";
import fs from "fs/promises";
import { Fragment } from "react";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  //   If fallback set to blocking, you don't need this fallback check
  //   if (!loadedProduct) return <p>Loading...</p>;

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pId;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          pId: "p1",
        },
      },
    ],
    fallback: "blocking",
  };
}

export default ProductDetailPage;
