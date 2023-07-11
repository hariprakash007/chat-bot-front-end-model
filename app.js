function talk() {
  let know = {
    "Who are you": "Hi, i am hari Prakash ",
    "How are you": "Fine :)",
    "what can i do for you": "Please give me peace !",
    "what do you do?": "I code ",
    ok: "Thank you so much for staying ",
    Bye: "Okay da ! will meet soon...."
  };
  let user = document.getElementById("userBox").value;
  document.getElementById("chatlog").innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById("chatlog").innerHTML = know[user] + "<br>";
  } else {
    document.getElementById("chatlog").innerHTML =
      "Sorry, I Can't understand <br>";
  }
}
