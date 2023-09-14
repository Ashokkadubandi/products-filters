import './index.css'

const FiltersGroup = props => {
  const renderSearchInput = () => {
    const {changeSearchInput, enterSearchInput, searchInput} = props
    const changingSearchInput = event => {
      changeSearchInput(event.target.value)
    }
    const enterKeySearch = event => {
      if (event.key === 'Enter') {
        enterSearchInput()
      }
    }

    return (
      <div className="search-inp">
        <input
          className="search-input"
          type="search"
          onChange={changingSearchInput}
          onKeyDown={enterKeySearch}
          value={searchInput}
          placeholder="Search"
        />
      </div>
    )
  }

  const renderRatingsGroup = () => {
    const {ratingsList, changeRatingId} = props

    return ratingsList.map(eachItem => {
      const {imageUrl, ratingId} = eachItem
      const onClickRatingId = () => {
        changeRatingId(eachItem.ratingId)
      }

      return (
        <li className="rating-link" onClick={onClickRatingId}>
          <img
            src={imageUrl}
            className="rating-image"
            alt={`rating ${ratingId}`}
          />
          <p className="and-up">& up</p>
        </li>
      )
    })
  }

  const renderFiltersGroup = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachItem => {
      const {changeCategoryId, categoryIdActive} = props
      const activeId = eachItem.categoryId === categoryIdActive
      const activeClassName = activeId
        ? 'category-active category-name'
        : 'category-name'

      const onClickCategoryItem = () => {
        changeCategoryId(eachItem.categoryId)
      }

      return (
        <li
          className="category-link"
          key={eachItem.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={activeClassName}>{eachItem.name}</p>
        </li>
      )
    })
  }

  const renderFiltersBtn = () => {
    const {filtersBtn} = props
    const onResetFilters = () => {
      filtersBtn()
    }

    return (
      <button type="button" className="filter" onClick={onResetFilters}>
        Clear Filters
      </button>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <h1>Filters Group</h1>
      <h1 className="group-details-head">Category</h1>
      {renderFiltersGroup()}
      <h1 className="group-details-head">Rating</h1>
      {renderRatingsGroup()}
      {renderFiltersBtn()}
    </div>
  )
}

export default FiltersGroup
