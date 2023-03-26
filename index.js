const hash = window.location.hash.replace("#", "")

// const message = atob(hash.replace("#", ""));

const message = decodeURIComponent(atob(hash));

if(message){
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("#message-sent").classList.add("hide");
  document.querySelector("#message-received").classList.remove("hide");
  document.querySelector("h1").innerHTML = `<span>${message}</span>`;
}

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");
  const input = document.querySelector("#message-input");
  // const encrypted = btoa(input.value);

  const encrypted = btoa(encodeURIComponent(input.value));
  const linkInput = document.querySelector("#link-input")
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
