import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'


const blog = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId:string,
        prisma: any
      }
}>();

blog.use('/*', async (c, next) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
    c.set('prisma', prisma)
    const token = c.req.header('Authorization') || ""
  
    const bearer = token.split(" ")[1];
    console.log(bearer, "BEARER")
    try {
      const decodedbearer = await verify(bearer, c.env.JWT_SECRET);
      console.log(decodedbearer, "DECODE BEARER")
      if (decodedbearer.id) {
        c.set('userId', decodedbearer.id);
        await next();
      } 
    } catch (err) {
      c.status(404);
      return c.json({ error: "Unauthorized" });
    }
  
  })

blog.post('/', async (c) => {
    
    const body = await c.req.json();
    const {title, content} = body;
    const userId = c.get('userId')
    const prisma = c.get('prisma')
   
    const createBlog = await prisma.post.create(
       {
        data:{
            title:title,
            content: content,
            published: true,
            authorId: userId
        }
       }
    )
    console.log(createBlog, "CREATE BLOG")
    return c.json('Blog Created')
})

blog.put('/', async (c) => {
    const body = await c.req.json();
    const {id,title, content} = body;
    const userId = c.get('userId')
    const prisma = c.get('prisma')
    const updateBlog = await prisma.post.update({
        where:{
            id,
            authorId: userId
        },
        data:{
            title,
            content
        }
    })
    return c.json('blog Updated')
})



blog.get('/:id', async (c) => {

    const blogId = c.req.param('id')
    const prisma = c.get('prisma')

    const getBlog = await prisma.post.findUnique({
        where:{
            id:blogId
        }
    })
    const blogAuthor = await prisma.user.findUnique({
        where:{
            id: getBlog.authorId
        }
    });
    console.log(getBlog, "GET BLOG")
    return c.json({blog:getBlog, user:blogAuthor})
})
blog.get('/bulk', async (c)=> {
    const userId = c.get('userId')
    const prisma = c.get('prisma')
    console.log(userId, "USER ID")

    const getBulkBlog = await prisma.post.findMany({
        where:{
            authorId: userId
        }
    })
    return c.json(getBulkBlog)  

})


export default blog;