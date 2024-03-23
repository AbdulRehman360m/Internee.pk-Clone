const GoogleMap = ({ location = "Sindh Madressah-Tul-Islam University" }) => {
  const url = `https://maps.google.com/maps?width=100%&height=604&hl=en&q=${location}&t=&z=15&ie=UTF8&output=embed`;

  return (
    <div className="mapouter" style={{ filter: "grayscale(100%)" }}>
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          width="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={url}
        />
        <a
          href="https://strandsgame.net/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Strands
        </a>
      </div>
      <style jsx>{`
        .mapouter {
          position: relative;
          text-align: right;
          width: 100%;
          height: 500px;
        }

        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          width: 100%;
          height: 500px;
        }

        .gmap_iframe {
          height: 500px !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleMap;
