import './Brothers.css';

const Brothers: React.FC = () => {
  return (
    <div className="brothers-wrapper">
      <div className="exec-wrapper">
        <div className="exec-image-wrapper">
          <img
            className="exec-image"
            src="exec-spring-25.jpg"
            alt="Exec Board"
          />
          <h1 className="exec-text-header">Executive Board</h1>
        </div>
        <div className="exec-people-wrapper">
          <div className="brother-container">
            <img
              className="brother-image"
              src="composites/303ciejek.jpg"
              alt="Ciejek"
            />
            <div className="brother-info">
              <p>
                Daniel Ciejek<br></br>President
              </p>
            </div>
          </div>
          <div className="brother-container">
            <img
              className="brother-image"
              src="composites/304daniels.jpg"
              alt="Daniels"
            />
            <div className="brother-info">
              <p>
                Ashton Daniels<br></br>Vice President
              </p>
            </div>
          </div>
          <div className="brother-container">
            <img
              className="brother-image"
              src="composites/321oates.jpg"
              alt="Oates"
            />
            <div className="brother-info">
              <p>
                Connor Oates<br></br>VP of Standards
              </p>
            </div>
          </div>
          <div className="brother-container">
            <img
              className="brother-image"
              src="composites/306ferdico.jpg"
              alt="Ferdico"
            />
            <div className="brother-info">
              <p>
                Zach Ferdico<br></br>VP of Brotherhood
              </p>
            </div>
          </div>
          <div className="brother-container">
            <img
              className="brother-image"
              src="composites/317cooke.jpg"
              alt="Cooke"
            />
            <div className="brother-info">
              <p>
                Oliver Cooke<br></br>VP of Finance
              </p>
            </div>
          </div>
          <div className="brother-container">
            <img
              className="brother-image"
              src="composites/314zahler.jpg"
              alt="Zahler"
            />
            <div className="brother-info">
              <p>
                Justin Zahler<br></br>VP of Socials
              </p>
            </div>
          </div>
          <div className="brother-container">
            <img
              className="brother-image"
              src="composites/318dubanowitz-a.jpg"
              alt="A Dubanowitz"
            />
            <div className="brother-info">
              <p>
                Andrew Dubanowitz<br></br>VP of Community
              </p>
            </div>
          </div>
          <div className="brother-container">
            <img
              className="brother-image"
              src="composites/305digiacomo.jpg"
              alt="DiGiacomo"
            />
            <div className="brother-info">
              <p>
                Reece DiGiacomo<br></br>Secretary
              </p>
            </div>
          </div>
          <div className="brother-container">
            <img
              className="brother-image"
              src="composites/308goyette.jpg"
              alt="Goyette"
            />
            <div className="brother-info">
              <p>
                Bobby Goyette<br></br>Phikeia Educator
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="council-wrapper">
        <div className="council-image-wrapper">
          <img
            className="council-image"
            src="council-spring-25.jpg"
            alt="Council"
          />
          <h1 className="council-text-header">Council</h1>
        </div>
        <div className="council-people-wrapper">
          <img className="brother-image" src="ciejek.png" alt="Ciejek" />
          <img className="brother-image" src="ciejek.png" alt="Ciejek" />
          <img className="brother-image" src="ciejek.png" alt="Ciejek" />
          <img className="brother-image" src="ciejek.png" alt="Ciejek" />
        </div>
      </div>
    </div>
  );
};

export default Brothers;
