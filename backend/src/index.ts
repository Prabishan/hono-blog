import { Hono } from 'hono'
import { verify } from 'hono/jwt'
import blog from './routes/blog'
import user from './routes/user'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { cors } from 'hono/cors'


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
    userId:string,
    prisma: any
  }
}>();

app.use('/api/*', cors());

app.route('/api/v1/user', user)
app.route('/api/v1/blog', blog)



export default app
