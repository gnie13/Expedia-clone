\#Contributing

## Getting set up

Follow the "Getting Started" section in the README to get a local environment running before

making changes.



\## Making a change

1\. Fork the repo and create a branch off `main`: `git checkout -b your-feature-name`

2\. Make your changes, keeping them focused on a single concern per branch/PR.

3\. Run `CI=false npm run build` to confirm the app still builds.

4\. Commit with a clear, descriptive message.

5\. Push your branch and open a pull request describing what changed and why.



\## Code style

\- Follow the existing patterns in the file you're editing (functional components, Redux

&#x20; action/reducer pairs under `src/Redux`).

\- Please don't commit real API keys or credentials — use your own Firebase project for testing.



\## Reporting issues

Open a GitHub issue with steps to reproduce, what you expected, and what actually happened.

Screenshots or console/network errors are especially helpful for auth-related bugs.

