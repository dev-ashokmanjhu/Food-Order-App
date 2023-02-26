import Card from "./Card";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-4 gap-3 p-3">
      {Array(8)
        .fill("")
        .map((arr, i) => (
          <article
            className="bg-gray-400 h-52 rounded-md p-4 flex flex-col justify-between"
            key={i}
          >
            <div className="h-8 bg-white rounded-md"></div>
            <div className="h-8 bg-white rounded-md"></div>
            <div className="h-8 bg-white rounded-md"></div>
            <div className="h-8 bg-white rounded-md"></div>
          </article>
        ))}
    </div>
  );
};
export default Shimmer;
