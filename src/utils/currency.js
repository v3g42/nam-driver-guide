/**
 * Convert a Int currency to a floating point currency. e.g. 10000 cents -> 100.00
 * @param amount The number of cents
 * @returns {string} amount as a floating point string
 */
export const intCentsToFloatString = amount => {
  return (amount / 100).toFixed(2)
}
