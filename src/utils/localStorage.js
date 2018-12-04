export const saveStateToStorage = post => {
  try {
    const postJSON = JSON.stringify(post);
    localStorage.setItem("post", postJSON);
  } catch (e) {
    return;
  }
};

export const loadStateFromStorage = post => {
  try {
    const postJSON = localStorage.getItem("post");
    const post = JSON.parse(postJSON);
    if (!post) return;
    return post;
  } catch (e) {
    return;
  }
};
