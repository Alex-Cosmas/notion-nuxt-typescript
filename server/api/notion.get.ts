

// const notion = new Client({
//   auth: process.env.NOTION_TOKEN,
// })


// export default defineEventHandler(async (event) => {
//   const listOfPages = await notion.databases.query({
//     database_id: process.env.NOTION_DATASBASE as string,
//   })
// })

// const blocks = []
// for (let i = 0; i <= listOfPages.results.length - 1; i++) {
//   const properties = listOfPages.results[i].properties

//   const block = await notion.blocks.children.list({
//     block_id: listOfPages.results[i].id,
//     page_size: 50,
//   })

//   blocks.push({
//     title: properties.Name.title[0]?.plain_text,
//     state: properties.Status.status?.name,
//     content: block?.results,
//   })

//   return { posts: blocks, count: blocks.length }

// }

// import { Client } from "@notionhq/client"

// const notion = new Client({
//   auth: process.env.NOTION_TOKEN,
// })


import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export default defineEventHandler(async (event) => {
  const listOfPages = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE as string,
  })

  const blocks = []
  for (let i = 0; i <= listOfPages.results.length - 1; i++) {
    const properties = listOfPages.results[i].properties

    const block = await notion.blocks.children.list({
      block_id: listOfPages.results[i].id,
      page_size: 50,
    })

    blocks.push({
      title: properties.Name.title[0]?.plain_text,
      state: properties.Status.status?.name,
      content: block?.results,
    })
  }

  return { posts: blocks, count: blocks.length }
})