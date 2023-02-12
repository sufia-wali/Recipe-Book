const paginate = (items) =>{
  const itemsPerPage = 10
  return items.slice(0,0+itemsPerPage)
}

export default paginate;