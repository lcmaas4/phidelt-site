import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="about-text-wrapper">
          <h1>Phi Delta Theta - Massachusetts Epsilon</h1>
          <p>
            Founded in the Spring of 2011 at Northeastern University with the
            bold vision of helping its brothers “become the greatest version of
            themselves,” the Massachusetts Epsilon chapter of Phi Delta Theta
            quickly grew from a small group to nearly 50 members, all sharing a
            common goal of joining a brotherhood that would inspire personal
            growth. Less than a year later, on February 4th, 2012, the chapter
            was officially recognized as the 169th active Phi Delta Theta
            chapter. A decade and over 350 brothers later, Massachusetts Epsilon
            continues to be a powerful force for service, philanthropy, and
            brotherhood, making a lasting impact in Boston and beyond.
          </p>
        </div>
      </div>
      <div className="history-wrapper">
        <div className="history-text-wrapper">
          <h1>Our History</h1>
          <p>
            On December 26th, 1848, Robert Morrison, John McMillan Wilson, and
            four classmates, known as the “Immortal Six,” founded Phi Delta
            Theta at Miami University in Oxford, Ohio. They created the
            fraternity’s guiding principles and The Bond, which every initiate
            still signs today. Their vision laid the foundation for a
            brotherhood that would grow and thrive for generations.
          </p>
          <p>
            Phi Delta Theta quickly expanded, with its second chapter at Indiana
            University in 1849. The fraternity’s growth was fueled by Walter B.
            Palmer and George Banta Sr., the “Second Founders,” who helped
            spread Phi Delta Theta across campuses in the late 19th century.
          </p>
          <p>
            Today, Phi Delta Theta has nearly 190 active chapters and over
            180,000 alumni worldwide, continuing to foster lifelong friendships,
            leadership, and service while making a positive impact in
            communities.
          </p>
        </div>
        <div className="history-image-wrappper">
          <img
            className="history-image"
            src="history-image.jpg"
            alt="History of Phi Delt"
          />
        </div>
      </div>
      <div className="morrison-wrapper">
        <div className="morrison-text-wrapper">
          <h1>
            “To do what ought to be done but would not have been done unless I
            did it, I thought to be my duty.”
          </h1>
          <h3>-Robert Morrison, Phi Delta Theta Founder</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
