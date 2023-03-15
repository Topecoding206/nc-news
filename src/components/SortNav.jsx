export const SortNav = () => {
  return (
    <div className="sort-container">
      <div>
        <p>Sort Articles By</p>
        <select name="" id="">
          <option value="created_at">Date</option>
          <option value="title">title</option>
          <option value="topic">topic</option>
          <option value="author">author</option>
        </select>
      </div>
      <div>
        <p>Orders</p>
        <select name="" id="">
          <option value="DESC">Descending order</option>
          <option value="ASC">Ascending order</option>
        </select>
      </div>
    </div>
  );
};
