const inject = (items,sections) => {
  let [section1,section2] = sections;
  let {"content":item1,"index":index1} = section1;
  let {"content":item2,"index":index2} = section2;

  items.splice(index1,0,item1);
  items.splice(3,0,item2);

  console.log(index1,index2);

  return items;
}
export { inject };
