module.exports.messages = {
  notFound: (resource) => `${resource}-not-found`,
  alreadyExists: (param) => `${param}-already-registered`,
  outRange: (value) => `${value}-out-range`,
  deactivate: (value) => `${value}-is-disabled`,
  invalidFields: "invalid-fields",
  invalidPassword: "invalid-password",
  expiredToken: "expired-token",
  invalidAuthFormat: `invalid-authorization-format`,
  authMissing: `missing-authorization-header`,
  internalError: "internal-server-error",
};
