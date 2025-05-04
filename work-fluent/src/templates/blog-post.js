import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const PostContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`;

const BlogPost = ({ data }) => {
  const post = data.contentfulBlogPost;
  return (
    <PostContainer>
      <h1>{post.title}</h1>
      <small>{post.publishDate}</small>
      <div dangerouslySetInnerHTML={{ __html: post.body.raw }} />
    </PostContainer>
  );
};

// Use useStaticQuery to fetch data
const query = graphql`
  query BlogPostQuery {
    allContentfulBlogPost {
      nodes {
        title
        body {
          raw
        }
      }
    }
  }
`;

export const BlogPostWithQuery = () => {
  const data = useStaticQuery(query);
  return <BlogPost data={data} />;
};

export default BlogPostWithQuery;