import React from "react";

const BooksList = ({
  isloading,
  bookss,
  isloadings,
  dispatch,
  deletbook,
  getbookId,
  itemId
}) => {
  // const dispatch=useDispatch()
  return (
    <div>
      <h2>Books List</h2>
      {isloading ? (
        "loading..."
      ) : (
        <ul className="list-group">
          {bookss &&
            bookss.map((item) => (
              <li
                className="list-group-item d-flex  justify-content-between align-items-center"
                key={item.id}
              >
                <div>{item.title}</div>
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    // onClick={()=>getbookId(item.id)}
                    className="btn btn-primary"
                    onClick={()=>itemId(item.id)}
                  >
                    Read{item.id}
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    disabled={!isloadings}
                    onClick={() => dispatch(deletbook(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default BooksList;
