import { graphql } from "gatsby";
import styled from "styled-components";

const PostContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`;

export const query = graphql`
  query($slug: String!) {
    contentfulInquiry(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM D, YYYY")
      body {
        raw
      }
    }
  }
`;

export default function BlogPost({ data }) {
  const post = data.contentfulInquiry;
  return (
    <PostContainer>
      <h1>{post.title}</h1>
      <small>{post.publishDate}</small>
      <div dangerouslySetInnerHTML={{ __html: post.body.raw }} />
    </PostContainer>
  );
}