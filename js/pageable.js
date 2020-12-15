// Pageable allows from a list to create pages
function createPageable(list = [], indexOfPage = 0, elementsPerPage = 0) {
  let totalElements = calculateTotalElements(list)
  let totalPages = calculateTotalPages(totalElements, elementsPerPage)
  let elements = sliceElements(indexOfPage, elementsPerPage)

  return {
    elements: elements,
    totalPages: totalPages,
    elementsPerPage: elementsPerPage,
    currentPage: indexOfPage,
  }
}

function calculateTotalElements(list) {
  return list.length
}

function calculateTotalPages(totalElements, elementsPerPage) {
  let totalPages = Math.floor(totalElements / elementsPerPage)
  return totalElements % elementsPerPage > 0 ? totalPages++ : totalPages
}

function sliceElements(indexOfPage, elementsPerPage) {
  let from = (elementsPerPage * indexOfPage)
  return list.slice(from, (from + elementsPerPage))
}
