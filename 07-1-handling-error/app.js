function parseURL(url) {
  try {
    return new URL(url);
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}
