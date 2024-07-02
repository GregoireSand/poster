import { useState } from "react";
import PostList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler(e) {
    setModalIsVisible(true);
  }

  function hideModalHandler(e) {
    setModalIsVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;

