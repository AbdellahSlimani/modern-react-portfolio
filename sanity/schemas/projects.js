export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'the project description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'sourceCode',
      title: 'Source Code',
      type: 'url',
    },
    {
      name: 'codeOutput',
      title: 'Code Output',
      type: 'url',
    },
    {
      name: 'BackgroundMainColor',
      title: 'Background Main color',
      description: 'Does to the background tend to be black or white',
      type: 'string',
    },
    {
      name: 'buildGif',
      title: 'Build Gif',
      description: 'A gif of the code output',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Popularity',
      name: 'popularity',
      type: 'number'
    }
  ],
  orderings: [
    {
      title: 'Popularity',
      name: 'popularityDesc',
      by: [
        {field: 'popularity', direction: 'desc'}
      ]
    }
  ]
}
