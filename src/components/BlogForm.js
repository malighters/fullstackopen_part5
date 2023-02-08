const BlogForm = ({
    handleSubmit,
    handleTitleChange,
    handleAuthorChange, 
    handleUrlChange, 
    title, 
    author, 
    url}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
          title
            <input
            type="text"
            value={title}
            name="title"
            onChange={handleTitleChange}
          />
        </div>
        <div>
          author
            <input
            type="text"
            value={author}
            name="autor"
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          url
            <input
            type="text"
            value={url}
            name="url"
            onChange={handleUrlChange}
          />
        </div>
        <button type="submit">create</button>
      </form>
    )
}

export default BlogForm