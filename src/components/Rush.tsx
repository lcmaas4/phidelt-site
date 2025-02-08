import React, { useEffect } from 'react';
import './Rush.css';

const Rush: React.FC = () => {
  useEffect(() => {
    // Ensure Instagram's embed.js script loads properly
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="rush-wrapper">
      <h3 className="rush-title">
        Check back at the start of next fall for information on rush. Check out
        our spring '25 rush video below!
      </h3>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/DESuG_bPmIi/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: '99.375%',
        }}
      >
        <div style={{ padding: '16px' }}>
          <a
            href="https://www.instagram.com/reel/DESuG_bPmIi/?utm_source=ig_embed&amp;utm_campaign=loading"
            style={{
              background: '#FFFFFF',
              lineHeight: '0',
              padding: '0',
              textAlign: 'center',
              textDecoration: 'none',
              width: '100%',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '50%',
                  flexGrow: 0,
                  height: '40px',
                  marginRight: '14px',
                  width: '40px',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flexGrow: 0,
                    height: '14px',
                    marginBottom: '6px',
                    width: '100px',
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flexGrow: 0,
                    height: '14px',
                    width: '60px',
                  }}
                />
              </div>
            </div>
            <div style={{ padding: '19% 0' }} />
            <div
              style={{
                display: 'block',
                height: '50px',
                margin: '0 auto 12px',
                width: '50px',
              }}
            >
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 60 60"
                version="1.1"
                xmlns="https://www.w3.org/2000/svg"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    transform="translate(-511.000000, -20.000000)"
                    fill="#000000"
                  >
                    <g>
                      <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div style={{ paddingTop: '8px' }}>
              <div
                style={{
                  color: '#3897f0',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 550,
                  lineHeight: '18px',
                }}
              >
                View this post on Instagram
              </div>
            </div>
            <div style={{ padding: '12.5% 0' }} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: '14px',
                alignItems: 'center',
              }}
            >
              <div>
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '50%',
                    height: '12.5px',
                    width: '12.5px',
                    transform: 'translateX(0px) translateY(7px)',
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    height: '12.5px',
                    transform: 'rotate(-45deg) translateX(3px) translateY(1px)',
                    width: '12.5px',
                    flexGrow: 0,
                    marginRight: '14px',
                    marginLeft: '2px',
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '50%',
                    height: '12.5px',
                    width: '12.5px',
                    transform: 'translateX(9px) translateY(-18px)',
                  }}
                />
              </div>
              <div style={{ marginLeft: '8px' }}>
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '50%',
                    flexGrow: 0,
                    height: '20px',
                    width: '20px',
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '4px',
                  flexGrow: 0,
                  height: '14px',
                  marginBottom: '6px',
                  width: '224px',
                }}
              />
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '4px',
                  flexGrow: 0,
                  height: '14px',
                  width: '144px',
                }}
              />
            </div>
          </a>
          <p
            style={{
              color: '#c9c8cd',
              fontFamily: 'Arial, sans-serif',
              fontSize: '14px',
              lineHeight: '17px',
              marginBottom: '0',
              marginTop: '8px',
              overflow: 'hidden',
              padding: '8px 0 7px',
              textAlign: 'center',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <a
              href="https://www.instagram.com/reel/DESuG_bPmIi/?utm_source=ig_embed&amp;utm_campaign=loading"
              style={{
                color: '#c9c8cd',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '17px',
                textDecoration: 'none',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              A post shared by Phi Delta Theta - Northeastern University
              (@phideltneu)
            </a>
          </p>
        </div>
      </blockquote>
    </div>
  );
};

export default Rush;
