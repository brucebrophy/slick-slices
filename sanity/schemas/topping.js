import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  icon,
  preview: {
    select: {
      title: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ title, vegetarian }) => ({
      title: `${title} ${vegetarian ? '🥬' : ''}`,
    }),
  },
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'Name of the topping',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian Topping',
      type: 'boolean',
      description: 'Is this topping vegetarian?',
      options: {
        layout: 'checkbox',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
