import { useState } from "react";

import './index.css';

const usePagination = <T,>(items: T[], initialPage: number = 1, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const shouldRenderControls = items.length > itemsPerPage;

  const paginationControls = (
    <div className="pagination">
      {shouldRenderControls && Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) =>
        <div
          key={'pagination-' + i}
          className={`pagination-item ${currentPage === i + 1 ? 'active' : ''}`}
          onClick={() => setCurrentPage(i + 1)}
        />
      )}
    </div>
  );

  return { paginationControls, currentItems, currentPage };
}

export default usePagination;