# Here’s the briefr

The goal of this task is to create an application consisting of:

A client-side single-page application which must connect to the github API (see below) to:

- List the names of the repositories from an organisation (e.g. “nodejs”) which is entered via text input (plus button to change current org using value thereof)
- When clicking on a repository, expand and make a request to get the open issues from that repository
- Once the issues from the repository are retrieved, show them under the repo as nested items, by title
- Have an intermediate loading state (show "loading..." as the only item during this process)
- Handle errors while requesting the API by logging to the console
- A simple ul-li structure is fine, no styling necessary
- Only request issues once per repository

## Github API

Get repositories by org:
<https://api.github.com/orgs/nodejs/repos>

Get open issues by repository:
<https://api.github.com/repos/nodejs/reponame/issues?state=open>

Example list states:

Requesting the repos for an organisation:

``` html
<ul>
  <li>loading...</li>
</ul>
```

After loading the repos:

```html
<ul>
  <li>repo name 1</li>
  <li>repo name 2</li>
  <li>repo name 3</li>
</ul>
```

After clicking on a repo, while loading the issues:

``` html
<ul>
  <li>
    repo name 1
    <ul>
      <li>loading...</li>
    </ul>
  </li>
  <li>repo name 2</li>
  <li>repo name 3</li>
</ul>
```

After loading the issues for a repo:

``` html
<ul>
  <li>
    repo name 1
    <ul>
      <li>issue title 1</li>
      <li>issue title 2</li>
      <li>issue title 3</li>
    </ul>
  </li>
  <li>repo name 2</li>
  <li>repo name 3</li>
</ul>
```

## Considerations

- Please avoid boilerplate code (e.g. unused generated code)
- Write tests, but no need for extensive coverage, just the main cases
- Priorities making the code easy to read over performance
- Feel free to use babel/typescript
- Feel free to use any tooling chain you're comfortable with, including linting, etc
- Do not use callbacks for async calls - use either promises or async/await
- Feel free to use any UI library such as React, Vue, etc, and any state management library such as Redux, MobX, etc. Also feel free not to use any.
- Provide instructions to install, test and run the app. Make sure the app runs as directed from a fresh copy/clone.
