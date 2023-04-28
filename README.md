# Summary

To be eligible for front-end code only submission in the game competition on https://quizlet.com/labs/games/student-competition, the game must be built using [Next.js](https://nextjs.org), [Turbo Monorepo](https://github.com/vercel/turbo) and TypeScript. For eligibility requirement, please visit the [submission page](https://quizlet.com/labs/games/student-competition) for details.

# Setup

## Clone and Duplicate GitHub Repository

1. Create your private GitHub Repository for your game

2. Run the following commands:

```shell
git clone --bare https://github.com/quizlet/game-competitions.git
cd game-competitions.git
git push --mirror https://github.com/<USERNAME>/<GAME TITLE>.git
cd ..
git clone https://github.com/<USERNAME>/<GAME TITLE>.git
cd <GAME TITLE>
```

3. [Add the following collaborator](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository) to your cloned repository: `quizlet-engineering-bot@quizlet.com`

## Setup Node

We are using node version 18.15.0. [Setup guide](/docs/SETUP_NODE.md)

# Where to start

Turbo Monorepo is designed to provide developers with the flexibility to install their desired node packages. To ensure proper functionality, **all code must be placed within the `apps/games` directory**, as code outside this directory will not be part of the submission. Within this directory, developers can customize their environment by installing their preferred `CSS framework`, configuring `tsconfig` preferences, and making additional adjustments as needed.

> Important: All code must be placed within `apps/games` directory

![Code Placement](/apps/home/public/CodePlacement.png)

## Dataset

The provided summary outlines the structure and usage of example datasets available for developers. Each dataset consists of two fields: `set` and `studiableItem`. A set contains multiple `studiableItem`, which in turn include a term and definition with their list of media types. The media types can be text or image or both. Developers must utilize one or more of these example datasets for their submitted games.

Here are all the datasets in quizlet.com:

- [Fun](https://quizlet.com/QEngBot/folders/game-competitions-fun/sets)
- [Game](https://quizlet.com/QEngBot/folders/game-competitions-games/sets)
- [Geography](https://quizlet.com/QEngBot/folders/game-competitions-geography/sets)
- [Humanities](https://quizlet.com/QEngBot/folders/game-competitions-humanities/sets)
- [Language](https://quizlet.com/QEngBot/folders/game-competitions-language/sets)
- [Science](https://quizlet.com/QEngBot/folders/game-competitions-science/sets)

To import a dataset, developers have multiple categories of sets to choose from.

```typescript
import Quizlet from "dataset"; // All sets

import Fun from "dataset/Fun";
import Games from "dataset/Games";
import Geography from "dataset/Geography";
import Humanities from "dataset/Humanities";
import Language from "dataset/Language";
import Science from "dataset/Science";
```

Place above at the beginning of their React component. For instance, accessing the dataset from https://quizlet.com/415/us-state-capitals-flash-cards/ can be done using

```typescript
import Geography from "dataset/Geography"; // Geography sets

const { usStateCapitals } = Geography.getAllSetsMap();
const { set, studiableItem } = usStateCapitals;
```

We recommend you select random Sets to ensure that your game works with a variety of different content students may be studying on Quizlet. Better yet, you can provide user the ability to select their set.

```typescript
import Geography from "dataset/Geography"; // Geography sets

const quizletSet = Geography.getRandomSet(); // Random sets from Geography
```

```typescript
import Quizlet from "dataset"; // All sets

const quizletSet = Quizlet.getRandomSet(); // Random sets from all
```

To improve dataset maintainability and visibility, React and TypeScript are integrated and all datasets are properly typed. This enables developers to easily inspect types in VSCode by hovering the cursor over them or by referencing [packages/dataset/types.ts](/packages/dataset/types.ts) file.

![Dataset Typescript](/apps/home/public/DataSet.png)

For more detail on the structure of each dataset, navigate to [packages/dataset/json/](/packages/dataset/json/). For an example of how to display the content within a Set, navigate to [apps/game/pages/index.tsx](apps/game/pages/index.tsx) - this is also the starting point for developing your game!

## Run dev locally

1. Run the command `yarn dev` in the terminal to start the development server.
2. Wait for the development server to start up.
3. Open your web browser and navigate to http://localhost:3000/game
4. You should see your Next.js app running in the browser.

> [Guide to resolve port conflicts](/docs/PORT_ISSUES.md)

For windows users that are having difficulty running `yarn dev`, install turbo globally through:

```
yarn install -g turbo
```

Then modify to the following:

![Window Turbo Setup](/apps/home/public/WindowsSetup.png)

## Development Guide and Structure

NextJS offers a comprehensive guide (https://nextjs.org/docs/getting-started) on setting up a game app, including CSS Framework customization. Developers should place all code within the apps/game directory.

> All external requests during runtime outside of the repository are not recommended.

> To disable Server Side rendering, we highly encourage developers to add `if (typeof window !== 'undefined') return null;` at the start of the page.

## Judging Criterias on Code Quality

We will evaluate the submitted code based on overall code quality. Key criteria for evaluation include but not limited to the following:

- Adherence to DRY (Don't Repeat Yourself) principles
- Single responsibility principle
- Optimized performance
- Logical application of concepts
- Proficiency in mobile-friendly development
- Proper usage of test cases
- Appropriate amount of documentation and comments

Additionally, the code should demonstrate proficiency in the React framework, chosen CSS framework, and have a strong familiarity with ES6 features.

# Game Submission

1. Visit https://quizlet.com/labs/games/student-competition
2. Logged in and verify your email.
3. Record a video of your game and upload it to YouTube
4. Fill out the submission form with your game title,
5. Submit the form to complete your game submission.

---

## Need Help?

We setup a Discord Server for community discussion. [Click here](https://discord.gg/FpnefgDRqN) for invite.
