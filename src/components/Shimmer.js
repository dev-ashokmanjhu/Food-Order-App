import Card from "./Card";

const Shimmer = () => {
  return (
    <div className="cards shimmer">
      {Array(8)
        .fill("")
        .map((arr, i) => (
          <article key={i}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="shimmer"></div>
          </article>
        ))}
    </div>
  );
};
export default Shimmer;
