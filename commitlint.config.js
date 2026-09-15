// Enforces the Conventional Commits format the repository history already
// follows. Run from .husky/commit-msg on every commit.
export default {
  extends: ["@commitlint/config-conventional"],
};
