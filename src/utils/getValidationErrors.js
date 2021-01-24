export default function getValidationErrors (error) {
  const validationErrors = error.inner.reduce(
    (result, error) => {
      result[error.path] = error.message
      return result
    }, {})

  return validationErrors
}
