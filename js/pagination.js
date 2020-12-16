// Use a pagination object {elementsPerPage: 1, data: []}
// It needs two div tags with 'id="data"' and 'id="pagination"'
function createPagination (indexPage = 0) {
  let pageable = createPageable(pagination.data, indexPage, pagination.elementsPerPage)
  let paginator = createPaginator(pageable)

  document.getElementById('data').innerHTML = createDataTemplate(pageable)
  document.getElementById('paginator').innerHTML = createPaginatorTemplate(paginator)
}

const createDataTemplate = (pageable) => {
  let result = ""

  for (let i = 0; i < pageable.elements.length; i++) {
    result += (setTemplate(pageable.elements[i]))
  }

  function setTemplate(element) {
    return `
    <div class="grid grid-cols-4 text-center py-2">
      <div>${element.id}</div>
      <div>${element.name}</div>
      <div>${element.item_category.name}</div>
      <div>${element.state}</div>
    </div>`
  }

  return result
}

const createPaginatorTemplate = (paginator) => {
  let result = ""

  for (let i = 0; i < paginator.length; i++) {
    result += (setTemplate(paginator[i]))
  }

  function setTemplate(element) {
    if (element.active == true) {
      return `
              <div>
                <button class="text-green-400" onclick="createPagination(${element.index})" disabled>${element.page}</button>
              </div>
              `
    }
    return `
            <div>
              <button onclick="createPagination(${element.index})">${element.page}</button>
            </div>
            `
  }

  return result
}
