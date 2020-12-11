const pageable = createPageable(list, 2, 6);

console.log(pageable)

const paginator = createPaginator(pageable)

console.log(paginator)
