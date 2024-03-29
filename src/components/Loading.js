import spinner from "../assests/spinner.gif";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="loading-container">
      <img src={spinner} alt="Loading" className="loading-img" />
    </div>
  );
};

export default Loading;
