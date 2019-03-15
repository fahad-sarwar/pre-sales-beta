module.exports  = {
    nodeEnvironment : process.env.NODE_ENV,
    environment : process.env.REACT_APP_ENVIRONMENT,
    bearerTokenAuthority : process.env.REACT_APP_BEARERTOKENAUTHORITY,
    identityServerUrl : process.env.REACT_APP_IDENTITYSERVERURL,
    clientId : process.env.REACT_APP_CLIENTID,
    redirectUrl : process.env.REACT_APP_REDIRECTURL,
    postLogoutRedirectUrl : process.env.REACT_APP_POSTLOGOUTREDIRECTURL,
    scopes : process.env.REACT_APP_SCOPES,
    silentRedirectUrl : process.env.REACT_APP_SILENTREDIRECTURL,
    signoutUrl : process.env.REACT_APP_SIGNOUTURL,
    authorisationUrl : process.env.REACT_APP_AUTHORISATIONURL,
    dialogueServicesUrl : process.env.REACT_APP_DIALOGUESERVICESURL
}