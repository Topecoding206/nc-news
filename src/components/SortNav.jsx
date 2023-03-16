export const SortNav = ({ setQuerySort, setQueryOrder, hideSort }) => {
  return (
    <div className="sort-container">
      <div className={`${hideSort}`}>
        <p>Sort Articles By</p>
        <select name="" onChange={(event) => setQuerySort(event.target.value)}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
      </div>
      <div>
        <p>Orders</p>
        <select name="" onChange={(event) => setQueryOrder(event.target.value)}>
          <option value="DESC">Descending order</option>
          <option value="ASC">Ascending order</option>
        </select>
      </div>
    </div>
  );
};
