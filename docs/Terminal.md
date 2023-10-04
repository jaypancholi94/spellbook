# Terminal

## Terminal: The Dev's Not-So-Secret Love Affair 😂

Ah, the terminal - that quirky, old-school friend of developers! 🤓 It's like a time machine to the '80s, but trust me, it's not just for nostalgia. This bad boy handles coding, project juggling, and even unleashes our inner script-magicians. 🧙‍♂️ It's like the ultimate multitool, and who doesn't love feeling like a command-line superhero? 🦸‍♂️ Stick around, and we'll unveil all the secrets of this retro-cool, text-based wizardry! 😎🚀

## List of terminals

Terminal that I have used in past

1. Terminal (Built-in): Let's face it, we all know about it. Simple not so fancy. But hey, it gets the job done
2. [iTerm2](#iterm2) - Most customisable terminal in the market. Just imagine built-in terminal on steroid 💊
3. [Warp](https://www.warp.dev/): Terminal with ai power

## shell

in a nutshell, the shell is your coding maestro, while the terminal is the messenger boy, shuttling your commands to and fro. They're a dynamic duo, working together to bring your code to life, even if they sometimes give you a bewildered look when you're not clear about what you want. 🧙‍♂️🍽️

**Zsh (Z Shell)**: It's like the upgraded sibling of Bash. It's like Bash's suave alter ego, with advanced auto-completion and syntax highlighting in its bag of tricks.

**Oh My Zsh**: picture Oh My Zsh as the personal stylist for Zsh, transforming it from a casual dresser to a fashion icon. With an array of plugins and themes, it's like giving Zsh a makeover, turning it into the dazzling star of the shell realm.

## iTerm2

iTerm2 is my current Not-So-Secret Love Affair. ❤️
Download iTerm2 from [here](https://iterm2.com/downloads.html) and Install it.

### Setup to look more appealing

If you prefer minimalist design you should configure iTerm2 as I did

1. Open iTerms2 preferences. `cmd + ,`
2. Go To `Appearance`

- Set Theme to `Compact`
- Tab bar location to `Top`
- Status bar location to `Bottom`

3. Go to `Profiles` and create new profile clicking `+`

- I am using `Snazzy` as colour scheme, [here you can explore more schemes](https://iterm2colorschemes.com/)

## `oh-my-zsh`

### Installation

1. You'll need `zsh` to install **Oh My Zsh**. Run `zsh --version` to check if you have it:

```shell
$ zsh --version
zsh 5.8 (x86_64-ubuntu-linux-gnu)
```

If you see `command not found` you don't have zsh installed. See [Installing Zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH) for instructions.

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

**NOTE: the installer will rename an existing `.zshrc` file to `.zshrc.pre-oh-my-zsh`.**

### Theme Installation

[Powerlevel10k](https://github.com/romkatv/powerlevel10k) is the most versatile theme on market which can be rich and minimalistic at the same time. To install it use below command

1. Clone the repository:

```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

2. Set `ZSH_THEME="powerlevel10k/powerlevel10k"` in `~/.zshrc`.
3. Run `omz reload` in terminal.

### Theme `Powerlevel10K` Configuration

To configure `Powelevel10K`, type `p10k configure`
![Alt Text](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/configuration-wizard.gif)

### Useful Plugins

1. Clone plugin to `~/.oh-my-zsh/custom}/plugins` directory

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

2. Once cloned, add it to `.zshrc` file

```shell
code ~/zshrc
```

3. Add plugin snippet

```zshrc
plugins=(
  ...other plugin...
  zsh-autosuggestions
)

source $ZSH/oh-my-zsh.sh
```

4. Save `.zshrc` and exit the editor
5. In order to activate the changes we need to reload the `.zshrc`

```shell
omz reload
```

Here are some cool most used plugin list

- git
- dotenv
- zsh-autosuggestions
- f-sy-h

## Cheatsheet

Quick reference:

- Oh My Zsh's Command-Line Interface (CLI): `omz`. Run `omz --help` for available commands.
- To **update** Oh My Zsh: `omz update`.
- To **uninstall** it: `uninstall_oh_my_zsh`.
- To apply changes made to `.zshrc`: `omz reload` (this just runs `exec zsh`). [**Do NOT run `source ~/.zshrc`**](https://github.com/ohmyzsh/ohmyzsh/wiki/FAQ#how-do-i-reload-the-zshrc-file).

### Commands

| Command     | Description                                                                                                                                                                                                                                                                                                         |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `alias`     | List all aliases                                                                                                                                                                                                                                                                                                    |
| `mkcd`      | Create a new directory and change to it, will create intermediate directories as required.                                                                                                                                                                                                                          |
| `take`      | Like `mkcd`, but also knows how to handle remote URLs. When given an argument that looks like a URL (something that ends in `.git` or `.tar.(gz\|bz2\|xz)`), download the remote resource and extract it (if necessary) into the current directory. Then change to the newly extracted/downloaded/cloned directory. |
| `zsh_stats` | Get a list of the top 20 commands and how many times they have been run.                                                                                                                                                                                                                                            |

### Directory

| Alias      | Command                                    |
| :--------- | :----------------------------------------- |
| `md`       | `mkdir -p`                                 |
| `rd`       | `rmdir`                                    |
| `cd` / `~` | `cd` to your home directory                |
| `..`       | `cd ..`                                    |
| `...`      | `cd ../..`                                 |
| `....`     | `cd ../../..`                              |
| `.....`    | `cd ../../../..`                           |
| `/`        | `cd /`                                     |
| `d`        | `dirs -v` (lists last visited directories) |
| `cd +n`    | Switch to directory number `n`             |
| `-`        | `cd` to last visited directory             |
| `1`        | `cd -1`                                    |
| `2`        | `cd -2`                                    |
| `3`        | `cd -3`                                    |
| `4`        | `cd -4`                                    |
| `5`        | `cd -5`                                    |
| `6`        | `cd -6`                                    |
| `7`        | `cd -7`                                    |
| `8`        | `cd -8`                                    |
| `9`        | `cd -9`                                    |
