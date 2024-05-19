const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  const { course } = props;
  return (
    <>
      <Part parts={course.parts} />
    </>
  );
};

const Total = (props) => {
  const { course } = props;
  let sum = 0;
  course.parts.forEach((part) => (sum += part.exercises));
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  );
};

const Part = (props) => {
  const { parts } = props;
  let content = [];
  parts.forEach((part) => {
    content.push(
      <p key={part.name}>
        {part.name} {part.exercises}
      </p>,
    );
  });
  return <>{content}</>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },

      {
        name: "Using props to pass data",
        exercises: 7,
      },

      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
export { Total, Content, Header, Part };
