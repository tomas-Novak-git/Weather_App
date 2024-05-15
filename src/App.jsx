import Weather from "./components/Weather/Weather";
import "./App.css";

function App() {
  return (
    <>
      <Weather />
      <div className='footer'>
        <p>Small weather app by </p>
        <a
          href='https://tn-portfolio-nu.vercel.app'
          target='_blank'>
          T.N.
        </a>
      </div>
    </>
  );
}

export default App;
