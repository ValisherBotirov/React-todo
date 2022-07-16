import React, { useState, useRef } from "react";
import Counter from "./components2/Counter.jsx";
import ToogleText from "./components2/ToogleText.jsx";
import InputValue from "./components2/InputValue.jsx";
import "./style.css";
import TableHead from "./components2/TableHead.jsx";
import TableItem from "./components2/TableItem.jsx";
import PostForm from "./components2/PostForm.jsx";
import MyInput from "./components2/MyInput.jsx";
import MySelect from "./components2/MySelect.jsx";
import Modal from "./components2/UI/modal/Modal.jsx";
// import API from "./components2/API.jsx";
import Lorem from "./components2/lorem/Lorem.jsx";
import Slider from "./components2/Slider/Slider.jsx";

function App2() {
  const [posts, setPosts] = useState([
    { name: "React.js", id: "1", stack: "Fronted" },
    { name: "C#", id: "2", stack: "BackEnd" },
    { name: "JavaScript", id: "3", stack: "FullStack" },
    { name: "Python", id: "4", stack: "Machine" },
  ]);
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  const [title, setTitle] = useState("");
  const getPostFormTitle = (title) => {
    setTitle(title);
  };

  const addPost = (newPost) => {
    title ? setPosts([...posts, newPost]) : alert("Kategoriyalari to'ldiring");
  };

  const removePost = (post) => {
    console.log(post);
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  const getSelectValue = (sort) => {
    setSelect(sort);
    console.log(sort);
    // setPosts([...posts]).sort((a, b) => a[sort].localeCompare(b[sort]));
  };

  const getSearchValue = (e) => {
    setSearch(e.target.value);
    if (search.length) {
      return setPosts(
        posts.filter((val) =>
          val.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      return setPosts([...posts]);
    }
  };

  return (
    <>
      <div className="app w-50 mx-auto">
        <button className="btn btn-primary" onClick={() => setModal(true)}>
          Add Posts
        </button>
        <Modal modal={modal} setModal={setModal}>
          <PostForm
            getSelectValue={getSelectValue}
            handlePost={addPost}
            setModal={setModal}
            getPostFormTitle={getPostFormTitle}
          />
        </Modal>
        <div className="d-flex justify-content-between my-2">
          <MyInput getSearchValue={getSearchValue} value={search} />
          <MySelect
            getSelectValue={getSelectValue}
            defaultValue={"Sort by"}
            options={[
              { value: "program", name: "Programming" },
              { value: "stack", name: "Stack" },
            ]}
          />
        </div>
        <table className="table table-striped">
          <TableHead />
          <tbody>
            {posts.map((post, index) => (
              <TableItem
                post={post}
                key={post.id}
                number={index + 1}
                removePost={removePost}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-80 m-auto  useApi ">
        {/* <API /> */}
        <Lorem />
        {/* <Slider /> */}
      </div>
    </>
  );
}

export default App2;
