import React from 'react';

export default function NavBar({ flash }) {
  console.log(flash);
  const loginHandler = (e) => {
    e.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
  };

  return (
    <div>
      <nav
        className="navbar navbar-dark bg-primary"
        style={{
          padding: '10px', marginTop: '20px', borderRadius: '10px', backgroundColor: 'blue',
        }}
      >
        <a className="navbar-brand">FlashCards</a>
        <form onSubmit={loginHandler} className="form-inline" style={{ display: 'flex' }}>
          <input name="name" className="form-control mr-sm-2" type="search" placeholder="Login" aria-label="Search" />
          <button type="submit" className="btn btn-info">Submit</button>
        </form>
      </nav>
    </div>
  );
}
