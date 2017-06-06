# ReactJS HackerNews App
* Inspired by https://leanpub.com/the-road-to-learn-react

## Objectives
- Use redux-thunk
- Use Higher Order Components

## async redux.
Let's modify our app in a way that it holds onto previously fetched results for all search terms, so that if the user searches for a previously searched term, the old results are displayed. In order to accomplish this, let's do the following:

- Modify to store to keep track of results per search term.
- Modify the fetchSearchTopStories to only fetch stories if we don't already have stories for that search term.

Now:
- fetchSearchTopStories to also not fetch any stories if we are already fetching stories for that search term
