export default function ({ store, error }) {
  if (!store.getters.isAuthenticated) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
