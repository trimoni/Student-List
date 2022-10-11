import Score from "./Score";

const Student = ({student}) => {
  return ( 
    <>
      <h2>{student.name}</h2>
      <h2>{student.bio}</h2>
      {student.scores.map(score =>
        <Score key={score.date} score={score} />
        )}
    </>
  );
}

export default Student;