# Hono Blog on Cloudflare Workers

## Overview

This project is a lightweight, serverless blog platform built with the [Hono](https://github.com/honojs/hono) framework, designed to be deployed on [Cloudflare Workers](https://workers.cloudflare.com/). It leverages the edge computing capabilities of Cloudflare Workers to deliver fast, scalable, and secure blog experiences.

## Features

- **Fast Performance:** Utilizes the global distribution of Cloudflare's edge network.
- **Easy to Deploy:** Few steps required for deployment.
- **SEO Friendly:** Server-rendered pages for better SEO.
- **Markdown Support:** Write your posts in Markdown for easy formatting.

## Prerequisites

Before you start, make sure you have the following:

- A Cloudflare account.
- [Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/install-update) installed, for deploying to Cloudflare Workers.
- [Node.js](https://nodejs.org/) (version 14 or later) installed.

## Setup

### Clone the Repository

```bash
git clone https://yourrepositoryurl.com/hono-blog.git
cd hono-blog
```

### Install Dependencies
```bash
npm install
```

### Local Development
To run the blog locally for development purposes:
```bash
npm run dev
```

This will start a local development server. You can view your blog at 'http://localhost:8787'

