# Vim Cheat sheet 
`<C...` : Control button
## Navigation
### Directions

| Key                | Description       |
| ------------------ | ----------------- |
| `h`, `j`, `k`, `l` | Arrow keys        |
| `<C-u>` / `<C-d>`  | Half-page up/down |
| `<C-B>` / `<C-F>`  | Page up/down      |
### Words
| `b` / `w`  | Previous/next word        |
| ---------- | ------------------------- |
| `ge` / `e` | Previous/next end of word |

### Line
| `0` | Start of line                    |
| --- | -------------------------------- |
| `^` | Start of line (after whitespace) |
| `$` | End of line                      |
### Character
| `fj` | To highlight all occurrences of the character `j` forward and move the cursor to the first upcoming `j`, press `f`. Press `f` again to jump to the next occurrence of `j` |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Fj` | To highlight all occurrences of the character `j` backward and move the cursor to the last `j`, press `f`. Press `f` again to jump to the previous occurrence of `j`      |
### Document
| `gg`        | First line             |
| ----------- | ---------------------- |
| `G`         | Last line              |
| `:{number}` | Go to line {number}    |
| `{number}G` | Go to line {number}    |
| `{number}j` | Go down {number} lines |
| `{number}k` | Go down {number} lines |
### Search

| `n` | Next matching search pattern     |
| --- | -------------------------------- |
| `N` | Previous match                   |
| `*` | Next whole word under cursor     |
| `#` | Previous whole word under cursor |
