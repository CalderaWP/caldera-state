# Contributing To Caldera API  State
Thanks for your help. If you would like to contribute, you can [create a pull request](https://help.github.com/articles/about-pull-requests/) [here](https://github.com/CalderaWP/caldera-state/pulls).

Please review the readme for notes on development scripts and installation.

BTW I [did a talk](https://joshpress.net/redux-like-state-management-in-and-around-wordpress/) about developing this library.

## Commits And Branches

Please keep the following in mind:

* Do not commit to the master branch of your fork. Create 1 branch per pull request. Name that branch for the issue number.
    - Good: `feature/42` <- This adds the feature described in issue 42.
    - Good: `bug/11` <- This fixes the bug described in issue 11.
    - Find but not good `improve-form-endpoint` <- Descriptive, but not as descriptive as issue description is.
    - Bad: `patch-1` <- What Github creates by default.
* Every commit must have a descriptive commit message that references the issue number and relates to one change.
    - Good: `Added support for type argument in forms endpoint #42`  <- Short, descriptive, has issue #
    - Bad: `Added support for type argument in forms endpoint` <- No issue number
    - Bad: `Added several new things #42` <- Meaningless.
* Every commit must have a descriptive commit message that references the issue number and relates to one change.
* Run the linter

## Code Quality

* Tests are required
    - No pull requests that do not include tests or reduce the current test coverage will be rejected.
    - Run `yarn test:coverage` to generate a coverage report locally.
    - [You can use](./coverage/lcov-report/index.html) to find uncovered lines of code.
* All code must be documented inline using esdocs
    - Any pull request that reduces the documentation coverage will not be accepted.
* If you are adding a new feature, include an example of how to use the feature in the manual.

