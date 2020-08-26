export default function ({ $cookies, error }) {
  if($cookies.get('vuex')) {
    const isAuth = $cookies.get('vuex').users.isAuth
  
    if (!isAuth) {
      error({
        message: 'You are not connected',
        statusCode: 403
      })
    }
  } else {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
  