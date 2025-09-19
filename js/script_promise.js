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

// 003a Pizza order promise

function makePizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 0.3; // 70% chance pizza is ready
      if (success) {
        resolve("🍕 Your pizza is ready");
      } else {
        reject("🔥 Oh no, your pizza is burned");
      }
    }, 3000);
  });
}

// Test it
makePizza()
  .then((result) => {
    console.log("✅ Success:", result);
  })
  .catch((error) => {
    console.log("❌ Failure:", error);
  });

// There is a difference in style and use-case between:

// resolve("some value")

// resolve(() => console.log("do something"))

// 🔹 1. Resolving with a value
// resolve("Pizza is ready");

// The promise gives you a plain result.

// You handle that result in .then:

// makePizza()
//   .then(msg => console.log(msg))
//   .catch(err => console.log(err));

// ✅ This is the most common way because promises are meant to represent data that arrives later (like from a server, a file, or an API).

// 🔹 2. Resolving with a function
// resolve(() => console.log("Pizza is ready"));

// The promise gives you a function.

// You then decide when (and if) to call it:

// makePizza()
//   .then(fn => fn())    // you explicitly call the function
//   .catch(fn => fn());

// This is less common, but useful if:

// You want the consumer of the promise to control the execution timing.

// You want to defer an action, not just deliver data.

// Example: give back an API or callback instead of just a value.

// 🔹 Analogy

// Value style: Like a delivery guy handing you a pizza box. It’s yours now.

// Function style: Like the delivery guy handing you the oven remote — you press the button when you’re ready to cook.

// 👉 99% of the time in real-world code you’ll use the value style.
// The function style is more of an experiment or special case.

// 003b Fake API Call with Promises (value style)

function fetchUserData() {
  return new Promise((resolve, reject) => {
    console.log("📡 Fetching user data...");

    setTimeout(() => {
      let success = Math.random() > 0.2; // 80% chance success
      if (success) {
        resolve({ id: 1, name: "Alice", age: 25 }); // send back DATA
      } else {
        reject("⚠️ Network error: could not fetch user");
      }
    }, 2000);
  });
}

// Using the promise
fetchUserData()
  .then((user) => {
    console.log("✅ User loaded:", user.name, user.age);
  })
  .catch((error) => {
    console.log("❌ Error:", error);
  });

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
