import { useParams } from "react-router";// for params from rout
const ProduvTDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProduvTDetail;
