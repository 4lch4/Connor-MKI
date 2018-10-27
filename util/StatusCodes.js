module.exports = {
  success: {
    ok: 200,
    created: 201,
    accepted: 202,
    nonAuthoritativeInformation: 203,
    noContent: 204,
    resetContent: 205,
    partialContent: 206
  },

  clientError: {
  /** Indicates a bad or malformed request. */
    badRequest: 400,

    /** Indicates an unauthorized request. */
    unauthorized: 401,

    /** Indicates payment is required to perform this action. */
    paymentRequired: 402,

    /** Indicates the current user does not have access to this. */
    forbidden: 403,

    /** Indicates the requested resource was not found. */
    notFound: 404
  }
}
