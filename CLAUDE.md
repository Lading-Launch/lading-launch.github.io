# CLAUDE.md

## CSS Architecture

- Use Tailwind utilities via `@apply` inside BEM class definitions in `global.css`
- Raw CSS properties should only be used when no Tailwind equivalent exists
- If a Tailwind utility exists for a property, use `@apply` — never write raw CSS for it
- Tailwind is the styling language. BEM classes are the semantic layer. Raw CSS is the exception.

## Branch Strategy

- Always branch off `develop` for new work
- Never commit directly to `main` or `develop`

## Code Style

- Use existing BEM components — don't recreate markup that has a class defined
- No nautical metaphors or themed language in copy
- All pricing must match the business plan exactly
