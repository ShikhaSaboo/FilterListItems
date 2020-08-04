module.exports = (dataList, filterValue, attribute = 'id') =>
  dataList.filter(data => {
    if(typeof data === 'object' && data !== null) return data[attribute] === filterValue;
    return  data === filterValue;
  });
