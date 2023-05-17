import React from 'react';

const StoreDescription = () => {
  return (
    <div className="wrapper">
    <div className="card my-2 border-0 rounded-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 ">
            <div className="store-details">
              <div className="bg-white">
                <h2 className="h3 text-align-left">Seth's Store</h2>
                <div>
                  <button className="bg-danger text-white text-decoration  d-flex justify-content-center border-0 p-2 px-4 rounded-pill ">
                    Reviews
                  </button>{' '}
                  <br />
                </div>
                <button className="bg-danger text-white text-decoration  d-flex justify-content-center border-0 p-2 px-4 rounded-pill ">
                  {' '}
                  Follow{' '}
                </button>
                <div className="">Opened</div>
              </div>
              <hr />
              <div>
                <h4>Store Description</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  laudantium veniam iure harum, alias non doloribus quisquam
                  optio esse cum ex aperiam numquam doloremque at?
                </p>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="rectangle"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StoreDescription;
