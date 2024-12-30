import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      type: 'array',
      name: 'sections',
      fields: [
        {
          type: 'relationship',
          name: 'author',
          relationTo: 'users',
        },
      ],
    },
  ],
}
