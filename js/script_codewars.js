function encode(plaintext) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return Array.from(plaintext, (ch) => {
    const lower = ch.toLowerCase();
    if (!alphabet.includes(lower)) return ch;
    return alphabet.indexOf(lower) % 2 === 0 ? "0" : "1";
  }).join("");
}

console.log(encode("Hello World!"));

// How it works:

// Array.from(plaintext, callback) – splits plaintext into an array of characters and maps them.

// For each character ch:

// Convert to lowercase: lower.

// If lower is not in alphabet, return it unchanged.

// Otherwise, find its index in alphabet and map even → '0', odd → '1'.

// .join('') combines the mapped characters back into a string.
