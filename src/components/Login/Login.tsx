const Purchase = () => {
  return (
    <form className="m-auto" style={{ width: '20rem' }}>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="text"
          id="username"
          name="username"
          placeholder="kminchelle"
        />
        <label htmlFor="username">user name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          placeholder="0lelplR"
        />
        <label htmlFor="password">password</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Log in
      </button>
    </form>
  );
};

export default Purchase;
