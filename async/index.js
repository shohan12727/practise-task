const promise1 = Promise.resolve("🍎 Apple ready");
const promise2 = new Promise(resolve => setTimeout(() => resolve("🍌 Banana ready"), 2000));
const promise3 = Promise.resolve("🍇 Grapes ready");

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results);
    // ["🍎 Apple ready", "🍌 Banana ready", "🍇 Grapes ready"]
  })
  .catch(error => {
    console.error(error);
  });
