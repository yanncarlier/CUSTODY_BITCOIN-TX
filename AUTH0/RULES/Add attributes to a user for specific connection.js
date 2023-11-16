function addAttributes(user, context, callback) {
  if (context.connection === 'company.com') {
    context.idToken['https://example.com/vip'] = true;
  }

  callback(null, user, context);
}