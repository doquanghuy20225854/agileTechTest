import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { getPosts, deletePost, createPost } from "../../api/posts";
import { Post } from "../../types/post";
import { removeToken } from "../../utils/token";
import Logo from "../../assets/logo.svg";

const Profile = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTitle, setSearchTitle] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", description: "", tags: "" });

  const fetchPosts = async (page: number, title: string) => {
    try {
      const params: any = { page };
      if (title) params.title = title;
      const response = await getPosts(params);
      setPosts(response.posts);
      setTotalPages(response.total_pages);
    } catch (error: any) {
      console.error("Failed to fetch posts:", error);
      if (error.response) {
        console.error("Response status:", error.response.status);
        console.error("Response data:", error.response.data);
      }
    }
  };

  useEffect(() => {
    fetchPosts(currentPage, searchTitle);
  }, [currentPage, searchTitle]);

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await deletePost(id);
        fetchPosts(currentPage, searchTitle);
      } catch (error) {
        console.error("Failed to delete post:", error);
      }
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchPosts(1, searchTitle);
  };

  const handleAddNew = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost({
        title: newPost.title,
        description: newPost.description,
        tags: newPost.tags.split(",").map((t) => t.trim()).filter(Boolean),
      });
      setShowAddForm(false);
      setNewPost({ title: "", description: "", tags: "" });
      fetchPosts(currentPage, searchTitle);
    } catch (error: any) {
      alert("Failed to add post");
      console.error("Create post error:", error);
      if (error.response) {
        console.error("Response status:", error.response.status);
        console.error("Response data:", error.response.data);
      }
    }
  };

  return (
    <div className={styles.profilePage}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
          <a href="/profile" className={styles.active}>
            Posts
          </a>
          <a href="#" onClick={handleLogout}>
            Logout
          </a>
        </nav>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.toolbar}>
          <button className={styles.addNewBtn} onClick={() => setShowAddForm(true)}>Add new</button>
          <form className={styles.filters} onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Title"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
            <select>
              <option value="">Tags</option>
            </select>
          </form>
        </div>

        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={post.id}>
                  <td>{index + 1 + (currentPage - 1) * 10}</td>
                  <td>{post.title}</td>
                  <td>{post.description}</td>
                  <td>{post.tags.join(", ")}</td>
                  <td className={styles.actions}>
                    <button className={styles.actionBtn}>✎</button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className={styles.actionBtn}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            &lt;
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            &gt;
          </button>
        </div>

        {showAddForm && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <h3>Add New Post</h3>
              <form onSubmit={handleAddNew}>
                <input
                  type="text"
                  placeholder="Title"
                  value={newPost.title}
                  onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newPost.description}
                  onChange={e => setNewPost({ ...newPost, description: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Tags (comma separated)"
                  value={newPost.tags}
                  onChange={e => setNewPost({ ...newPost, tags: e.target.value })}
                />
                <div className={styles.modalActions}>
                  <button type="submit">Add</button>
                  <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile; 