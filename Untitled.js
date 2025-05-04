import { graphql, Link } from "gatsby";
import styled from "styled-components";

const BlogList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif; /* Like candycode */
`;

export const query = graphql`
  query {
    allContentfulInquiry(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM D, YYYY")
        body {
          raw
        }
      }
    }
  }
`;

export default function Blog({ data }) {
  const posts = data.allContentfulInquiry.nodes;
  return (
    <BlogList>
      {posts.map(post => (
        <article key={post.slug}>
          <h2>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <small>{post.publishDate}</small>
          <p>{post.body.raw.substring(0, 150)}...</p>
        </article>
      ))}
    </BlogList>
  );
}
