function getClass({
  b='',
  el='',
  m='',
  add='',
}) {
  let elementClass = false;

  if (el) {
    elementClass = `${b}__${el}`;
    b = '';
  }

  if (elementClass && m) {
    m = `${elementClass}_${m}`;
  } else if (b && m) {
    m = `${b}_${m}`;
  }

  return [b, elementClass, m, add]
    .filter(filteredClass => filteredClass)
    .join(' ');
}

export default getClass;
