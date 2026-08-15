---
name: git-commit
description: 'Execute git commit with conventional commit message analysis, intelligent staging, and message generation. Use when user asks to commit changes, create a git commit, or mentions "/commit" — on any OS/shell, including Windows PowerShell and pwsh where quoting and multi-line messages are error-prone. Supports: (1) Auto-detecting the active shell and using the correct commit syntax, (2) Auto-detecting type and scope from changes, (3) Generating conventional commit messages from diff, (4) Interactive commit with optional type/scope/description overrides, (5) Intelligent file staging for logical grouping'
license: MIT
allowed-tools: Bash
---

# Git Commit with Conventional Commits

## Overview

Create standardized, semantic git commits using the Conventional Commits specification. Analyze the actual diff to determine appropriate type, scope, and message, then execute the commit using syntax that is safe for the shell currently in use.

## Conventional Commit Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Commit Types

| Type       | Purpose                        |
| ---------- | ------------------------------ |
| `feat`     | New feature                    |
| `fix`      | Bug fix                        |
| `docs`     | Documentation only             |
| `style`    | Formatting/style (no logic)    |
| `refactor` | Code refactor (no feature/fix) |
| `perf`     | Performance improvement        |
| `test`     | Add/update tests               |
| `build`    | Build system/dependencies      |
| `ci`       | CI/config changes              |
| `chore`    | Maintenance/misc               |
| `revert`   | Revert commit                  |

## Breaking Changes

```
# Exclamation mark after type/scope
feat!: remove deprecated endpoint

# BREAKING CHANGE footer
feat: allow config to extend other configs

BREAKING CHANGE: `extends` key behavior changed
```

## Workflow

### 0. Detect the Shell (do this FIRST)

The correct commit syntax depends on the shell. Never assume bash. Detect before running any commit command:

```powershell
# Returns a version in PowerShell/pwsh; errors in bash
$PSVersionTable.PSVersion
```

```bash
# Returns the shell name in bash/zsh; errors in PowerShell
echo "$0"
```

Classify into one of three environments and use the matching syntax in Step 4:

| Environment | How to recognize | PSEdition |
| --- | --- | --- |
| Bash / Zsh (Linux, macOS, Git Bash on Windows) | `echo "$0"` works | — |
| PowerShell 7+ (`pwsh`) | `$PSVersionTable.PSEdition` = `Core` | Core |
| Windows PowerShell 5.1 | `$PSVersionTable.PSEdition` = `Desktop` | Desktop |

Avoid `cmd.exe` for anything multi-line; if the user is in cmd, suggest running the commit from PowerShell or Git Bash.

### 1. Analyze Diff

```bash
# If files are staged, use staged diff
git diff --staged

# If nothing staged, use working tree diff
git diff

# Also check status
git status --porcelain
```

### 2. Stage Files (if needed)

If nothing is staged or you want to group changes differently:

```bash
# Stage specific files
git add path/to/file1 path/to/file2

# Stage by pattern — ALWAYS quote the pathspec so git (not the shell) expands it.
# This behaves identically in bash and PowerShell:
git add '*.test.*'
git add 'src/components/*'

# Interactive staging
git add -p
```

**Never commit secrets** (.env, credentials.json, private keys).

### 3. Generate Commit Message

Analyze the diff to determine:

- **Type**: What kind of change is this?
- **Scope**: What area/module is affected?
- **Description**: One-line summary of what changed (present tense, imperative mood, <72 chars)

### 4. Execute Commit

Pick the row that matches the detected shell:

| Case | Bash / Zsh | PowerShell (5.1 and 7+) |
| --- | --- | --- |
| Single line | `git commit -m "msg"` | `git commit -m 'msg'` (single quotes) |
| Multi-line | heredoc + `-m` | here-string variable + `-m $msg` |
| Message contains `"` on PS 5.1, or `--amend` multi-line | heredoc | temp file + `-F` (most robust, works everywhere) |

#### Bash / Zsh (Linux, macOS, Git Bash)

```bash
# Single line
git commit -m "<type>[scope]: <description>"

# Multi-line with body/footer (heredoc)
git commit -m "$(cat <<'EOF'
<type>[scope]: <description>

<optional body>

<optional footer>
EOF
)"
```

#### PowerShell (pwsh 7+ and Windows PowerShell 5.1)

**Rule 1 — single line: use SINGLE quotes.** In PowerShell, double quotes interpolate `$variables` and interpret backticks, silently corrupting messages like `fix: escape $HOME in config`. Single quotes are literal:

```powershell
# Single line (safe: no interpolation)
git commit -m 'fix(api): escape $HOME path in config loader'

# If the message itself contains a single quote, double it:
git commit -m 'fix(ui): don''t re-render list on hover'
```

**Rule 2 — multi-line: single-quoted here-string, then pass the variable.** Do NOT try `\n` (PowerShell doesn't interpret it) and do NOT use bash heredocs (invalid syntax in PS). The closing `'@` must start at column 1 with nothing before it:

```powershell
$msg = @'
<type>[scope]: <description>

<optional body>

<optional footer>
'@
git commit -m $msg
```

Use `@'...'@` (single-quoted), not `@"..."@`, unless you deliberately need variable interpolation.

**Rule 3 — maximum-compatibility fallback: temp file + `-F`.** Use this when the message contains double quotes on Windows PowerShell 5.1 (its native argument quoting is buggy), or for `git commit --amend` with a multi-line message:

```powershell
$msg = @'
<type>[scope]: <description>

<optional body>

<optional footer>
'@
$tmp = Join-Path ([IO.Path]::GetTempPath()) 'COMMIT_MSG.txt'
[IO.File]::WriteAllText($tmp, $msg)   # UTF-8 WITHOUT BOM on both 5.1 and 7+
git commit -F $tmp
Remove-Item $tmp
```

#### PowerShell encoding pitfall (BOM)

Never write the commit-message file with `Set-Content -Encoding utf8` on Windows PowerShell 5.1: it prepends a UTF-8 BOM, and the commit title ends up as `feat: ...`. Safe options:

- `[IO.File]::WriteAllText($path, $msg)` — no BOM on any PowerShell version (preferred, shown above)
- `Set-Content -Encoding utf8NoBOM` — pwsh 7+ only

This matters especially for messages with non-ASCII characters (accents, ñ, emoji).

#### Anti-patterns

```powershell
# DO NOT: multiple -m flags for body content — inserts blank lines between every item
git commit -m "title" -m "- item 1" -m "- item 2"

# DO NOT: double quotes with $ or backticks in PowerShell — interpolates/corrupts
git commit -m "fix: handle $PATH edge case"      # $PATH gets expanded!

# DO NOT: \n escapes — PowerShell passes them literally
git commit -m 'title\n\nbody'

# DO NOT: bash heredoc in PowerShell — syntax error
git commit -m "$(cat <<'EOF' ... )"
```

Use a heredoc (bash), here-string (PowerShell), or `-F <file>` instead.

### 5. Verify

After committing, confirm the message rendered correctly (especially on Windows):

```bash
git log -1 --pretty=full
```

If the message is malformed (BOM garbage, literal `\n`, missing body), do NOT amend blindly — regenerate the message with the temp-file `-F` method and use `git commit --amend -F <file>` only if the user agrees.

## Best Practices

- One logical change per commit
- Present tense: "add" not "added"
- Imperative mood: "fix bug" not "fixes bug"
- Reference issues: `Closes #123`, `Refs #456`
- Keep description under 72 characters

## Git Safety Protocol

- NEVER update git config
- NEVER run destructive commands (--force, hard reset) without explicit request
- NEVER skip hooks (--no-verify) unless user asks
- NEVER force push to main/master
- If commit fails due to hooks, fix and create NEW commit (don't amend)
