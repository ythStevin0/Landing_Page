/**
 * asyncHandler.js
 * Wrapper untuk controller async agar tidak perlu menulis
 * try/catch berulang di setiap controller.
 *
 * Contoh penggunaan:
 *   router.get('/', asyncHandler(materialController.getAll));
 */

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
