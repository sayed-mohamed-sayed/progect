import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import BookInfo from "./BookInfo";
import BooksList from "./BooksList";

import "./book.css";
import { useEffect } from "react";
import { getbooks, deletbook } from "../../store/bookslice";
import { useState } from "react";
const PostContainer = () => {
  const { isloading, books } = useSelector((state) => state.books);
  const { isloadings } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getbooks());
  }, [dispatch]);


  const [selectbook ,setselectbooks]=useState({})

const itemId=(id)=>{
  
  const selectbook=books.find((it)=>it.id===id)
  setselectbooks((prev)=>{
return{...prev ,...selectbook}

  });
}
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isloading={isloading}
            bookss={books}
            isloadings={isloadings}
            deletbook={deletbook}
            dispatch={dispatch}
            itemId={itemId}
          />
        </div>
        <div className="col side-line">
          <BookInfo info={selectbook} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
