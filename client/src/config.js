export const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://actor-overlap.azurewebsites.net/api'
    : 'http://localhost:7071/api'
