const app = require("./server");

// Set Variable called port according to "development" / "production"
if (process.env.NODE_ENV === "production") {
  app.set("port", process.env.PORT || 80);
} else {
  app.set("port", 8080);
}

app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
