const title = document.title;
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    document.title = title + "!".repeat(i);
  }, 500 * i);
}
