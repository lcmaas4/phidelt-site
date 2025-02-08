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
          <img className="brother-image" src="ciejek.png" alt="Ciejek" />
          <img className="brother-image" src="ciejek.png" alt="Ciejek" />
          <img className="brother-image" src="ciejek.png" alt="Ciejek" />
          <img className="brother-image" src="ciejek.png" alt="Ciejek" />
          <img className="brother-image" src="ciejek.png" alt="Ciejek" />
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
