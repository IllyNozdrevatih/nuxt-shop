export default function ({ store, error }) {
    if (!store.state.users.isAuth) {
      error({
        message: 'You are not connected',
        statusCode: 403
      })
    }
  }
  