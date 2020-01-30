const [off, warn, error] = [0, 1, 2]

module.exports = {
  extends: [
    "standard"
  ],
  plugins: [
    "react"
  ],
  rules: {
    quotes: [error, "double"],
    "react/jsx-uses-react": error,
    "react/jsx-uses-vars": error
  }
}
