export default {
    title: 'Front Page',
    name: 'frontPage',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            readOnly: true,
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Active pages',
            name: 'activePages',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'page' }],
                },
            ],
        }
    ],
}