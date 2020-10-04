import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  icon,
  preview: {
    select: {
      title: 'name',
      isVegetarian: 'isVegetarian',
    },
    prepare: ({ title, isVegetarian }) => ({
      title: `${title} ${isVegetarian ? '🥬' : ''}`,
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
      name: 'isVegetarian',
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
