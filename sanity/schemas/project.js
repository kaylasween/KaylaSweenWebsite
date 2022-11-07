export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        },
        {
            name: 'url',
            title: 'Link to Project',
            type: 'url',
          },
    ],
}
  