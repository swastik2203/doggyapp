import React from "react";
import Layout from "../components/Layout/Layout";
import { useSearch } from "../context/Search";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [values] = useSearch();
  const baseURL = process.env.REACT_APP_API;

  return (
    <Layout>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>

          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "17rem" }} key={p._id}>
                <img
                  src={`${baseURL}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top "
                  height={"250px"}
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {" "}
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> ₹ {p.price}</p>
                  <div className="d-flex">
                    <button
                      class="btn btn-primary ms-1 "
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button class="btn btn-secondary ms-1">ADD TO CART</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
