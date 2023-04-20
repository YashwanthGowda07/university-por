import University from "./University";

const Results = ({ uniData }) => {
  return (
    <>
      <h1 className="sectionTitle">University List</h1>
      <div className="uniList">
        {!uniData.length ? (
          <h1>Data Not Found</h1>
        ) : (
          uniData.map((uni) => (
            <University
              key={uni.id}
              id={uni.id}
              country={uni.country}
              name={uni.name}
              website={uni.website}
            />
          ))
        )}
      </div>
    </>
  );
};
export default Results;
