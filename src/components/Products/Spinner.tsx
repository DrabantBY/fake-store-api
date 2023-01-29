const Spinner = () => (
  <div className="text-center text-primary" style={{ marginTop: '20rem' }}>
    <h2 className="display-5 ">Loading...</h2>
    <div
      className="spinner-grow text-center"
      role="status"
      style={{ width: '10rem', height: '10rem' }}
    />
  </div>
);

export default Spinner;
