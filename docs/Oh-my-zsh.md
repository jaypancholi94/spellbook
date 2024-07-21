# oh-my-zsh

## 🛠 Installation

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

## 🎨 Theme Installation
### Powerlevel10k
[Powerlevel10k](https://github.com/romkatv/powerlevel10k) is the most versatile theme on market which can be rich and minimalistic at the same time. To install it use below command

1. Clone the repository:

```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

2. Set `ZSH_THEME="powerlevel10k/powerlevel10k"` in `~/.zshrc`.
3. Run `omz reload` in terminal.

#### Theme `Powerlevel10K` Configuration

To configure `Powelevel10K`, type `p10k configure`
![Alt Text](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/configuration-wizard.gif)

### Starship - cross-shell prompt
If you are a person, who does not want to get into theme setup rabbit hole, then Starship is for you. It is simple to install and setup. Starship also provide presents.
#### Installation & Configuration
1. [[Homebrew]] install
```shell
brew install starship
```
2. Open zsh config and add below line at the very end of `.zsh` file.
```
eval "$(starship init zsh)"
```
3. [Presets | Starship](https://starship.rs/presets/). One simple step to install preset.
```shell
starship preset nerd-font-symbols -o ~/.config/starship.toml
```
 4. If you still want more customisation, then simply modify `~/.config/starship.toml`. 

## ➕ Useful Plugins

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

Here are some cool plugin I use the most
- git
- dotenv
- zsh-autosuggestions
- f-sy-h
More plugin can be find [here](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins).
## 📝Cheat sheet

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
