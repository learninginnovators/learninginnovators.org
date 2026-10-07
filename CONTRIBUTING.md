# Contributing to Learning Innovators documentation

We welcome contributions to the Learning Innovators documentation! Whether you're a developer, educator, or user, your input can help improve our resources and make them more accessible to everyone.

## How to Contribute

1. Fork the repository and create a new branch for your changes.
2. Check out locally and open the root folder in a DevContainer in your preferred development environment.
3. Make sure to run the documentation site locally to preview your changes. You can do this by running the following command in your terminal:

   ```bash
   npm install # once
   npm run dev
   ```

   Preview your changes in your browser at `http://localhost:4321`. The site will automatically reload when you make changes to the source files.

   :::tip
   Type `o` in the terminal to open the site in your default browser. `h` will show you a list of available commands.
   :::

4. Make your changes in the appropriate files. Please follow the existing style and formatting.
5. When you are satisfied with your changes, run `npm run build` to ensure that the documentation builds correctly without errors.
6. Commit your changes with a clear and descriptive message.
7. Submit a pull request with a clear description of your changes and why they are needed.
8. Our team will review your pull request and provide feedback. Once approved, your changes will be merged into the main branch.

## Tech Stack

This website is built using [Astro](https://astro.build/), [Starlight](https://starlight.astro.build/getting-started/),and [Tailwind CSS](https://tailwindcss.com/).

Key plugins used in this project include:

- [starlightLinksValidator](https://docs.astro.build/en/guides/starlight/#starlight-links-validator) - Validates links in the documentation.

## How to Get Started

Documentation content is written in Markdown and organized in the `src/content/docs/docs` directory.

You are unlikely to need to edit the `astro.config.mjs` file, but if you do, please discuss this with the team first. This file provides the configuration for the documentation site, including the sidebar structure and navigation.

Details in other files are likely to be related to the site layout and styling, and should not be edited without consulting the team.
