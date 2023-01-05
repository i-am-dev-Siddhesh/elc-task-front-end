import { IData } from "../types/index";

interface IProps {
  data: IData[];
}
const Home = ({ data }: IProps) => {
  return (
    <section id="home">
      <div className="content">
        <p>ELC Coding Test...</p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "5px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((item) => {
          return (
            <div
              key={item._id}
              style={{
                background: "white",
                border: "1px solid red",
                padding: "10px",
                maxWidth: "300px",
                gap:"10px"
              }}
            >
              <p>{item._id}</p>
              <p>{item.isActive}</p>
              <p>{item.price}</p>
              <p>{item.name}</p>
              <p>{item.about}</p>
              <div>
                {item.tags.map((tag) => (
                  <p>{tag}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
