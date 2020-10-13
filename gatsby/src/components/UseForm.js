import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(event) {
    // check if it's a number
    const { value } = event.target;

    if (event.target.type === 'number') {
      value = parseInt(value);
    }

    setValues({
      ...values,
      [event.target.name]: value,
    });
  }

  return { values, updateValue };
}
