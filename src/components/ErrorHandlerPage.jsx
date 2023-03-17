export const ErrorHandlerPage = ({ articlesError, setError, articleError }) => {
  return (
    <h1 className="center">
      {articlesError || articleError
        ? articlesError || articleError
        : "Path not found"}
    </h1>
  );
};
