import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Skeleton } from '@/components/ui/skeleton';
import AppBar from '@/components/AppBar';
import { useBlogs } from '../hooks/index';


const Blog = () => {

    const { loading, blogs } = useBlogs();


    if (loading) {
        return (
            <div className='h-screen flex flex-col items-center gap-6 mt-60 ml-50'>
                <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
            </div>


        )
    }

    console.log(blogs)
    return (
        <div>
            <AppBar />

            <div className='h-screen flex flex-col items-center gap-6 mt-60 ml-50'>
            {blogs.map((blog: any) => {
                return (
   
                    <Card className='w-1/2'>
                    <CardHeader>
                        <CardTitle>{blog.title}</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{blog.content}</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                    )
                })}
            </div>
        </div>

    )
}

export default Blog;