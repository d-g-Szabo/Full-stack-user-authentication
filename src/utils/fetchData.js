export async function fetchData() {
  const result = await fetch("https://dummyjson.com/carts");
  const data = await result.json();
  const wrangledData = data.carts;
  return wrangledData;
}

export async function fetchDynamicData(id) {
  const result = await fetch("https://dummyjson.com/carts/" + id);
  const data = await result.json();
  const wrangledData = data.products;
  return wrangledData;
}

fetchDynamicData(1);

fetchData();
console.log(fetchData());
