/**
 * This manages reusable translations common to `validation` utility functions.
 */
export const translations = {
  this: {
    en: 'This',
    ar: 'هذه',
  },
  thisID: {
    en: 'This ID',
    ar: 'هذه بطاقة الهوية',
  },
  thisEmiratesId: {
    en: 'This Emirates ID',
    ar: 'هذه بطاقة الهوية الإماراتية',
  },
  thisTIN: {
    en: 'This TIN',
    ar: 'رقم التعريف الضريبي هذا',
  },
  thisInput: {
    en: 'This Input',
    ar: 'هذا الإدخال',
  },
  isRequired: {
    en: 'is required',
    ar: 'مطلوب',
  },
  isInValid: {
    en: 'format is invalid',
    ar: 'التنسيق غير صالح',
  },
  insertValidContact: {
    en: 'Please insert a valid contact number',
    ar: 'الرجاء إدخال رقم اتصال صالح',
  },
  insertValidEmail: {
    en: 'Please insert a valid email address',
    ar: 'الرجاء إدخال عنوان بريد إلكتروني صالح',
  },
  insertValidPassword: {
    en: 'Please enter a valid password',
    ar: 'الرجاء إدخال كلمة السر الصحيحة',
  },
  insertValidID: {
    en: 'Please insert a valid ID',
    ar: 'الرجاء إدخال هوية صالحة',
  },
  invalidNameFormat: {
    en: 'Invalid name format',
    ar: 'تنسيق اسم غير صالح',
  },
  invalidFullNameFormat: {
    en: 'Invalid fullname format',
    ar: 'تنسيق الاسم الكامل غير صالح',
  },
  invalidUsernameOrIDFormat: {
    en: 'Invalid User Name/ID format',
    ar: 'اسم المستخدم / تنسيق معرف غير صالح',
  },
  invalidIDFormat: {
    en: 'Invalid ID format',
    ar: 'تنسيق الهوية غير صالح',
  },
  insertValidDate: {
    en: 'Please enter a valid date',
    ar: 'ارجوك ادخل تاريخ صحيح',
  },
  max: {
    en: 'max:',
    ar: 'طويل جدا',
  },
  min: {
    en: 'min:',
    ar: 'الأعلى',
  },
  charCount: (min: number | string, max: number | string) => ({
    en: `must be between ${min} - ${max} characters`,
    ar: `أحرف ${max} - ${min} يجب أن يكون بين `,
  }),
  tooShort: (min: number | string) => ({
    en: `is too short (Min: ${min})`,
    ar: `قصير جدًا (الحد الأدنى: ${min})`,
  }),
  tooLong: (max: number | string) => ({
    en: `is too long (Max: ${max})`,
    ar: `طويل جدًا (الحد الأقصى: ${max})`,
  }),
};
