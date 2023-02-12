import { useState } from 'react';
import { Form, Link, useAsyncValue, useNavigation } from 'react-router-dom';
import useCartState from '@hooks/useCartState';
import type { UserOrderInterface } from '@/types';

const FormOrder = () => {
  const [code, setCode] = useState('');
  const isPromocode = code === 'goodstore';

  const getCartParams = useCartState((state) => state.getCartParams);
  const { cartSum, discountSum } = getCartParams();

  const { id, firstName, lastName, username, email, address } =
    useAsyncValue() as UserOrderInterface;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="row">
      <Form
        className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto"
        method="delete"
        action="/">
        <div className="row mb-2">
          <div className="col-6">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              id="firstName"
              type="text"
              className="form-control"
              name="firstName"
              defaultValue={firstName}
              disabled
            />
          </div>
          <div className="col-6">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              className="form-control"
              name="lastName"
              defaultValue={lastName}
              disabled
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="userName" className="form-label">
            User name
          </label>
          <input
            id="userName"
            type="text"
            className="form-control"
            name="userName"
            defaultValue={username}
            disabled
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            name="email"
            defaultValue={email}
            disabled
          />
        </div>
        <div className="row mb-2">
          <div className="col-5">
            <label htmlFor="code" className="form-label">
              Postal code
            </label>
            <input
              id="code"
              type="text"
              className="form-control"
              name="code"
              defaultValue={address.postalCode}
              disabled
            />
          </div>
          <div className="col-7">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              id="city"
              type="text"
              className="form-control"
              name="city"
              defaultValue={address.city}
              disabled
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            id="address"
            type="text"
            className="form-control"
            name="address"
            defaultValue={address.address}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="promocode" className="form-label">
            Promocode
          </label>
          <input
            id="promocode"
            type="text"
            className="form-control"
            name="promocode"
            placeholder="enter goodstore"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-3">
          <input
            id="userId"
            type="hidden"
            className="form-control"
            name="userId"
            defaultValue={id}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <div className="btn-group ">
            <span className="btn btn-primary active">Total: </span>
            <span
              className={`btn  ${
                isPromocode
                  ? 'btn-outline-danger text-decoration-line-through fw-light'
                  : 'fw-bold btn-outline-primary'
              }`}>
              {cartSum}$
            </span>
            {isPromocode && (
              <span className="btn btn-outline-primary fw-bold">{discountSum.toFixed(2)}$</span>
            )}
          </div>
          <div>
            <div className="btn-group">
              <Link to="/cart" className="btn btn-outline-primary">
                back
              </Link>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </>
                ) : (
                  'Send'
                )}
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default FormOrder;
