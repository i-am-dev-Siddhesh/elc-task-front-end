import { IData } from "../types/index";
import ClipLoader from "react-spinners/ClipLoader";
interface IProps {
  data: IData[];
  isLoading: boolean;
}
const Home = ({ data, isLoading }: IProps) => {
  return (
    <section id="home">
      <div className="content">
        <p>ELC Coding Test...</p>
      </div>

      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ClipLoader size="200px" color="white" />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "5px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data &&
            data?.map((item) => {
              return (
                <div
                  key={item._id}
                  style={{
                    background: "white",
                    border: "1px solid red",
                    padding: "10px",
                    maxWidth: "300px",
                    gap: "10px",
                  }}
                >
                  <p>{item._id}</p>
                  <p>{item.isActive}</p>
                  <p>{item.price}</p>
                  <p>{item.name}</p>
                  <p>{item.about}</p>
                  <img src={item.picture} alt={item.name}></img>
                  <div>
                    {item.tags.map((tag) => (
                      <p>{tag}</p>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </section>
  );
};

export default Home;
