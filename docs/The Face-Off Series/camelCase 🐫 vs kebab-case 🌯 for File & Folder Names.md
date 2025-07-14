---
title: "Face-Off: camelCase 🐫 vs kebab-case 🌯 for File Names"
description: "Which naming style is best for modern file and folder naming? Here's a clear comparison."
---

# `camelCase` 🐫 vs `kebab-case` 🌯 for File & Folder Names

Naming conventions can shape readability, portability, and dev ergonomics. When it comes to file and folder names, the two common contenders are `camelCase` and `kebab-case`. Here’s a head-to-head breakdown to help you choose the right one for your projects.

## 🖥️ Cross-Platform Compatibility

**camelCase**  
❌ Can be risky across case-sensitive systems. For example, `MyFile.ts` and `myfile.ts` are treated as different files on macOS/Linux, but the same on Windows.

**kebab-case**  
✅ Lowercase and hyphenated — no casing ambiguity. It behaves consistently across all operating systems and avoids weird Git diffs.

**Verdict:** `kebab-case` is safer and more reliable in team environments.

## 👁️ Readability

**camelCase**  
🤷‍♂️ Acceptable in code, but filenames like `myAwesomeComponent.tsx` aren’t easy to scan.

**kebab-case**  
✅ Clearly separates words. `my-awesome-component.tsx` is easier to skim in long directory trees.

**Verdict:** `kebab-case` wins for visual clarity.

## 🌐 Web and CLI Friendliness

**camelCase**  
❌ Not ideal in URLs or shell commands. May require shift key usage and can look awkward in slugs.

**kebab-case**  
✅ Designed for web paths and CLI usage. Works great in `/routes/get-started` or terminal commands like `vite-plugin-name`.

**Verdict:** `kebab-case` is cleaner for URLs and command-line tools.

## 🧱 Ecosystem Convention

**camelCase**  
🟡 Common for JavaScript variables and functions, but rare in file names.

**kebab-case**  
✅ Standard in open-source: npm packages (`react-router`, `eslint-config-prettier`), GitHub repos, CLI tools, etc.

**Verdict:** `kebab-case` aligns with ecosystem norms.

## 🧠 Context Clarity

**camelCase**  
😕 Might blur the line between code identifiers and files.

**kebab-case**  
✅ Clearly signals “this is a file or folder,” not a function or variable.

**Verdict:** `kebab-case` offers better contextual separation.

## ✅ Final Take

Stick with **`camelCase`** for code (variables, functions, props)  
Use **`kebab-case`** for files and folders

> It’s simpler, safer, easier to type, and aligns with modern tooling.


## 📌 TL;DR

| Aspect                 | camelCase 🐫     | kebab-case 🌯     | Winner         |
|------------------------|------------------|-------------------|----------------|
| Cross-platform safety  | ❌ Risky         | ✅ Safe            | kebab-case     |
| Readability            | 🤷‍♂️ Okay         | ✅ Clear           | kebab-case     |
| CLI/URL friendliness   | ❌ Clunky        | ✅ Smooth          | kebab-case     |
| Ecosystem alignment    | ❌ Rare          | ✅ Common          | kebab-case     |
| Code/file distinction  | 😕 Mixed         | ✅ Obvious         | kebab-case     |


## 📚 Further Reading

- [Naming Cheatsheet by @kettanaito](https://github.com/kettanaito/naming-cheatsheet)
- [npm Package Naming Rules](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#name)

