import "./styles.scss";
import supervisor from "/images/icon-supervisor.svg";
import team from "/images/icon-team-builder.svg";
import karma from "/images/icon-karma.svg";
import calculator from "/images/icon-calculator.svg";

function App() {
  return (
    <>
      <main>
        <section>
          <div className="header">
            <h1 id="light-heading">Reliable, efficient delivery</h1>
            <h1 id="bold-heading">Powered by Technology</h1>

            <p>
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </div>

          <div className="cards-section">
            <div className="card card-1">
              <h2>Supervisor</h2>
              <p>Monitors activity to identify project roadblocks</p>
              <img src={supervisor} alt="supervisor-icon" />
            </div>

            <div className="card card-2">
              <h2>Team Builder</h2>
              <p>
                Scans our talent network to create the optimal team for your
                project
              </p>
              <img src={team} alt="team-builde-icon" />
            </div>

            <div className="card card-3">
              <h2>Karma</h2>
              <p>Regularly evaluates our talent to ensure quality</p>
              <img src={karma} alt="karma-icon" />
            </div>

            <div className="card card-4">
              <h2>Calculator</h2>
              <p>
                Uses data from past projects to provide better delivery
                estimates
              </p>
              <img src={calculator} alt="calculator-icon" />
            </div>
          </div>
        </section>

        <footer>
          <p className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://portfolio-website-27ll.onrender.com/"
              target="_blank"
            >
              Eugene Amedior
            </a>
            .
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
