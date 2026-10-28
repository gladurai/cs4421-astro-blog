# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and Open Graph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

## Author profiles

Add an author profile as a Markdown file in `src/content/authors/`. Its frontmatter requires `name` and `bio`, and can include an `avatar` image and `socialLinks` (a list of `name` and `url` pairs). Set the profile's file name, without the `.md` extension, as the `author` field in a blog post's frontmatter. For example, `src/content/authors/jane-doe.md` is referenced with `author: jane-doe`. The profile appears at the end of posts that reference it.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## AWS CDK

The TypeScript CDK app lives in `cdk/` and uses Vitest with `aws-cdk-lib/assertions`.
Install its dependencies with `npm ci --prefix cdk`, then run its tests from the
repository root with `npm run test:cdk`. Run `npm run build` before
`npm --prefix cdk run synth` to synthesize the CloudFormation template with the site
assets.

### GitHub Actions deployment

Pushes to `main` or `master` deploy the site to AWS; pull requests run checks without
receiving AWS credentials. Add these GitHub Actions repository secrets before enabling
deployment:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

Use credentials for an IAM user with only the permissions required to deploy this CDK
stack. Bootstrap the target AWS account in `eu-west-1` for CDK v2 if it has not already
been bootstrapped. These credentials are used by both deployment workflows and should
be stored only as GitHub secrets, rotated regularly, and never committed to the repo.

### Container image

The `Build and publish container` workflow builds the [Dockerfile](./Dockerfile) and
publishes the image to Amazon ECR in `eu-north-1` on pushes to `main` or `master`.
The image is published to
`300124791907.dkr.ecr.eu-north-1.amazonaws.com/devopsprojectresurrection` with branch,
commit SHA, and (on `main` or `master`) `latest` tags. The workflow can also be started
manually from the Actions tab.

The workflow uses the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` repository
secrets. The associated IAM identity needs permission to authenticate to ECR and push
images to the `devopsprojectresurrection` repository in account `300124791907`, and
to update the `my-astro-blog-task` task definition and
`my-astro-blog-task-service-4s88l85l` service in the `devopsclusterlol` ECS cluster.
After publishing, it updates the `astro-blog-container` image and waits for the service
to become stable.

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
