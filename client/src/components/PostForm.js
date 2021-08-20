import React from "react";
import { useMutation } from "@apollo/react-hooks";

import { useForm } from "../util/hooks";
// import { FETCH_POSTS_QUERY } from "../util/graphql";
import { CREATE_POST_MUTATION } from "../util/mutations";
import "../pages/styles.css"

function PostForm() {
  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    description: "",
  });

  const [addPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: {picture: "", description: values.description},
    // update(proxy, result) {
    //   const data = proxy.readQuery({
    //     query: FETCH_POSTS_QUERY,
    //   });
    //   data.getPosts = [result.data.createPost, ...data.getPosts];
    //   proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
    //   values.body = "";
    // },
  });

  function createPostCallback() {
    addPost();
    // window.location = "/";
  }

  return (
    <>
      <div className= "form-container" onSubmit={onSubmit}>
        <h2>Create a post:</h2>
        <div>
          <input
            className= "input-field"
            id="input"
            placeholder="Hello World!"
            name="description"
            onChange={onChange}
            value={values.description}
            // error={error ? true : false}
          />
          <button className="submit-button" type="submit" color="teal">
            Submit
          </button>
        </div>
      </div>
      {/* {error && (
        <div className="ui error message" style={{ marginBottom: 20 }}>
          <ul className="list">
            <li>{error.graphQLErrors[0].message}</li>
          </ul>
        </div>
      )} */}
    </>
  );
}

export default PostForm;
