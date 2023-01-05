import { IData } from "../services/Common/types";

interface IProps {
  data: IData[] | [];
}
const Home = ({ data }: IProps) => {
  console.log("data", data);

  return (
    <section id="home">
      <div className="content">
        <p>ELC Coding Test...</p>
      </div>
    </section>
  );
};

export default Home;
