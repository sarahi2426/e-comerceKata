const SearchBar = (props) => {
  const { text, setText } = props

  const handleSubmit = (e) => {
    e.preventDefault()
    setText(e.target.querySelector('input').value)
  }

  return (
    <nav className='navbar'>
      <div className='container-fluid justify-content-evenly'>
        <form onSubmit={handleSubmit} className='d-flex' role='search'>

          <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className='btn btn-outline-success' type='submit'>
            search
          </button>
        </form>
      </div>
    </nav>
  )
}

export default SearchBar
