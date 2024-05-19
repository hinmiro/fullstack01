import { useState } from "react";

const VoteButton = ({ handleVote }) => {
  return (
    <>
      <button onClick={handleVote}>Vote</button>
    </>
  );
};

const AnecdoteButton = ({ handleAnecdote }) => {
  return (
    <>
      <button onClick={handleAnecdote}>Get anecdote</button>
      <GetAnecdote />
    </>
  );
};

const GetAnecdote = ({ selected }) => {
  if (!selected) {
    return null;
  }
  return (
    <>
      <p>{selected.text}</p>
      <p>{selected.vote} votes</p>
    </>
  );
};

const Statistics = ({ good, neutral, bad, total }) => {
  if (total > 0) {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text={"Good"} value={good} />
            <StatisticLine text={"Neutral"} value={neutral} />
            <StatisticLine text={"Bad"} value={bad} />
            <StatisticLine text={"Total reviews"} value={total} />
            <StatisticLine
              text={"Average"}
              value={
                isNaN((good + bad * -1) / total) ? 0 : (good + bad * -1) / total
              }
            />
            <StatisticLine
              text={"Positive"}
              value={isNaN((good / total) * 100) ? 0 : (good / total) * 100}
              precent={true}
            />
          </tbody>
        </table>
      </>
    );
  }
  return (
    <>
      <p>No feedBack given</p>
    </>
  );
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}:</td>
      <td>{props.precent ? `${props.value} %` : props.value}</td>
    </tr>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    {
      text: "If it hurts, do it more often.",
      vote: 0,
    },
    {
      text: "Adding manpower to a late software project makes it later!",
      vote: 0,
    },
    {
      text: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      vote: 0,
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      vote: 0,
    },
    {
      text: "Premature optimization is the root of all evil.",
      vote: 0,
    },
    {
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      vote: 0,
    },
    {
      text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
      vote: 0,
    },
    {
      text: "The only way to go fast, is to go well.",
      vote: 0,
    },
  ];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState(null);
  const [anecs, setAnecs] = useState(anecdotes);
  const [mostVoted, setMostVoted] = useState(null);

  const handleVote = () => {
    if (selected) {
      const newAnecdotes = [...anecs];
      const selectedAnecdote = newAnecdotes.find(
        (anec) => anec.text === selected.text,
      );
      selectedAnecdote.vote += 1;
      setAnecs(newAnecdotes);
      setSelected(selectedAnecdote);

      if (!mostVoted || selectedAnecdote.vote > mostVoted.vote) {
        setMostVoted(selectedAnecdote);
      }
    }
  };

  const handleAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(anecdotes[randomIndex]);
  };

  const handleGood = () => {
    const updateGood = good + 1;
    addTotal();
    setGood(updateGood);
  };

  const handleNeutral = () => {
    const updateNeutral = neutral + 1;
    addTotal();
    setNeutral(updateNeutral);
  };

  const handleBad = () => {
    const updateBad = bad + 1;
    addTotal();
    setBad(updateBad);
  };

  const addTotal = () => setTotal(total + 1);

  return (
    <>
      <h1>Give feedback here</h1>
      <Button handleClick={handleGood} text={"Good"} />
      <Button handleClick={handleNeutral} text={"Neutral"} />
      <Button handleClick={handleBad} text={"Bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      <br />
      <br />
      <VoteButton handleVote={handleVote} />
      <AnecdoteButton handleAnecdote={handleAnecdote} />
      <GetAnecdote selected={selected} />
      <br />
      <br />
      <h3>Anecdote with most votes</h3>
      {mostVoted && (
        <>
          <p>{mostVoted.text}</p>
          <p>{mostVoted.vote} votes</p>
        </>
      )}
    </>
  );
};

export default App;
