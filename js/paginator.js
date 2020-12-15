// Returns an array with the available pages
function createPaginator(pageable) {
  let paginator = calculatePaginatorElements(pageable)
  addFirstOrLastElements(pageable, paginator)

  return paginator
}

function calculatePaginatorElements(pageable) {
  let desde = 0, hasta = 0, paginator = []

  if (pageable.totalPages <= pageable.elementsPerPage) {
    desde = 1
    hasta = pageable.totalPages
  } else {
    if (pageable.currentPage <= Math.floor(pageable.elementsPerPage / 2)) {
      desde = 1
      hasta = pageable.elementsPerPage
    } else if (pageable.currentPage >= pageable.totalPages - Math.floor(pageable.elementsPerPage / 2)) {
      desde = pageable.totalPages - pageable.elementsPerPage + 1
      hasta = pageable.elementsPerPage
    } else {
      desde = pageable.currentPage - Math.floor(pageable.elementsPerPage / 2)
      hasta = pageable.elementsPerPage
    }
  }

  for (let i = 0; i < hasta; i++) {
    paginator.push({ index: (desde + i) - 1, page: desde + i, active: pageable.currentPage == (desde + i) - 1 })
  }

  return paginator;
}

function addFirstOrLastElements(pageable, paginator) {
  if (pageable.totalPages > pageable.elementsPerPage && pageable.totalPages != 1) {
    if (paginator.some(object => object.index == 0)) {
      paginator.push({ index: pageable.totalPages - 1, page: pageable.totalPages, active: false })
    } else if (paginator.some(object => object.index == pageable.totalPages - 1)) {
      paginator.unshift({ index: 0, page: 1, active: false })
    } else {
      paginator.unshift({ index: 0, page: 1, active: false })
      paginator.push({ index: pageable.totalPages - 1, page: pageable.totalPages, active: false })
    }
  }
}
