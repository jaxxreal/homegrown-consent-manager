import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PaginationUI from '@material-ui/lab/Pagination';

import { selectCurrentPage, setCurrentPage, selectNumberOfPages } from './consentListSlice';

export const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const numberOfPages = useSelector(selectNumberOfPages);

  return (
    <PaginationUI
      count={numberOfPages}
      page={currentPage}
      onChange={(ev, page) => dispatch(setCurrentPage(page))}
    />
  );
}