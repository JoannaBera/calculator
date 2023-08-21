import Calculator from "../Calculator/calculator";
import useFetch from "../../hooks/useFetch";
import "./container.css";

const Container = () => {
  const { data, isLoading, error } = useFetch(
    process.env.PUBLIC_URL + "/data.json"
  );

  const content = data ? (
    <Calculator data={data} />
  ) : isLoading ? (
    <p>Loading...</p>
  ) : (
    error && <p>{error}</p>
  );

  return <section className="container">{content}</section>;
};

export default Container;
