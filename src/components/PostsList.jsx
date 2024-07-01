import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function bodyChangeHandler(e) {
    setEnteredBody(e.target.value);
  }

  function authorChangedHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  function hideModalHandler(e) {
    setModalIsVisible(false);
  }

  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangedHandler}
          />
        </Modal>
      ) : false}
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="N'importe quel texte" />
      </ul>
    </>
  );
}

export default PostsList;
