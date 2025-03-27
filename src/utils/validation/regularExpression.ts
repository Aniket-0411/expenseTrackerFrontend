/**
 * Supports **english** and **arabic** characters. Also includes hyphens and fullstops.
 * - Does not support Umlauts like `ÿ`.
 */
export const fallbackNonUnicodeRegExp = /^[a-zA-Z\u0600-\u06FF\s'-.]+$/;
