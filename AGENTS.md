# Agent Documentation

This document describes the AI agents configured for this project, their responsibilities, and guidelines for working with them.

## Agent: Next.js Development Agent

### Purpose

Assists with Next.js-specific development tasks, including routing, components, and framework-specific features.

### Responsibilities

- Next.js app router configuration and optimization
- Server and client component implementation
- Image optimization and font loading
- API route development
- Build configuration and deployment guidance

### Important Constraints

<!-- BEGIN:nextjs-agent-rules -->

**This is NOT the Next.js you know**

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide at https://nextjs.org/docs before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

### Expected Inputs/Outputs

- **Input**: Feature requests, bug reports, code improvement suggestions
- **Output**: Code changes, configuration updates, implementation guidance

### Lifecycle

- Activated on-demand for Next.js-specific tasks
- No persistent state between invocations

### Contact

Refer to repository maintainers listed in package.json

---

## How to Add a New Agent

1. Create a new section in this file with the agent name as an H2 heading
2. Document the agent's purpose, responsibilities, and public interface
3. List expected inputs/outputs and any configuration variables
4. Specify lifecycle behavior (startup/shutdown, persistence)
5. Provide owner/team contact information
6. Update any relevant configuration files (e.g., `.github/`, CI/CD pipelines)

For implementation details, see the Next.js agent rules above and any additional framework-specific documentation in `node_modules/next/dist/docs/`.
