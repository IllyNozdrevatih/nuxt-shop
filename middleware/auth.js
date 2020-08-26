export default function ({ $cookies, error }) {
  const isAuth = $cookies.get('vuex').users.isAuth

  if (!isAuth) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
  