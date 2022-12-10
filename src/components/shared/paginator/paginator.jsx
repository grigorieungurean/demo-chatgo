import React, { useState } from "react";

import style from './paginator.module.css';

const Paginator = ({ totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {

  const pagesCount = Math.ceil(totalItemsCount / pageSize);

  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const RightPortionPageNumber = portionNumber * portionSize;

  // useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage]);

  return (
    <div className={style.pageList}>
      { portionNumber > 1 && <span onClick={() => { setPortionNumber(portionNumber - 1) }} className={style.pageItem}>назад</span> }
      {pages.filter(p => p >= leftPortionPageNumber && p <= RightPortionPageNumber).map(page => <span onClick={(e) => { onPageChanged(page) }} className={`${currentPage === page && style.selectedPage} ${style.pageItem}`}> {page} </span>)}
      { portionCount > portionNumber && <span onClick={() => { setPortionNumber(portionNumber + 1) }} className={style.pageItem}>вперед</span> }
    </div>
  );
};

export default Paginator;