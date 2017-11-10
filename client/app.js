var queryHelper = require("../server/db/query_helper.js");

const initialiseReplyButton = function(post) {
  if (post.title) { var parent = document.getElementById("content-div") }
  if (!post.title) { var parent = document.getElementById("postDiv") }
  console.log(parent);
}

const createThread = function() {
  var name = document.getElementById("thread-form-name-input").value;
  var title = document.getElementById("thread-form-title-input").value;
  var text = document.getElementById("thread-form-comment-input").value;
  console.log(name, title, text);
  // queryHelper.all(function(result) {
  //   console.log(result);
  // })
  var post = {
    name: name,
    title: title,
    text: text,
    children: []
  }
  var content = document.getElementById("content-div");
  while (content.firstChild) { content.removeChild(content.firstChild) }
  var postDiv = document.createElement("div");
  postDiv.id = "post-div";
  var title = document.createElement("h4");
  title.id = "post-title";
  title.innerText = post.title;
  var hr = document.createElement("hr");
  hr.id = "hr";
  var name = document.createElement("p");
  name.id = "post-name";
  name.innerText = "submitted by " + post.name;
  var text = document.createElement("p");
  text.id = "post-text";
  text.innerText = post.text;
  var form = document.createElement("form");
  var submit = document.createElement("input");
  submit.type = "submit";
  submit.value = "reply";
  form.id = "reply-button"
  form.appendChild(submit);
  content.appendChild(postDiv);
  postDiv.appendChild(title);
  postDiv.appendChild(hr);
  postDiv.appendChild(name);
  postDiv.appendChild(text);
  postDiv.appendChild(form);
  form.addEventListener("submit", function() {
    initialiseReplyButton(post);
  })
}

const createThreadForm = function() {
  var content = document.getElementById("content-div");
  while (content.firstChild) { content.removeChild(content.firstChild) }

  var form = document.createElement("form");
  form.id = "thread-form";
  var formTitle = document.createElement("h4");
  formTitle.innerText = "start your thread here."
  formTitle.id = "form-title"

  var nameDiv = document.createElement("div");
  nameDiv.id = "name-div";
  var nameLabel = document.createElement("label");
  nameLabel.innerText = "name: "
  nameLabel.id = "thread-form-name-label";
  var nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "thread-form-name-input";
  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);

  var titleDiv = document.createElement("div");
  titleDiv.id = "title-div";
  var titleLabel = document.createElement("label");
  titleLabel.innerText = "title: "
  titleLabel.id = "thread-form-title-label";
  var titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "thread-form-title-input";
  titleDiv.appendChild(titleLabel);
  titleDiv.appendChild(titleInput);

  var commentDiv = document.createElement("div");
  commentDiv.id = "comment-div";
  var commentLabel = document.createElement("label");
  commentLabel.innerText = "comment: "
  commentLabel.id = "thread-form-comment-label";
  var commentInput = document.createElement("textarea");
  commentInput.type = "text";
  commentInput.id = "thread-form-comment-input";
  commentDiv.appendChild(commentLabel);
  commentDiv.appendChild(commentInput);


  var submit = document.createElement("input");
  submit.type = "submit";
  submit.id = document.createElement("form-submit");

  form.appendChild(formTitle);
  form.appendChild(nameDiv);
  form.appendChild(titleDiv);
  form.appendChild(commentDiv);
  form.appendChild(submit);
  content.appendChild(form);
  form.addEventListener("submit", createThread)
}

const initialiseStartButton = function() {
  let start = document.getElementById("start");
  start.addEventListener("click", createThreadForm);
}

window.addEventListener("DOMContentLoaded", function() {
  initialiseStartButton()
});
