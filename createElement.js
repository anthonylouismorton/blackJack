function _createElement(tag, parent, text){
  const element = document.createElement(tag);
  parentElem = document.getElementById(`${parent}`)
  console.log(parent)
  parentElem.appendChild(element);
  if(text){
    element.textContent = text;
  }
  return element;
  }