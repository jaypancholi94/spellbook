#  LazyVim 💤
## ⚡Prerequisite 
- Neovim >= **0.9.0** (needs to be built with **LuaJIT**), I use 0.10.0
- Git >= **2.19.0** (for partial clones support)
- a [Nerd Font](https://www.nerdfonts.com/)(v3.0 or greater) **_(optional, but needed to display some icons)_**
- [[LazyGit]] **(optional)**
## 🛠 Installation
1. Make a back up of your current Neovim files:
```zsh
# required
mv ~/.config/nvim{,.bak}

# optional but recommended
mv ~/.local/share/nvim{,.bak}
mv ~/.local/state/nvim{,.bak}
mv ~/.cache/nvim{,.bak}
```
2. Clone the starter or my customised lazyvim repository
::: code-group
```zsh [Customised Lazyvim]
git clone https://https://github.com/jaypancholi94/nvim-config ~/.config/nvim
```
```zsh [Starter]
git clone https://github.com/LazyVim/starter ~/.config/nvim
```
:::
3. Remove the `.git` folder, so you can add it to your own repo later
``` zsh
rm -rf ~/.config/nvim/.git
```
4. Start Neovim 😄
```zsh
nvim
```
::: tip
It is recommended to run `:LazyHealth` after installation. This will load all plugins and check if everything is working correctly.
:::

## ⚙ Configuration
The files under config will be automatically loaded at the appropriate time, so you don't need to require those files manually. For more information, see [general settings](https://www.lazyvim.org/configuration/general).
Configuration for LazyVim is endless. Here, is the structure for my LazyVim setup
```
~/.config/nvim
├── lua
│   ├── config
│   │   ├── autocmds.lua
│   │   ├── keymaps.lua
│   │   ├── lazy.lua
│   │   └── options.lua
│   └── plugins
│       ├── colorscheme.lua
│       ├── copilot.lua
│       ├── example.txt # file in the LazyVim starter repo is kept as a reference and has been converted to `.txt` to prevent it from being loaded
│       ├── lsp-config
│       ├── lualine.lua
│       ├── neo-tree.lua
│       ├── neo-treesitter.lua
│       ├── nvim-notify.lua
│       └── tailwind.lua
└── init.toml
```
::: danger
Do not `require` `autocmds`, `keymaps`, `lazy` or `options` under `lua/config/` or `lazyvim.config` manually. **LazyVim** will load those files automatically.
:::
## ➕ Plugins
To add plugins in LazyVim, create a file under `nvim/lua/plugins/` named `new-plugin.lua`. Specify the repository name in this file. Further plugin customization should be available in the respective plugin's README file. Once the Lua file is added, it will be loaded automatically. More details for plugin [here](https://www.lazyvim.org/configuration/plugins).
```lua
return {
	`github/new-plugin`,
	enable = false, -- Manually overwrite plugin
}
```
