const seedData = [
  {
    src: "../../components/images/cars/challenger.jpg",
    likes: 0,
    id: 0,
    comments: [],
  },
  {
    src: "../../components/images/cars/continental.jpg",
    likes: 0,
    id: 1,
    comments: [],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  loadInitialData();
});

const loadInitialData = () => {
  const localStoragePosts = localStorage.getItem("posts");
  if (localStoragePosts === null) {
    localStorage.setItem("posts", JSON.stringify(seedData));
  }

  const data = JSON.parse(localStorage.getItem("posts"));
  data.forEach(addElement);
};

const addLikeForId = (id) => {
  const likesCounter = document.getElementById("likes-" + id);
  const posts = JSON.parse(localStorage.getItem("posts"));
  const currentElement = posts.find((element) => element.id === id);
  currentElement.likes = currentElement.likes + 1;
  localStorage.setItem("posts", JSON.stringify(posts));
  likesCounter.innerHTML = "Likes: " + currentElement.likes;
};

const addElement = ({ src, likes, id, comments }) => {
  const container = document.getElementById("insta-container");
  const elementContainer = document.createElement("div");
  elementContainer.classList.add("post");
  elementContainer.setAttribute("id", "post-" + id);
  const image = document.createElement("img");
  image.classList.add("post-image");
  image.setAttribute("src", src);
  const likesCounter = document.createElement("div");
  likesCounter.classList.add("likes");
  likesCounter.setAttribute("id", "likes-" + id);
  likesCounter.innerHTML = `Likes: ${likes || 0}`;
  const likeButton = document.createElement("img");
  likeButton.classList.add("like-button");
  likeButton.addEventListener("click", () => addLikeForId(id));
  likeButton.setAttribute("src", "../../components/images/like.png");
  likeButton.setAttribute("width", "50px");
  const likesContainer = document.createElement("div");
  likesContainer.classList.add("likes-container");
  likesContainer.appendChild(likesCounter);
  likesContainer.appendChild(likeButton);
  const form = document.createElement("form");
  form.classList.add("comments-form");
  const commentInput = document.createElement("input");
  commentInput.id = "comment-input-" + id;
  commentInput.type = "text";
  commentInput.placeholder = "Vnesete komentar...";
  commentInput.required = true;
  commentInput.classList.add("comments-input");
  const commentsSubmitButton = document.createElement("button");
  commentsSubmitButton.type = "submit";
  commentsSubmitButton.innerHTML = "Submit";
  form.appendChild(commentInput);
  form.appendChild(commentsSubmitButton);

  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments-container");

  comments.forEach((c) => {
    addComment(c, commentsContainer);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const comment = document.getElementById("comment-input-" + id).value;
    const posts = JSON.parse(localStorage.getItem("posts"));
    posts.find((p) => p.id === id).comments.push(comment);
    localStorage.setItem("posts", JSON.stringify(posts));
    addComment(comment, commentsContainer);
    commentInput.value = "";
  });

  elementContainer.appendChild(image);
  elementContainer.appendChild(likesContainer);
  elementContainer.appendChild(form);
  elementContainer.appendChild(commentsContainer);
  container.appendChild(elementContainer);
  return { src, likes, id, comments };
};

const fileInput = document.getElementById("uploaded-image");
const fr = new FileReader();

fr.onload = (e) => {
  const src = e.target.result;
  const posts = JSON.parse(localStorage.getItem("posts"));
  const newElement = addElement({
    src,
    likes: 0,
    id: posts.length,
    comments: [],
  });
  posts.push(newElement);
  localStorage.setItem("posts", JSON.stringify(posts));
};

const uploadImage = () => {
  fr.readAsDataURL(fileInput.files[0]);
};

const addComment = (c, commentsContainer) => {
  const commentParagraph = document.createElement("p");
  commentParagraph.innerHTML = c;
  const deleteButton = document.createElement("div");
  deleteButton.innerHTML = "X";
  deleteButton.addEventListener("click", () => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    const newPosts = posts.map((p) => {
      p.comments = p.comments.filter((com) => com != c);
      return p;
    });
    deleteButton.parentElement.remove();
    localStorage.setItem("posts", JSON.stringify(newPosts));
  });
  commentParagraph.appendChild(deleteButton);
  commentsContainer.appendChild(commentParagraph);
};
