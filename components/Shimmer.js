import Card from "./Card";

const Shimmer = () => {
  return (
    <div className="cards">
      {Array(8)
        .fill("")
        .map((arr, i) => (
          <article key={i}>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>

            <div class="shimmer"></div>
          </article>
        ))}
    </div>
  );
};
export default Shimmer;
