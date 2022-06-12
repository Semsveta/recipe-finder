import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const ResipesLit = () => {
  const {
    state: { recipesList },
  } = useContext(GlobalContext);

  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;

  const slicedList = [...recipesList].slice(offset, offset + PER_PAGE);
  const currentPageList = slicedList.map((recipe, index) => {
    if (recipe) {
      return (
        <div
          className="card mb-3 recipeListCard"
          style={{ maxWidth: "80%" }}
          key={recipe.id}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={recipe.image} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
              </div>
              <Link to={`/recipe/:${recipe.id}`} className="btn btn-primary">
                Go to recipe
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return null;
  });
  const pageCount = Math.ceil(recipesList.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      {recipesList && (
        <dl className="library">
          <div className="pagination">
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
          {currentPageList}
        </dl>
      )}
    </div>
  );
};

export default ResipesLit;
