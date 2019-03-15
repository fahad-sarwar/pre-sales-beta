const identity = JSON.parse(localStorage.getItem('state'));

module.exports  = {
    idToken : identity.id_token,
    sessionState : identity.session_state,
    accessToken : identity.access_token,
    tokenType : identity.token_type,
    scope : identity.scope,
    sid : identity.profile.sid,
    sub : identity.profile.sub,
    expiresAt : identity.expires_at,
    expiryDate: new Date(parseInt(identity.expires_at))
}