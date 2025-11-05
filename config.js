module.exports = {
  getPort: () => process.env.PORT || '8000',
  getBaseURL: () => process.env.BASE_URL,
}
