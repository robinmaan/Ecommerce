export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Image of Products',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of Product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product slug',
      options: {
        source:'name',
      },
    },
    {
      name:"price_id",
      title:'Stripe Price Id',
      type: 'string',
    },
    {
      name: 'price',
      type: 'number',
      title: 'price',
    },{
        name:'category',
        title:'Product category',
        type:'reference',
        to:[
            {
                type:'category'
            }
        ]
    }
  ],
}
