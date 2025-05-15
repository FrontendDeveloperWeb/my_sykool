import React from 'react';
import { fieldRules } from '../config/rules';

/**
 * Example component showing how to use the simplified validation rules
 */
function SimpleRulesExample() {
  // Example of using the rules in a form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div>
      <h1>Simple Validation Rules Example</h1>
      
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            id="name" 
            name="name" 
            // Here we would apply the validation rules
            // For example, in a library like Formik or React Hook Form:
            // rules={fieldRules.name}
          />
          <p><strong>Validation:</strong> {JSON.stringify(fieldRules.name)}</p>
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            // rules={fieldRules.email}
          />
          <p><strong>Validation:</strong> {JSON.stringify(fieldRules.email)}</p>
        </div>
        
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            id="password" 
            name="password" 
            type="password" 
            // rules={fieldRules.password}
          />
          <p><strong>Validation:</strong> {JSON.stringify(fieldRules.password)}</p>
        </div>
        
        <button type="submit">Submit</button>
      </form>
      
      <h2>Usage in Forms</h2>
      <div>
        <p>You can use these rules directly in your forms:</p>
        <pre>
          {`
// In Ant Design Form
<Form.Item name="name" rules={fieldRules.name}>
  <Input />
</Form.Item>

<Form.Item name="email" rules={fieldRules.email}>
  <Input />
</Form.Item>

// In Formik
<Formik
  initialValues={{ name: '', email: '' }}
  validate={values => {
    const errors = {};
    
    // Apply name validation
    for (const rule of fieldRules.name) {
      if (rule.required && !values.name) {
        errors.name = rule.message;
        break;
      }
      if (rule.min && values.name.length < rule.min) {
        errors.name = rule.message;
        break;
      }
      if (rule.max && values.name.length > rule.max) {
        errors.name = rule.message;
        break;
      }
    }
    
    // Apply email validation
    for (const rule of fieldRules.email) {
      if (rule.required && !values.email) {
        errors.email = rule.message;
        break;
      }
      if (rule.type === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = rule.message;
        break;
      }
    }
    
    return errors;
  }}
>
  {/* Form fields */}
</Formik>
          `}
        </pre>
      </div>
    </div>
  );
}

export default SimpleRulesExample;
