function createPageable(list = [], page = 0, elementsPerPage = 0) {
  let index = 0
  let totalElements = list.length
  // find total pages
  let totalPages = Math.floor(totalElements / elementsPerPage)
  if (totalElements % elementsPerPage > 0) {
    totalPages++
  }
  // retornable
  let pageable = {
    elements: [],
    totalPages: 0,
    elementsPerPage: 0,
    currentPage: 0,
  }
  // calculate index
  index = (elementsPerPage * page)
  // set page elements
  let elements = list.slice(index, (index + elementsPerPage))

  // fill pageable
  pageable.elements = elements
  pageable.totalPages = totalPages
  pageable.elementsPerPage = elementsPerPage
  pageable.currentPage = page

  return pageable
}
