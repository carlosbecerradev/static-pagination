function createPaginator(pageable) {
  let paginator = []
  let desde, hasta
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

  return paginator
}
