function usernameAttribute(user, context, callback) {
  user.app_metadata = user.app_metadata || {};
  // short-circuit if the user signed up already
  if (user.app_metadata.username) return callback(null, user, context);
  // first time login/signup
  user.app_metadata.username = user.app_metadata.username || user.username;
  auth0.users
    .updateAppMetadata(user.user_id, user.app_metadata)
    .then(function () {
      callback(null, user, context);
    })
    .catch(function (err) {
      callback(err);
    });
}