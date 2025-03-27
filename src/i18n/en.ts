import { title } from "process";

const en = {
  common: {
    ok: 'OK!',
    okay: 'Okay',
    search: 'Search',
    back: 'Back',
    cancel: 'Cancel',
    clear: 'Clear',
    close: 'Close',
    reset: 'Reset',
    retry: 'Retry',
    logOut: 'Log Out',
    loading: 'Loading',
    pleaseWait: 'please wait',
    noDataFound: 'No data found',
    confirm: 'Confirm',
    accept: 'Accept',
    requiredStar: '*',
    emptyString: '',
    loadingContentDescription: 'Loading the most recent content. Please wait.',
    loadingContentSubtitle: 'Loading Content',
    errorLoadingContent: 'We failed to load the content Please retry.',
    errorLoadingContentDescription: 'Something went wrong',
    noResults: 'No results',
    resultCounts: {
      zero: 'No results',
      one: 'Result',
      other: 'Results',
    },
    dates: {
      date: 'Date',
      daysAgo: 'Days ago',
      today: 'Today',
      updated: 'Updated',
      yesterday: 'Yesterday',
    },
    months:{
      january: 'January',
      february: 'February',
      march: 'March',
      april: 'April',
      may: 'May',
      june: 'June',
      july: 'July',
      august: 'August',
      september: 'September',
      october: 'October',
      november: 'November',
      december: 'December',
    },
    submit: 'Submit',
    termsAndConditionsTitle: 'Terms & Conditions',
  },
  errorScreen: {
    title: 'Sorry! We could not set you up!',
    friendlySubtitle:
      'Something went wrong while loading the content of this screen. Please try again shortly and if this persists, please contact our support.',
    reset: 'Refresh',
    appErrorTitle: 'An error occurred in the app.',
    appErrorSubtitle: 'Something unexpected happened while processing your request.',
    appErrorDescription:
      'An error occurred in the app while loading this screen. Please retry. If this persists, please contact our support.',
    noInternetTitle: 'The connection could not be established.',
    noInternetSubtitle: "We couldn't complete your request Please check your internet connection.",
    noInternetDescription: 'You are offline',
    requestTimeout: 'Your request timed out.',
    requestTimeoutDescription:
      'We are experiencing heavy usage at the moment and your requests might take much longer to process. Please try again later.',
    sessionError:
      'Hello. It looks like you have been idle for some time and your session expired.\nYou need to login again.',
    serverError: 'We were unable to process your request. Please try again later.',
    refresh: 'Refresh',
    traceTitle: 'Error from %{name} stack',
    cta: {
      startOver: 'Start Over',
      login: 'Login',
      retry: 'Retry',
    },
    feedbackMessage: {
      common: {
        msg1: 'Oh, Ooohhh!',
        msg2: 'Opsie',
        msg3: 'Hhhm!',
        msg4: 'Ehh!',
        msg5: 'Ehh ehh!',
        msg6: 'Uh-oh!!',
        msg7: 'Oopsie!',
        msg8: 'Whoops!',
        msg9: 'Sigh!',
        msg10: 'Oh, dear!',
        msg11: 'Wait a minute!',
        msg12: 'Apologies!',
        msg13: 'Well, well!',
        msg14: 'Oh my God!',
      },
      noData: {
        msg1: 'No results were found!',
        msg2: 'No records are available!',
        msg3: 'No bids are available!',
        msg4: 'Such Emptiness!',
        msg5: 'Nothing here!',
      },
      error: {
        msg1: 'Sorry',
        msg2: 'Sorry!',
        msg3: 'So, Sorry!',
        msg4: 'Oops!',
        msg5: 'Whoops!',
        msg6: 'Oh, snap!',
        msg7: 'Oops-a-daisy!',
        msg8: 'Oh, bother!',
        msg9: 'Oh, dear!',
        msg10: "D'oh!",
        msg11: 'What just happened!',
        msg12: 'We regret to inform you!',
        msg13: "C'est la vie!",
        msg14: 'Pardon the inconvenience!',
        msg15: 'Our sincere apologies!',
        msg16: 'Our sincerest apologies!',
        msg17: 'Regretfully, \nan error occurred!',
        msg18: 'Pardon our error!',
        msg19: 'Oopsie-doozie!',
        msg20: 'Pardon the hiccup!',
        msg21: 'Pardon the mishap!',
      },
    },
    authTokenError: {
      title: 'Sorry! We could not set you up!',
      description:
        'Something went wrong while fetching the necessary bells and whistles. Please try again shortly and if this persists, please contact our support.',
      heading: 'Oops!',
      retryLabel: 'Retry',
    },
    errorInScreenSection: {
      title: 'Sorry! We could not set you up!',
      description:
        'Something went wrong while setting up this content. Are you using the latest version of the app? Please try again shortly and if this persists, please contact our support.',
      heading: 'Oops!',
      retryLabel: 'Retry',
    },
  },
  welcomeScreen: {
    postscript:
      "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: 'Your app, almost ready for launch!',
    exciting: '(ohh, this is exciting!)',
  },
  emptyStateComponent: {
    generic: {
      heading: 'So empty... so sad',
      content: 'No data found yet. Try clicking the button to refresh or reload the app.',
      button: "Let's try this again",
    },
  },
  translate: 'عربي',
  theme: {
    light: 'Light',
    lightMode: 'Light Mode',
    dark: 'Dark',
    darkMode: 'Dark Mode',
    systemDefault: 'Same as Device',
    currentTheme: 'Current Theme',
    appThemeModalTitle: 'Appearance',
    appThemeModalSubTitle:
      'Please select one option. "Same as Device" will use the preferred color mode your device is using.',
  },
  bottomTabs: {
    bcm: 'BCM',
    favorites: 'Favorites',
    home: 'Home',
    pending: 'Pending',
    profile: 'Profile',
  },
  forms: {
    labels: {
      this: 'This',
      theSearchInput: 'The search',
      pickDate: 'Please pick a date',
      pickTime: 'Please pick a time',
      pickerHeader: 'Dates',
      address: 'Address',
      theAddress: 'The address',
      userDob: "The user's date of birth",
      city: 'City',
      comments: 'Comments',
      theCity: 'The city',
      country: 'Country',
      theCountry: 'The country',
      emailAddress: 'Email',
      password: 'Password',
      thePassword: 'The password',
      firstName: 'First name',
      lastName: 'Last name',
      representativeName: 'Representative Name',
      representativeEmail: 'Representative Email',
      representativeContactNumber: 'Representative Contact',
      operatorName: 'Operator Name',
      operatorOfficeNumber: 'Operator Office Number',
      operatorLicenseNumber: 'Operator License Number',
      operatorLicenseExpDate: 'Operator License Expiry Date',
      mobileCountryCode: 'Mobile country code',
      theMobileCountryCode: 'The mobile country code',
      nationality: 'Nationality',
      theNationality: 'The nationality',
      phone: 'Phone',
      thePhoneNumber: 'The phone number',
      state: 'State',
      theState: 'The state',
      visaNumber: 'Visa Number',
      theVisaNumber: 'The Visa number',
      otp: 'OTP',
      theOtp: 'The OTP',
      theBidPrice: 'The Bid price',
      ejariDocNumber: 'Ejari Document Number',
      tawteeqDocNumber: 'Tawtheeq Document Number',
      ejariStartDate: 'Ejari Start Date',
      tawteeqStartDate: 'Tawtheeq Start Date',
      ejariEndDate: 'Ejari End Date',
      tawteeqEndDate: 'Tawtheeq End Date',
      leaseExpiryDate: 'Lease Expiry Date',
      leaseStartDate: 'Lease Start Date',
      moveInDate: 'Move In Date',
      moveOutDate: 'Move Out Date',
      emiratesIdNumber: 'Emirates ID Number',
      emiratesIdExpiryDate: 'Emirates ID Expiry Date',
      mobileNumber: 'Mobile Number',
      emergencyContactNumber01: 'Emergency Contact Number',
      emergencyContactNumber01Postfix: ' (01)',
      emergencyContactNumber02: 'Emergency Contact Number',
      emergencyContactNumber02Postfix: ' (02)',
      adultOccupants: 'No. of Adults',
      childOccupants: 'No. of Children',
      occupantWithSpecialNeedsComments: 'Occupant with special needs',
      passportNumber: 'Passport Number',
      passportIssueDate: 'Passport Issue Date',
      passportExpiryDate: 'Passport Expiry Date',
      description: 'Description',
    },
    feedbackSection: {
      loadingMessage: 'Verifying your details.',
      descriptionMessage: 'Please wait.',
    },
    placeholders: {
      comments: 'Comments',
      firstName: 'First Name',
      lastName: 'Last Name',
      representativeName: 'Representative name',
      representativeContactNumber: 'Representative phone number',
      representativeEmail: 'Representative email address',
      operatorName: 'Operator Name',
      operatorOfficeNumber: 'Operator office number',
      operatorLicenseNumber: 'Operator license number',
      operatorLicenseExpDate: 'Operator license expiry date',
      emailAddress: 'Email',
      nationality: 'Nationality',
      password: 'Enter your password',
      phone: 'Enter your phone number',
      search: 'Search',
      searchItems: 'Search through items',
      searchForCountry: 'Search for a country',
      searchForCountryCode: 'Search for a Country Code',
      searchForTheDevice: 'Search for the device',
      searchForState: 'Search for a state',
      otp: 'OTP',
      ejariDocNumber: 'Enter your Ejari Number',
      tawteeqDocNumber: 'Enter your Tawtheeq Number',
      ejariStartDate: 'Select the Ejari start date',
      tawteeqStartDate: 'Select the Tawtheeq start date',
      ejariEndDate: 'Select the Ejari end date',
      tawteeqEndDate: 'Select the Tawtheeq end date',
      leaseExpiryDate: 'Please select the lease expiry date',
      leaseStartDate: 'Please select the lease start date',
      moveInDate: 'Please select the move in date',
      moveOutDate: 'Please select the move out date',
      emiratesIdNumber: 'Emirates ID (784-****-******-*)',
      emiratesIdExpiryDate: 'Select the Emirates ID  expiry date',
      updateEmiratesIdExpiryDate: 'Update the Emirates ID expiry date',
      mobileNumber: 'Add your mobile number',
      emergencyContactNumber01: 'Add an emergency contact no.',
      emergencyContactNumber02: 'Add optional emergency contact no.',
      adultOccupants: 'How many adults?',
      childOccupants: 'How many children?',
      occupantWithSpecialNeedsComments: 'If Yes, Add your comments...?',
      passportNumber: 'The passport number',
      passportIssueDate: 'The passport issue date',
      passportExpiryDate: 'The passport expiry date',
    },
    validation: {
      isToo: 'is too',
      short: 'short',
      long: 'long',
      max: 'Max',
      min: 'Min',
      thisId: 'This ID',
      thisInput: 'This input',
      thisTIN: 'This TIN',
      isRequired: 'is required',
      insertValidContactNumber: 'Please insert a valid phone number',
      insertValidEmailAddress: 'Please insert a valid email address',
      insertValidPassword: 'Please insert a valid email password',
      insertValidDate: 'Please enter a valid date',
      insertId: 'Please insert a valid ID',
      insertNumber: 'Please insert a valid number',
      invalidFormat: 'format is invalid',
      invalidNameFormat: 'Invalid name format',
      invalidFullNameFormat: 'Invalid fullname format',
      invalidNameOrIdFormat: 'Invalid User Name/ID format',
      invalidIdFormat: 'Invalid ID format',
      invalidEmiratesIdFormat: "Invalid Emirates ID format. It should match '784-XXXX-XXXXXXX-X'.",
      mustBeBetween: 'must be between',
      characters: 'characters',
      pleaseEnterAValidAmount: 'Please insert a valid amount',
      password: 'The password',
      theEmailAddress: 'The email address',
      theFirstName: 'The first name',
      theLastName: 'The last name',
      representativeName: 'The representative name',
      representativeEmail: 'The representative email address',
      representativeContactNumber: 'The representative phone number',
      operatorName: 'The operator name',
      operatorOfficeNumber: 'The operator office number',
      operatorLicenseNumber: 'The operator license number',
      operatorLicenseExpDate: 'The operator license expiry date',
      theNationality: 'The nationality',
      theEjariDocNumber: 'The Ejari number',
      theTawteeqDocNumber: 'The Tawtheeq number',
      ejariStartDate: 'The Ejari start date',
      tawteeqStartDate: 'The Tawtheeq start date',
      ejariEndDate: 'The Ejari end date',
      tawteeqEndDate: 'The Tawtheeq end date',
      leaseExpiryDate: 'The lease expiry date',
      leaseStartDate: 'The lease start date',
      moveInDate: 'The move in date',
      moveOutDate: 'The move out date',
      emiratesIdNumber: 'The Emirates ID number',
      emiratesIdExpiryDate: 'The Emirates ID number',
      mobileNumber: 'The mobile number',
      emergencyContactNumber01: 'The emergency contact number',
      emergencyContactNumber02: 'The second emergency contact number',
      adultOccupants: 'The no. of adults?',
      childOccupants: 'The no. of children?',
      customerComments: 'Customer comments',
      occupantWithSpecialNeedsComments: 'The special needs comments',
      passportNumber: 'The passport number',
      passportIssueDate: 'The passport issue date',
      passportExpiryDate: 'The passport expiry date',
      minValue: 'Value must be greater than',
      maxValue: 'Value must be less than',
    },
    errors: {
      dropdownNetworkError: '%{error}, please retry',
      noSearchMatch: 'We cannot find any item that matches your search.',
      tryOtherOption: 'Please retry with another option.',
      errorsInForm: 'Errors in Form',
      failedToGetLocations: 'Failed to get locations',
    },
    loading: {
      loadingOptions: 'Loading options, please wait',
    },
  },
  maintenance: {
    offlineBanner: {
      title: "You're offline! Last Updated -  %{time}",
      message: 'The content you are viewing may not be up to date.',
      ok: 'OK!',
    },
  },
  otpModal: {
    title: 'OTP Verification',
    subtitle: 'Enter the OTP code sent to your %{contactType} %{contactInfo}.',
    titleSendingOTP: 'Sending OTP',
    subtitleSendingOTP: 'We are sending the OTP to %{contactInfo}.',
    titleSendingOTPError: 'Sorry, OTP not sent',
    subtitleSendingOTPError: 'We could not send the OTP to this %{contactType} %{contactInfo}.',
    titleValidatingOTP: 'Validating OTP',
    subtitleValidatingOTP: 'Making sure it was the one sent to %{contactInfo}.',
    titleValidatingOTPError: 'OTP Verification failed',
    subtitleValidatingOTPError:
      'Sorry, it looks like the OTP code provided does not match the one sent to %{contactInfo}.',

    footerTextSendingOTP: 'Please check your %{contactType} for the OTP code.',
    ctaLabel: 'Validate OTP',
    ctaLabelLoading: 'Please wait',
    resendCode: 'Resend Code',
    didNotReceiveCode: 'Did not receive the Code?',
    registeredWarning: 'Make sure this %{contactType} is registered with us.',
    feedbackMessage: {
      message: 'An OTP has been sent.',
      description:
        'If this %{contactType} %{contactInfo} is registered with us, check your messages for the code.',
    },
  },
  loginScreen: {
    loginMethods: {
      email: 'With email',
      phone: 'With phone number',
    },

    signIn: 'Login to your account',
    emailFieldLabel: 'Email',
    passwordFieldLabel: 'Password',
    phoneFieldLabel: 'Phone number',
    emailFieldPlaceholder: 'User email',
    passwordFieldPlaceholder: 'Enter your password',
    phoneFieldPlaceholder: 'Enter your phone number',
    tapToSignIn: 'Login',
    sendCode: 'Send Code',
    sendingCode: 'Sending Code',
    forgotPassword: 'Forgot Password?',
    faceIdSignIn: 'Sign In with Face ID',
    touchIdSignIn: 'Sign In with Touch ID',
    register: 'Register',
    hint: 'Hint: you can use any email address and your favorite password :).',
    moveInModal: {
      title: 'Move in as',
      moveInCTA: 'Move In',
      tenant: 'Tenant',
      holidayHome: 'Holiday Home',
    },
    biometrics: {
      loginWithFaceId: 'Login with Face ID',
      loginWithTouchId: 'Login with Touch ID',
    },
  },
  resetPasswordScreen: {
    title: 'Reset Password',
    message: 'Your new password must be different from your previous password.',
    newPasswordLabel: 'New Password',
    newPasswordPlaceholder: 'Enter your new password',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter your new password',
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordPlaceholder: 'Re-enter password',
    buttonLabel: 'Reset Password',
    passwordMismatchError: 'This does not match the above entered password',
    passwordResetSuccessfulText: 'Password Reset Successful',
  },
  passwordChangeScreen: {
    title: 'Change Password',
    oldPasswordLabel: 'Old Password',
    oldPasswordPlaceholder: 'Enter your old password',
    newPasswordLabel: 'New Password',
    newPasswordPlaceholder: 'Enter your new password',
    passwordChangeSuccessfulText: 'Password Change Successful',
  },
  termsAndConditionScreen: {
    agree: 'Agree to',
    accept: 'I Accept',
    doNotAccept: "I don't Accept",
    retryLabel: 'Retry',
    title: 'Terms & Conditions',
    isLoadingDescription:
      'Please wait while we fetch the latest Terms and Conditions for using the app',
    isLoadingSubtitle: 'Loading Content',
    errorDescription: 'We failed to fetch the Terms and Conditions content Please retry.',
    errorSubtitle: 'Something went wrong.',
    mainCTA: 'Submit Request',
    moveInTermsAndConditionsData: {
      termAndCondition1: 'Chilled water account and Gas account creation (as applicable)',
      termAndCondition2:
        'Moving in is permitted only after receiving the move in permit only. Move in request must be submitted at least 3 days prior to moving in date.',
      termAndCondition3:
        'Moving company must arrange to protect the common area (floors, walls, doors, lifts) to avoid damages. Customer is responsible for damages caused to the common area.',
      termAndCondition4:
        'No disturbance should be caused to other residents which include but not limited to blocking driveway, unassigned lift for shifting, noise.',
      termAndCondition5: 'Move in timing is between 09:00 am and 07:00 pm',
      termAndCondition6:
        'All kind of explosive or flammable materials such as gas cylinders are prohibited as applicable.',
      termAndCondition7:
        'Management shall not accept any liabilities, whatsoever, for loss or damage of goods or items, for any injury, accident or losses sustained /incurred by the resident(s) in any part of the building and / or the common areas / shared facilities within the development at any time.',
      termAndCondition8:
        'Personal belonging must not be placed and / or stored at any part of the community and / or the common area / shared facilities.',
      termsAndCondition9:
        'All waste generated during the move in that includes but not limited to, carton, boxes, plastic sheets, protection etc. is the responsibility of the customer and must be disposed off the premises.',
      termsAndCondition10:
        'Only accepted pets by local authorities are accepted and must be communicated with the management in advance. Breeding of any type is prohibited.',
      termsAndCondition11: 'Full compliance with community rules',
    },

    moveOutTermsAndConditionsData: {
      termAndCondition1:
        'Move out request must be submitted at least 3 days prior to moving out date.',
      termAndCondition2: 'Cancellation of Chilled water account and Gas account (as applicable)',
      termAndCondition3:
        'Moving company must arrange to protect the common area (floors, walls, doors, lifts) to avoid. damages. Customer is responsible for damages caused to the common area.',
      termAndCondition4:
        'No disturbance should be caused to other residents which include but not limited to blocking driveway, unassigned lift for shifting, noise.',
      termsAndConditions5: 'Move out timing is between 09:00 am and 07:00 pm',
      termAndCondition6:
        'Management shall not accept any liabilities, whatsoever, for loss or damage of goods or items, for any injury, accident or losses sustained / incurred by the resident(s) in any part of the building and / or the common areas / shared facilities within the development at any time',
      termAndCondition7:
        'Personal belonging must not be placed and / or stored at any part of the building and / or the common area / shared facilities',
      termAndCondition8:
        'All waste generated during the move out that includes but not limited to, carton, boxes, plastic sheets, protection etc. is the responsibility of the customer and must be disposed of the premises',
    },
  },
  biometrics: {
    header: 'Biometric Login',
    description: 'Sign in to your account faster using Biometric authentication',
    activate: 'Activate Biometric Login',
    skip: 'Skip for Now',
    footerDescription:
      'By enabling biometric login you allow NorthLadder to access your saved biometric data in your device to secure your login. The data will not be used for any other purposes.',
    unavailableOnDevice: 'Biometrics login is not available on this device.',
    loginError: 'Error while trying to Login',
    loggingIn: 'Logging In',
    biometricTypeUnsupportedError:
      'Biometric authentication is available on this device, but no specific biometric type is supported.',
  },
  listModal: {
    empty: {
      heading: 'Oops!',
      title: 'No items found',
      description: 'We could not retrieve the items you ',
    },
    error: {
      heading: 'Sorry!',
      title: 'We failed to fetch the content',
      description: 'Something went wrong while fetching the content. Please try again shortly.',
    },
    retryLabel: 'Retry',
  },
  unitSelection: {
    title: 'Tenant',
    titleHHO: 'Holiday Home',
    titlePostfix: 'Move In',
    projectModal: {
      title: 'Projects',
      placeholder: 'Select a Project',
      subTitle:
        'Please select a project from the list. This will be used to populate the buildings later',
      fetchError: 'Sorry, we could not fetch the projects. Please try again later.',
      retry: 'Retry',
    },
    buildingsModal: {
      title: 'Buildings',
      placeholder: 'Select a Building',
      subTitle: 'Please select a building from the %{projectName} project',
      fetchError: 'Sorry, we could not fetch the projects. Please try again later.',
      retry: 'Refetch',
    },
    unitsModal: {
      title: 'Units',
      placeholder: 'Select a Unit',
      subTitle: 'Please select a unit from the %{buildingName} building',
      fetchError: 'Could not load the units. Please try again later.',
      retry: 'Try again',
    },
    selectedUnit: {
      project: 'Project',
      building: 'Building',
      unit: 'Unit',
      description:
        'You are about to raise a move-in request for the above unit, Click next to proceed.',
    },
  },
  tenantMoveIn: {
    title: 'Tenant',
    titlePostfix: 'Move In',
    formInfo: 'All fields are mandatory',
    btnNext: 'Next',
    anySpecialNeeds: 'Any special needs?',
    specialNeedsYes: 'Yes',
    specialNeedsNo: 'No',
    specialNeedWarning: 'Please whether you need any special needs to proceed',
    submitDisabledWarning: 'Please fill all the required fields to proceed',
    noOfOccupants: 'Total number of occupants',
    navBackPrompt: {
      modalTitle: 'Exiting the form',
      message: 'You will loose all unsaved changes in this form. Do you really wish to proceed?',
      okayCTA: {
        label: 'Okay',
      },
      cancelCTA: {
        label: 'Cancel',
      },
    },
    errorInSubmission: 'Something went while submitting your move-in request',
    formValidation: {
      identifiedErrorsMessage:
        'Sorry, we are unable to submit the form because of the following observations.',
      firstNameRequired: "The tenant's first name is required.",
      lastNameRequired: "The tenant's last name is also required.",
      nationalityRequired: 'Please add your nationality.',
      emailRequired: 'You need to add an email address.',
      mobileNumberRequired: 'The primary mobile number is mandatory.',
      ejariNumberRequired: 'The Ejari / Tawtheeq number is mandatory.',
      ejariStartDateRequired: 'The Ejari / Tawtheeq  start date is mandatory.',
      ejariEndDateRequired: 'The Ejari / Tawtheeq end date is mandatory.',
      moveInDateRequired:
        'You need to specify your move-in date. Please select one from the calendar picker.',
      emiratesIdNumberRequired: 'Please add the Emirates ID number.',
      emiratesIdExpiryDateRequired: 'The Emirates ID expiry date is also mandatory.',
      emergencyContactNumber01Required:
        "You are required to add an alternative emergency contact number. They shouldn't be the same.",
      adultOccupantsRequired: 'The number of adult occupants is mandatory.',
      childOccupantsRequired: 'You are required to add the number of children.',
      similarEmergencyNumbers: 'The emergency contact numbers should not be similar.',
    },
  },
  holidayHomeMoveIn: {
    title: 'Holiday Home',
    titlePostfix: 'Move In',
    formInfo: 'All fields are mandatory',
    btnNext: 'Next',
    submitDisabledWarning: 'Please fill all the required fields to proceed',
    navBackPrompt: {
      modalTitle: 'Exiting the form',
      message: 'You will loose all unsaved changes in this form. Do you really wish to proceed?',
      okayCTA: {
        label: 'Okay',
      },
      cancelCTA: {
        label: 'Cancel',
      },
    },
    errorInSubmission: 'Something went while submitting your holiday home move-in request',
    formValidation: {
      identifiedErrorsMessage:
        'Sorry, we are unable to submit the form because of the following observations.',
      representativeName: "The representative's full name is required.",
      representativeEmail: "You also need to add the representative's email address.",
      representativeContactNumber: 'The representative mobile number is mandatory.',
      operatorName: "The home operators's full name is also required.",
      operatorLicenseNumber: "The operator's license number should be added too.",
      operatorOfficeNumber: "You need to add the operator's office number too.",
      operatorLicenseExpDate: "The operator's license expiry date should be added too.",
      leaseStartDate: 'Please add the lease start date too.',
      leaseEndDate: 'The lease end date is also mandatory.',
      moveInDate:
        'You need to specify your move-in date. Please select one from the calendar picker.',
      emiratesIdNumber: 'Please add the Emirates ID number.',
      emiratesIdExpDate: 'The Emirates ID expiry date is also mandatory.',
      emergencyContactNumber01Required:
        "You are required to add an alternative emergency contact number. They shouldn't be the same.",
      similarEmergencyNumbers: 'The emergency contact numbers should not be similar.',
    },
  },
  moveOutAndRenew: {
    title: 'Move Out / ',
    titlePostfix: 'Renew',
    viewOption1Label: 'Move Out',
    viewOption2Label: 'Renew',
    formInfo: 'All fields are mandatory',
    submitDisabledWarning: 'Please fill all the required fields to proceed',
    uploadEmiratesId: 'Upload Emirates ID',
    uploadTawteeq: 'Upload Tawtheeq',
    updateProfile: 'Update Profile',
    submitSuccessModal: {
      title: 'Submitted successfully!',
      description: 'Your renewal request REN-%{requestMIP} has been submitted successfully.',
    },
    renewForm: {
      noOfOccupants: 'Total number of occupants',
    },
    errorInSubmission: 'Something went while submitting your renewal request',
  },
  ownerMoveInMoveOut: {
    title: 'Move In /',
    titlePostfix: 'MoveOut',
    formInfo: 'All fields are mandatory',
    specialNeedWarning: 'Please whether you need any special needs to proceed',
    submitDisabledWarning: 'Please fill all the required fields to proceed',
    updateProfile: 'Update Profile',
    submitSuccessModal: {
      title: 'Submitted successfully!',
      description: {
        moveOut: 'Your move out request %{requestMIP} has been submitted successfully. ',
        moveIn: 'Your move in request %{requestMIP} has been submitted successfully.',
      },
    },
    errorFeedback: {
      moveInError: 'Something went while submitting your move-in request',
    },
  },
  profileScreen: {
    title: 'Profile',
    changePasswordCTA: 'Change Password',
    logoutCTA: 'Log Out',
  },
  profileEditScreen: {
    title: 'Edit',
    titlePostfix: 'Profile',
    btnSave: 'Save',
    submitDisabledWarning: 'Please fill in all the fields you want to update',
    specialNeedWarning: 'Please whether you need any special needs to proceed',
  },
  requestHistoryScreen: {
    title: 'Request',
    titlePostfix: 'History',
  },
  provideFeedBackScreen: {
    title: 'Provide FeedBack',
    titlePostfix: 'Form',
    submitSuccessModal: {
      title: 'Submitted successfully!',
      description: 'Your feedback request %{requestMIP} has been submitted successfully.',
    },
  },
  contactUsScreen: {
    title: 'Contact Us',
  },
  documentLibraryScreen: {
    title: 'Document',
    titlePostfix: 'Library',
    empty: {
      heading: 'Oops!',
      title: 'No documents found',
      description:
        'It looks like you have not uploaded any documents yet. If that is not the case, please contact support for assistance.',
    },
    error: {
      heading: 'Sorry!',
      title: 'We failed to fetch your documents',
      description:
        'Something went wrong while fetching your previously uploaded documents. Please try again shortly.',
    },
    retryLabel: 'Retry',
  },
  deactivateAccountScreen: {
    title: 'Deactivate Account',
  },
  faqsScreen: {
    title: 'FAQs',
    faqsData: {
      question1: {
        question: 'What is the Master Community?',
        answer:
          'The Master Community refers to the mixed-use real estate community which includes:.',
        answerList: {
          answer1:
            'Roads, roundabouts, intersections, pathways, pavements, drainage, curbs, gutters,median strips, bridges, and viaducts.',
          answer2:
            'Lake, ponds, canals, promenades, fountains, water features and other waterways including all equipment associated with them.',
          answer3: 'Landscaping, open space areas, and playgrounds.',
          answer4:
            'Wires, cables, pipes, sewers, drains, ducts, devices, and equipment by which units or common areas are supplied with utilities.',
          answer5:
            'Measuring or utility service supply devices designated for common use by the owners and occupiers of the units (villas, townhouses, and apartments).',
        },
      },
      question2: {
        question: 'Who is managing my building / Community?',
        answer:
          'Bloom Community Management is the appointed community manager to operate and maintain the Shared Facilities and Assets of Bloom Communities which include but not limited to the Clubhouse, substations, electrical rooms, Infrastructure network, HVAC system, podium, swimming pools, gyms, roads, landscape, the promenade etc.',
      },
      question3: {
        question:
          'What services will Bloom Community Management be providing as the Community Manager?',
        answer:
          'Bloom Community Management will be managing, operating and maintaining the community. This includes:',
        answerList: {
          answer1: 'Administrative and secretarial services',
          answer2:
            'Managing the accounts and finances of the Community and Master Community where applicable',
          answer3:
            'Operating and maintaining the Shared Facilities through the provision of services such as security, cleaning and landscaping etc. ',
          answer4:
            'Community management (e.g. enforcement of rules & regulations, community activities etc.)',
        },
      },
      question4: {
        question:
          'What is the Community Charge (also known as Service Charge) which I have to pay?',
        answer:
          'The Community Charge is collected from all unit owners to cover the cost of operation, management, maintenance and replacement of all assets in the Shared Facilities within the Community / Master Community',
      },
      question5: {
        question: 'What does the Community Charge include? ',
        answer: 'he Community Charge includes:',
        answerList: {
          answer1:
            'General fund Daily operating expenses for upkeep & management of Shared Facilities',
          answer2: 'Sinking fund or Reserved Fund – Capital replacement expenses',
        },
      },
      question6: {
        question: 'What are the service charge budget components?',
        answer:
          'Services & Building Maintenance: operational expenses including Mechanical Electrical Plumbing (MEP) reactive and corrective maintenance; Life Safety and fire protection systems; cleaning, security, lifts, landscaping, pest control, regulatory services etc.',
        answerList: {
          answer1:
            'Utilities: Common area electrical and water consumption, sewage and irrigation consumption,chilled water capacity (where applicable) and consumption for common areas.',
          answer2:
            'Hospitality: Meetings, events and host arrangements cost.Administration: Insurance, Stationary, Consultation, statutory fees.',
          answer3:
            'Management Fee: Owner Association and Community management Admins and Staff, operational management.Community Enhancement: Periodic upgrades.',
          answer4:
            'Shared Services: Two or more organizations shared resources to reduce their overall operational cost.',
          answer5:
            'Master Community Charges: master community management, operation, administration, repair, maintenance, statutory compliance servicing, and control of the Communal Facilities.',
          answer6: 'Income: if any additional income contracts.',
          answer7:
            'Surplus adjustment: Budgeted but not spent expenses to be credited back to the owners accounts.',
          answer8:
            'Reserve Fund: it is a fund collected over time to ensure the building / community future ability to replace common assets at the end of its expected life',
        },
      },
      question7: {
        question: 'Why do I have to pay service charges?',
        answer:
          'It is essential that owners recognize their obligations in the interest of the property and wider community settling any outstanding dues. Without these funds being collected the community will not have adequate funds to ensure continuation of services, utilities and address its obligations.',
        answerList: {
          answer1:
            'If owners do not pay their service charge, the management will run short of funds to maintain the community and in time it may not be able to provide basic services such as paying for common area utilities (electricity and water), insurance, waste management, maintain critical systems or lifts. ',
        },
      },
      question8: {
        question: 'Why do I have to pay service charges?',
        answer:
          'It is essential that owners recognize their obligations in the interest of the property and wider community settling any outstanding dues. Without these funds being collected the community will not have adequate funds to ensure continuation of services, utilities and address its obligations',
        answerList: {
          answer1:
            'If owners do not pay their service charge, the management will run short of funds to maintain the community and in time it may not be able to provide basic services such as paying for common area utilities (electricity and water), insurance, waste management, maintain critical systems or lifts.',
        },
      },
      question9: {
        question: 'Does the Community Charge cover utilities costs for my unit?',
        answer: 'No. It only covers the utilities cost for common areas (i.e. Shared Facilities).',
      },

      question10: {
        question: 'What is the Sinking Fund / Reserved Fund?',
        answer:
          'The Sinking Fund is used for the unforeseen expenses and/or the cyclical replacement of capital items. Examples are lift motors, pumps, access control systems, generators, etc.',
      },
      question11: {
        question: 'How is the Community Charge determined?',
        answer:
          'The Community Charge is determined on an annual basis jointly by the Community Management, Owners Association, Appointed certified auditors and Abu Dhabi Real Estate Centre (ADREC) . This budgeting exercise is carried out based on a detailed estimate of the expenses to be incurred.',
      },
      question12: {
        question: 'Is there different rates of Community Charge payable',
        answer:
          'Yes. Different buildings types have a different community charge rates due to differences in area sizes and operational requirements. This will ensure that unit owners will not be overcharged with any costs not related to their property.',
      },
      question13: {
        question: 'How often do have I to pay the Community Charge?',
        answer:
          'The Community Charges invoices are issued to all owners at the beginning of each quarter and must be paid within the due date mentioned in the issued invoice to avoid penalty fees or further legal escalation.',
      },
      question14: {
        question: 'Can I pay the Community Charge on yearly basis?',
        answer:
          'Yes, the community charge can be paid yearly in advance at the beginning of each year.',
      },
      question15: {
        question: 'Is there a payment plan available?',
        answer:
          'If you wish to pay your service charges and require a payment plan, please contact your Community office on the provided contact details to discuss payment options.',
      },
      question16: {
        question: 'Is there any action against non-payers?',
        answer:
          'As a property owner, you would have signed a SPA and Master Community Declaration (MCD) when you purchased your property',
        answerList: {
          answer1:
            'The declaration states all owners are legally obliged to pay service charges and automatically become members of the community when purchase a unit within the community. ',
          answer2:
            'Owners who continue to leave their service charges unpaid will have their property marked as a defaulting property and this may result in the following',
          answer3:
            'A late payment fee can be imposed against the defaulting property.-Limitations and restriction on selling a property.-A legal action against the unit owner',
        },
      },
      question17: {
        question: 'How and where can I pay my Community Charge?',
        answer: 'You may make payment by:',
        answerList: {
          answer1: 'Cheque - addressed to your community account',
          answer2: 'Bank Transfer',
          answer3: 'Visa Card payment at the Community Office',
          answer4: 'ADCB ATM machines',
          answer5:
            'QuickPay Link . Through your community App when available payment methods will be mentioned in your service charges invoice ',
        },
      },
      question18: {
        question: 'Will the Community Charge be increased on a regular basis?',
        answer:
          'The Community Charge is reviewed and audited on a yearly basis and is subject to increase or decrease depending on the actual returns and expenses of the community',
        answerList: {
          answer1:
            'Service charges are subject to change from year to year due to many factors such as the expiration of various warranties and the defective liabilities period, additional maintenance costs, and increase of tariffs from the regulatory authorities (ADDC, ADM, ADCD, district cooling plans, etc.) ',
          answer2:
            'This will be explained in details in the financial audited  report issued yearly to all the owners. service charges rate approval letter from (ADREC) will be shared with all owners along with the invoices.  ',
        },
      },
      question19: {
        question:
          'I am traveling and will be out of the country. How can I pay the Community Charge? ',
        answer: 'You can pay it online through Bank Transfer.',
      },
      question20: {
        question: 'I am not using any of the amenities why should I pay the service charges?',
        answer:
          'As a member of the community you have obligations towards your community, the condition of the facilities, amenities, common area assets etc.. have direct impact on your property value,',
        answerList: {
          answer1:
            'The payment of your share of service charges is not only about the facilities but all services that will help to preserve your property value regardless of you are using the facilities or not.',
        },
      },
      question21: {
        question: 'What kind of utilities do I have to pay for as a resident?',
        answer: 'Water, Electricity, Telecommunications and Chilled Water (where applicable).',
      },
      question22: {
        question: 'What is the average chilled water consumption per month?',
        answer:
          'The Chilled Water Consumption Charges are based on actual meter readings. The bill will vary each month based on several factors such as usage pattern, outdoor temperature, etc',
      },
      question23: {
        question: 'What is Chilled Water?',
        answer:
          'Chilled Water (or District Cooling) is a form of air-conditioning service where thermal energy from a central cooling plant is distributed through a pipe network for use to cool multiple buildings.',
        answerList: {
          answer1:
            'This eliminates the need for separate systems in individual buildings leading to cost, operational and environmental efficiencies.',
        },
      },
      question24: {
        question: 'What is Capacity Charge?',
        answer:
          'Capacity charges covers the cost of overall infrastructure which provides the ability to supply chilled water, maintenance of such infrastructure and capital replacement cost of the chilled water plant and infrastructure.',
      },
      question25: {
        question:
          'Why do I have to pay capacity charges every year when I am already paying the Community Service Charge?',
        answer:
          'Capacity charge is an obligatory charge applied to all units and is aligned to industry standards across the region',
        answerList: {
          answer1:
            'The charge is necessary in order to ensure the district plant can actively sustain the requirements of all communities it accommodates.',
          answer2:
            'This is separate to the community charge which is each property owner’s contribution towards maintenance of common areas and other associated infrastructure within your Community.',
        },
      },
      question26: {
        question: 'Am I contractually obliged to pay the capacity charge?',
        answer:
          'As per the community declaration all property owners are responsible to ensure payment of all utilities being supplied to the property including chilled water Consumption & Capacity.',
      },
      question27: {
        question: 'What is BTU Meter?',
        answer:
          'It is a device which measures energy usage in BTUs. BTU means British Thermal Unit It is the measurement unit of the energy content used in the chilled water system (converted to Refrigeration Ton - RT).',
      },
      question28: {
        question: 'Why are the bills different from one month to another?',
        answer:
          'The bills are based on individual consumption. When using AC continuously or randomly, your bill will reflect that usage and show higher or lower amounts accordingly. Small actions such as temperature settings, blinds, air flow, environment etc. will have a major impact on the consumption bill.',
      },
      question29: {
        question: 'How accurate is the meter? What happens if the meter becomes faulty?',
        answer:
          'Meters utilize ultrasonic technology and are microprocessor based. Currently this is determined as the leading available technology and with proper maintenance; accuracy and life expectancy can be enhanced considerably',
        answerList: {
          answer1:
            'To give you further comfort meters can detect irregularities to minimize faults',
          answer2:
            'However, in the event a faulty meter has been identified, it will be replaced as soon as possible during which the consumption will be estimated according to the international guidelines and/or historical data.',
        },
      },
      question30: {
        question: 'How will I receive the monthly invoice? What if I have queries?',
        answer:
          'Chilled Water Supplier will send bills electronically to the email address registered, For all enquiries you can get the contact details of your community chilled water supplier from the community management office.',
      },
      question31: {
        question:
          'My unit is empty and I have not applied for Water & Electricity supply from ADDC. Why do I still need to pay the Capacity Charge?',
        answer:
          'The chilled water Annual Capacity charges is an amount billed yearly to the owners to cover the overall infrastructure cost of the chilled water plant and network, as well as the on-going operation and maintenance costs for the plant and network',
        answerList: {
          answer1:
            'This has nothing to do with the actual consumption, which is a meter based charges.',
        },
      },
      question32: {
        question: 'Do I require any approval to carry out fit-out/renovation works inside my unit?',
        answer:
          'Yes. Generally, you will have to apply to the renovation team for a fit out permit before seeking approval from the Abu Dhabi Municipality (ADM). Depending on the nature of these works, an application fee and works security deposit might be applicable.',
        answerList: {
          answer1:
            'For more details, please refer to the Renovation Team for further details renovation@bloomholding.com',
        },
      },
      question33: {
        question:
          'Can I carry out minor works such as painting of the walls in my unit without submitting an application to Bloom Community Management?',
        answer:
          'It is advisable to contact the community management for any minor works to avoid any inconvenience, the minor work such as painting, curtain installation, internal decoration doesn’t required NOC but work permit will always be required for the sake of security and record.',
      },
      question34: {
        question:
          'Do I have to inform Bloom Community Management if I want to Vacate my apartment? What are the requirements?',
        answer: 'Yes, You need to apply for  move out through the community App.',
      },
      question35: {
        question: 'What if I need to move out some items only (not moving out)?',
        answer: 'Kindly contact the Community Management before time to avoid any inconvenience',
      },
      question36: {
        question:
          'I am an Owner of a flat, and I would like to sell my unit. What is the process of resale? ',
        answer: 'Please contact Bloom Customer Relation team on customerrelations@bloom.co.ae',
      },
      question37: {
        question: 'Can I exchange my allocated car parking bay?',
        answer:
          'No. Each owner is only granted an exclusive use right of a specific (numbered) car parking bay,',
      },
      question38: {
        question: 'Is my unit  insured?',
        answer:
          'All common areas including the community center are already insured and covered by the community’s insurance policy',
        answerList: {
          answer1:
            'It is strongly recommended that homeowners and residents invest in a comprehensive insurance plan that provides protection for your property and belongings',
          answer2:
            'Every owner shall be responsible for insuring their property and every resident is responsible for insuring their assets. The cover must include all risk insurance or an amount equal to 100 percent of the full replacement cost of the assets located within the property’s boundaries.',
          answer3:
            'Community Management should be listed as a beneficiary by the unit owner on all insurance policies of the unit made by the unit owner to cover any damages beyond the unit’s physical boundaries.',
        },
      },
      question39: {
        question: 'Is there any security at night?',
        answer:
          'Yes. 24/7 security services are provided for each community. Daily patrol (both vehicle & foot patrol) of external areas  is also be carried out.',
      },
      question40: {
        question: 'Are there any rules which I have to abide by when living in my community?',
        answer:
          'Yes, the Master Community Rules serves as a guide for all residents/visitors/guests in the community and these rules are available for your reference and compliance in the community app.',
      },
      question41: {
        question: 'What is the purpose of the Master Community Rules?',
        answer:
          'This set of rules is not meant to be exhaustive but rather to assist you in moving in and setting up your new home comfortably and effortlessly',
        answerList: {
          answer1:
            'These rules are introduced to govern the interest of all residents/visitors by regulating the use of the Shared Facilities and to promote good community living.',
        },
      },
      question42: {
        question: 'How do I know if the Master Community Rules have been changed and/or updated?',
        answer:
          'We will send out periodic updates on any changes that have been agreed with the committee members and carried out to the Master Community Rules',
      },
      question43: {
        question: 'I am having a dispute with my neighbor, what can I do',
        answer:
          'Please try to solve the problem amicably with your neighbor. The vast majority of disputes can be settled in a courteous and reasonable manner without the involvement of the Master Community Manager.',

        answerList: {
          answer1:
            'if the problem is unable to be resolved amicably, please read the Master Community Rules and identify and document the rules your neighbor is violating.',
          answer2:
            'Provide this information in writing with dates and times to the  Community Management requesting assistance in remedying the contraventions. We will look into the case and advice you accordingly.',
        },
      },
      question44: {
        question: 'Can I hang my laundry outdoors for drying?',
        answer:
          'No. Hanging of laundry outside on windows, balconies, or other outdoor areas visible to other residents from the street or ground level of a neighboring lot or the Shared Facilities is not permitted.',
        answerList: {
          answer1:
            'This is to maintain the overall image of the community. The local authorities in Abu Dhabi also prohibit the drying of laundry in public.',
        },
      },
      question45: {
        question: 'Can I walk my pets in the Shared Facilities?',
        answer:
          'Under the Master Community Rules and in line with Abu Dhabi Municipality guidelines, pets are not allowed in the community and/or recreational facilities and/or areas (e.g. gymnasiums, function rooms) and/or swimming pools in the Shared Facilities.',
      },
      question46: {
        question:
          'Am I allowed to use facilities in other community under Bloom Community Management?',
        answer: 'No, the shared facilities  are restricted for the community residents only.',
      },
    },
  },

  personProfileScreen: {
    title: 'Profile',
  },
  myPortfolioScreen: {
    activePortfolioError: {
      title: 'Sorry, we could not fetch the portfolio',
      description: 'Something went wrong while fetching the my portfolio. Please try again later.',
      heading: 'My Portfolio',
      retryLabel: 'Retry',
    },
    fullTitle: 'My Portfolio',
    title: 'My',
    titlePostfix: 'Portfolio',
    viewItem: 'View',
  },
  noticesScreen: {
    title: 'Notices',
    documentDownCTA: {
      placeholder: 'Quarter 1 of 2023',
    },
    empty: {
      heading: 'Oops!',
      title: 'No notices found',
      description:
        'It looks like there are no any notices yet. If that is not the case, please contact support for assistance.',
    },
    error: {
      heading: 'Sorry!',
      title: 'We failed to fetch notices',
      description: 'Something went wrong while fetching the notices. Please try again shortly.',
    },
    retryLabel: 'Retry',
  },
  newsLetterScreen: {
    title: 'Newsletter',
    documentDownCTA: {
      placeholder: '2023',
    },
    empty: {
      heading: 'Oops!',
      title: 'No newsletters found',
      description:
        'It looks like there are no any newsletters yet. If that is not the case, please contact support for assistance.',
    },
    error: {
      heading: 'Sorry!',
      title: 'We failed to fetch newsletters',
      description: 'Something went wrong while fetching the newsletters. Please try again shortly.',
    },
    retryLabel: 'Retry',
  },
  documentUpload: {
    title: 'Supporting',
    titlePostfix: 'Documents',
    mainCTA: 'Submit',
    retry: 'Retry',
    reupload: 'Reupload File',
    tawteeqDocTitleUpload: 'Upload Tawtheeq',
    tawteeqDocTitleReupload: 'Re-upload Tawtheeq',
    emiratesIdDocTitleUpload: 'Upload Emirates ID',
    emiratesIdTitleReupload: 'Re-upload Emirates ID',
    agreeToLabel: 'Terms & Conditions',
    termsAndConditionsLabel: 'Agree to',
    fileSizeError: {
      title: 'The selected %{fileSize} MB file exceeds our maximum.',
      description:
        'Sorry, this file is a bit larger than our supported size. Please select a file smaller than %{maximumSize} MB for faster and smooth uploads.',
    },
    uploadError: {
      title: 'Sorry, we could not upload your file',
      description:
        'Something went wrong during the upload. This sometimes happens if the file is a bit large. Please try again shortly.',
    },
    loadingDocs: {
      heading: 'A moment!',
      title: 'Loading documents',
      description: 'please wait while we fetch all the required documents.',
    },
    loadingDocsError: {
      heading: 'Sorry!',
      title: 'Failed to load the documents',
      description:
        'Something went wrong while fetching the required documents. Please try again shortly or contact support. %{requestMIP}',
      ctaLabel: 'Try again',
    },
    noDocsError: {
      heading: 'Nothing here!!s',
      title: 'No documents found!',
      description:
        'It looks like there are no documents required on this request. If you were expecting any, please contact support. %{requestMIP}',
      ctaLabel: 'Try again',
    },
    missingRequestId: {
      heading: 'Oops!',
      title: 'Missing Service Request ID',
      description:
        'Sorry, it appears like you missed the service request ID. Please try again or contact support.',
      ctaLabel: 'Go home',
    },
    submitSuccessModal: {
      title: 'Submitted successfully!',
      description: 'Your move in request %{requestMIP} has been submitted successfully.',
    },
  },
  submitSuccessLabel: {
    title: 'Submitted successfully!',
    ctaText: 'Done',
  },
  forgotPasswordScreen: {
    title: 'Forgot',
    titlePostFix: 'Password',
    subTitle:
      'Enter the email address associated with your account and we will send you the link to reset your password.',
    email: 'Email',
    emailPlaceholder: 'Enter your email',
    sendOtp: 'Send OTP',
    validationText: 'Please enter a valid email address',
    ctaText: 'Verify Account',
  },
  changePassword: {
    title: 'Change',
    titlePostFix: 'Password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    confirmPassword: 'Confirm Password',
    submit: 'Submit',
    validationText: 'Please enter a valid password',
    passwordMismatch: 'The passwords do not match',
    passwordChanged: 'Password changed successfully',
    passwordChangeTitle: 'Password Change',
    defaultPasswordError: 'Please enter a different password from the current one',
  },
  forceResetPassword: {
    title: 'Set',
    titlePostFix: 'New Password',
  },
  serviceRequest: {
    title: 'Service',
    titlePostfix: 'Request',
    viewHistory: 'View Requests History',
    viewOption1Label: 'Unit',
    viewOption2Label: 'Communal',
    callUsCTA: 'Call us',
    emailUsCTA: 'Email us',
    unitMessage: 'To raise the service request, select one of the two options below',
    categoriesModal: {
      title: 'Categories',
      placeholder: 'Select a Category',
      subTitle: 'What type of service request are you raising?',
      fetchError:
        'Sorry, we could not fetch the service request categories. Please try again later.',
      retry: 'Try again',
    },
    communalForm: {
      submit: 'Submit',
      descriptionLabel: 'Description',
      descriptionPlaceholder: 'Please add a short description of your request',
      descriptionValidation: 'The description',
    },
  },
  homeScreen: {
    title: 'Home',
    titlePostfix: 'Screen',
    viewOption1Label: 'Unit',
    viewOption2Label: 'Communal',
    serviceRequest: 'Service Request',
    month: 'Select Month',
    monthSelectModal: {
      title: 'Select a Month'
    },
    addExpenseModal: {
      title: 'Add Expense',
      expenseType: 'Expense Type',
      expenseTypePlaceholder: 'Select Expense Type',
      expenseAmount: 'Expense Amount',
      expenseHeadPlaceholder: 'Enter Expense Head',
      expenseAmountPlaceholder: 'Enter Expense Amount',
    },
    quickActions: {
      budget: 'Budget',
      scanInvoice: 'Scan Invoice',
    },
    recordAnExpense: 'Record Expense',
  }
};

export default en;

export type TTranslations = typeof en;
