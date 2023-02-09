import { Form } from 'react-router-dom';

const Order = () => {
  return (
    <Form>
      <div>
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input id="firstName" type="text" className="form-control" name="firstName" />
      </div>
      <div>
        <label htmlFor="lastName" className="form-label">
          Last name
        </label>
        <input id="lastName" type="text" className="form-control" name="lastName" />
      </div>
      <div>
        <label htmlFor="userName" className="form-label">
          User name
        </label>
        <input id="userName" type="text" className="form-control" name="userName" />
      </div>
      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input id="email" type="email" className="form-control" name="email" />
      </div>
      <div>
        <label htmlFor="code" className="form-label">
          Postal code
        </label>
        <input id="code" type="text" className="form-control" name="code" />
      </div>
      <div>
        <label htmlFor="state" className="form-label">
          State
        </label>
        <input id="state" type="text" className="form-control" name="state" />
      </div>
      <div>
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input id="city" type="text" className="form-control" name="city" />
      </div>
      <div>
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input id="address" type="text" className="form-control" name="address" />
      </div>
      <div>
        <label htmlFor="promocode" className="form-label">
          Promocode
        </label>
        <input id="promocode" type="text" className="form-control" name="promocode" />
      </div>
      <div className="btn-group">
        <span className="btn btn-primary active">Total</span>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </Form>
  );
};

export default Order;
