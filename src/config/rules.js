// Define validation rules by type, not by field name
const rules = {
  // Basic validations
  required: { required: true, message: "This field is required!" },

  // Text validations
  text: {
    min2: { min: 2, message: "Must be more than 2 characters" },
    min3: { min: 3, message: "Must be more than 3 characters" },
    min6: { min: 6, message: "Must be at least 6 characters" },
    max30: { max: 30, message: "Must not be more than 30 characters" },
    max50: { max: 50, message: "Must not be more than 50 characters" },
    alphanumeric: { pattern: /^[a-zA-Z0-9\s]+$/, message: "Can only contain letters, numbers and spaces" }
  },

  // Email validation
  email: { type: "email", message: "Please enter a valid email address!" },

  // Phone validation
 phone: { 
    pattern: /^03[0-9]{9}$/, 
    message: "Please enter a valid Pakistan mobile number (03xxxxxxxxx)!" 
  },

  // Number validations
  number: {
    positive: { min: 0, message: "Value must be positive!" },
    type: { type: "number", message: "Please enter a valid number!" }
  },
   url: { 
    pattern: /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/, 
    message: "Please enter a valid website URL!" 
  },
  // Date validation
  date: { type: "date", message: "Please enter a valid date!" }
};

// Create rule sets for common fields
const fieldRules = {
  // Common field rule sets
  name: [
    rules.required,
    rules.text.min3,
    rules.text.max30
  ],

  email: [
    rules.required,
    rules.email
  ],

  password: [
    rules.required,
  ],

  phone: [
    rules.required,
    rules.phone
  ],

  price: [
    rules.required,
    rules.number.type,
    rules.number.positive
  ],

   website: [
    rules.url
  ],

  date: [
    rules.required,
    rules.date
  ]
};


// For backward compatibility
const login = {
  name: fieldRules.name,
  email: fieldRules.email,
  password: fieldRules.password
};

const register = {
  name: fieldRules.name,
  email: fieldRules.email,
  password: fieldRules.password,
  phone: fieldRules.phone
};

const profile = {
  name: fieldRules.name,
  email: fieldRules.email,
  phone: fieldRules.phone
};

export { rules, fieldRules, login, register, profile };
