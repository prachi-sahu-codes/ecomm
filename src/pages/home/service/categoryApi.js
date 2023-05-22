
export const getData = async (callback) => {
  try {
    const res = await fetch("/api/categories");
    const dataFetched = await res.json();
    callback(dataFetched?.categories);
  } catch (e) {
    console.error("Error:", e);
  }
};
