import { api } from "~/utils/api";
import { type NextPage } from "next";

const Quiz: NextPage = () => {
    const examples = api.example.getAll.useQuery();
  
    if (!examples.data) return <p>Loading...</p>;
  
    return (
      <div>
        <h1>QUIZ</h1>
        <ul>
          {examples.data.map((example) => (
                <li key={example.id}>{example.text}</li>
 
          ))}
        </ul>
      </div>
    );
  };

  export default Quiz