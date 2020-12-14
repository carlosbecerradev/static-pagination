// params
const page = 0;
const elementsPerPage = 5
const allData = list.slice(0, 6)
let pageable = createPageable(allData, page, elementsPerPage)
let paginator = createPaginator(pageable)

function changePage(indexPage) {
  if (pageable.currentPage != indexPage) {
    pageable = createPageable(allData, indexPage, elementsPerPage)
    paginator = createPaginator(pageable)
    console.log(pageable)
    console.log(paginator)
    show()
  }
}

function show() {
  function dataTemplate(pageable) {
    let result = ""

    for (let i = 0; i < pageable.elements.length; i++) {
      // console.log(pageable.elements[i])
      result += (setTemplate(pageable.elements[i]))
    }

    function setTemplate(element) {
      return `
      <div>
        <div>${element.id}</div>
        <div>${element.name}</div>
        <div>${element.item_category.name}</div>
        <div>${element.state}</div>
      </div>`
    }

    return result
  }

  function paginatorTemplate(paginator) {
    let result = ""

    for (let i = 0; i < paginator.length; i++) {
      // console.log(pageable.elements[i])
      result += (setTemplate(paginator[i]))
    }
    // pagination.innerHTML = JSON.stringify(paginator)
    function setTemplate(element) {
      if (element.active == true) {
        return `
                <div>
                  <div style="color: red;" class="active" onclick="changePage(${element.index})">${element.page}</div>
                </div>
                `
      }
      return `
              <div>
                <div onclick="changePage(${element.index})">${element.page}</div>
              </div>
              `
    }

    return result
  }
  data.innerHTML = dataTemplate(pageable)
  pagination.innerHTML = paginatorTemplate(paginator)
}

show()
