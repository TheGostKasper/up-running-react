import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// To be removed
export interface IPayload {
  page: number;
  limit: number;
  count?: number;
}

export interface IPagination<T> {
  page: number;
  limit: number;
  count?: number;
  data: T;
}

const Pagination = ({ page, limit, count, onPaginationChange }: any) => {
  return (
    <div className="paginator-container">
      <button
        className="btn"
        disabled={page === 1}
        onClick={() => onPaginationChange({ page: page - 1, limit })}
      >
        Prev
      </button>
      <button
        className="ml-2 btn"
        disabled={count <= limit * page}
        onClick={() => onPaginationChange({ page: page + 1, limit })}
      >
        Next
      </button>

      {/* <span>Items per page</span>
      <select
        className="custom-select"
        value={limit}
        onChange={({ target: { value } }) =>
          onPaginationChange({ limit: parseInt(value), page: 1 })
        }
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
      <span>
        {1 + (page - 1) * limit}-{(page - 1) * limit + limit} of {count}
      </span>

      <IoIosArrowBack
        onClick={() => onPaginationChange({ page: page - 1, limit })}
      />
      <IoIosArrowForward
        onClick={() => onPaginationChange({ page: page + 1, limit })}
      /> */}
    </div>
  );
};

export default Pagination;
