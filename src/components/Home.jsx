import { Articles } from "./Articles";
export const Home = ({ queryOrder, querySort }) => {
  return (
    <main>
      <section className="home-container">
        <Articles queryOrder={queryOrder} querySort={querySort} />
      </section>
    </main>
  );
};
