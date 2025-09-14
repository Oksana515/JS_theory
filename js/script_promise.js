// Promises

// 001 Promise that resolves after 2 seconds and logs "Done!"

const delayPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Done!");
  }, 2000); // 2000 ms = 2 seconds
});

delayPromise.then((result) => console.log(result));

// 002

const myPromise = new Promise((resolve, reject) => {
  let variable = 2;
  if (variable === 2) {
    resolve("✅ Success!");
  }
  if (variable === 1) {
    reject("❌ Something went wrong.");
  }
});

myPromise
  .then((result) => {
    console.log("Then block got:", result);
  })
  .catch((error) => {
    console.log("Catch block got:", error);
  });

// .then(result => { ... }) → the result here is exactly what you passed into resolve(...).
// .catch(error => { ... }) → the error here is exactly what you passed into reject(...).

// 003 Cheking if the number is even

function checkEven(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(() => console.log(`${num} is even ✅`));
    } else {
      reject(() => console.log(`${num} is odd ❌`));
    }
  });
}

// Usage
checkEven(4)
  .then((fn) => fn()) // calls the function from resolve
  .catch((fn) => fn()); // calls the function from reject

checkEven(7)
  .then((fn) => fn())
  .catch((fn) => fn());

// 004 Chaining

// Each .then() can return a value, and that value will be passed into the next .then() in the chain.
// If a .then() throws or returns a rejected promise, the chain jumps to .catch().

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: "Alice" };
      resolve(user); // instead of "5", we pass real data
    }, 2000); // simulate 2s delay
  });
}

fetchUser()
  .then((user) => {
    console.log("User loaded:", user);
    return user.name;
  })
  .then((name) => {
    console.log("Welcome,", name);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

// Simulated Login with Promises

function login(username, password) {
  return new Promise((resolve, reject) => {
    console.log("Checking credentials...");

    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve({ status: "success", user: username });
      } else {
        reject({ status: "error", message: "Invalid credentials" });
      }
    }, 2000); // pretend server delay
  });
}

// Try logging in

login("admin", "1234")
  .then((result) => {
    console.log("✅ Login successful:", result);
    return `Welcome, ${result.user}!`;
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("❌ Login failed:", error.message);
  })
  .finally(() => {
    console.log("Login attempt finished.");
  });
