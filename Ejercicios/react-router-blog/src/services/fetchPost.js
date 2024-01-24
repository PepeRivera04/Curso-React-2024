export async function fetchPost(URL, setPosts) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    setPosts(data);
  } catch (er) {
    console.error(er);
  }
}
