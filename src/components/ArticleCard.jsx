export const ArticleCard = ({
  article_id,
  title,
  topic,
  author,
  created_at,
  article_img_url,
}) => {
  return (
    <article key={article_id}>
      <p key={created_at}>Date Posted: {created_at}</p>

      <img src={article_img_url} alt="" key={article_img_url} />
      <p key={title}>Title: {title}</p>
      <p key={author}>Author: {author}</p>
      <button>View more details</button>
    </article>
  );
};
