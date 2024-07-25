# Keyboard - A Developer's Companion 🖥️⌨️

As a software developer, having the right tools can make all the difference. One tool that’s become indispensable in my setup is the Planck keyboard. I’ll walk you through why the Planck is such a great fit for my coding needs, how to get the most out of it and configurations.

[Plank Drop](https://drop.com/buy/planck-mechanical-keyboard?defaultSelectionIds=985560)

## 🤔 Why Planck? 

The Planck is a 40% compact mechanical keyboard that offers a minimalist design with a lot of customisation potential. Its compact size makes it highly portable, and the flexibility in key mapping allows me to optimise my typing experience for programming tasks.

## 🛠️ Setting Up Your Planck 
The heart of the Planck's customisation is its firmware. The Planck supports both QMK and VIA. If you prefer not to delve into the complexities of QMK, VIA is the best choice as it provides a user-friendly interface for customising your keyboard.
### 🔄 Erasing QMK Firmware 
Before you can use VIA, you need to remove the existing QMK firmware on your Planck keyboard.
1. Visit VIA Firmware from [VIA website](https://www.caniusevia.com/docs/download_firmware) and look for `planck_rev6_drop_via.bin`.
2. Install [QMK Toolbox](https://github.com/qmk/qmk_toolbox?tab=readme-ov-file)
3. Connect Planck to computer. 
4. To flash new firmware, Planck needs to be in boot loader mode. Usually, this involves holding down a specific key combination while plugging in the keyboard. Check your Planck's manual for the exact combination (often it's a combination of `Esc` + `Space` or a dedicated reset button).
5. Open QMK Toolbox and load the VIA firmware file you downloaded.
6. Click on the "Flash" button to erase the current firmware and replace it with the VIA firmware. Wait for the process to complete and your keyboard to reboot.
### 🎨 Setting Up VIA Configuration
Once the QMK firmware is replaced with VIA, you can start customising your Planck using VIA:
1. Download and install the VIA software from the [VIA GitHub page](https://github.com/the-via/releases) or [VIA website](https://usevia.app/)
2. Plug your Planck keyboard into your computer. VIA should automatically detect the keyboard if the firmware is correctly installed.
3. You should see your Planck keyboard listed and its layout displayed.
4. Use the VIA interface to drag and drop functions onto your key-map. VIA allows you to create multiple layers and assign various functions or macros to different keys.
5. Explore the different tabs and settings in VIA to adjust lighting, macros, and other features.
6. Once you’ve customised your key-map to your liking, save the configuration. VIA will automatically apply the changes to your keyboard
## ⌨ My Configs
I have created two separate configurations because some keys may not be recognised on both `Linux/Windows`, even though they perform the same function.
- [Mac - Planck Drop](https://github.com/jaypancholi94/configs/tree/main/planck/mac)
- [Linux/windows - Planck Drop](https://github.com/jaypancholi94/configs/blob/main/planck/ubuntu/planck.json)
### ⌨ Layout
#### Layer 0
```
┌────────┬──────┬──────┬──────┬────────┬───────┬───────┬────────┬───────┬──────┬──────┬───────┐
│ Tab    │ q    │ w    │ e    │ r      │ t     │ y     │ u      │ i     │ o    │ p    │ Bksp  │
├────────┼──────┼──────┼──────┼────────┼───────┼───────┼────────┼───────┼──────┼──────┼───────┤
│ Esc    │ a    │ s    │ d    │ f      │ g     │ h     │ j      │ k     │ l    │ ; :  │ ' "   │
├────────┼──────┼──────┼──────┼────────┼───────┼───────┼────────┼───────┼──────┼──────┼───────┤
│ LShift │ z    │ x    │ c    │ v      │ b     │ n     │ m      │ , <   │ . >  │ / ?  │ Enter │
├────────┼──────┼──────┼──────┼────────┼───────┼───────┼────────┼───────┼──────┼──────┼───────┤
│ M3     │ LWin │ LAlt │ LCTL │ Fn1(3) │ Space │ Space │ Fn2(3) │ LWin  │ Vol- │ Vol+ │       │
└────────┴──────┴──────┴──────┴────────┴───────┴───────┴────────┴───────┴──────┴──────┴───────┘
```

- `Fn1(3)`: Change to Layer 1
- `Fn2(3)`: Change to Layer 2
- `M3` : Macro | tmux | tmux super key

#### Layer 1
```
┌─────┬───┬────┬───┬────┬─────┬─────┬─────┬─────┬──────┬──────┬──────┐
│ ` ~ │   │ M2 │   │    │ [ { │ ] } │ 7 & │ 8 * │ 9 (  │ - _  │ ▼    │
├─────┼───┼────┼───┼────┼─────┼─────┼─────┼─────┼──────┼──────┼──────┤
│ ▼   │   │ M0 │   │ M1 │ {   │ }   │ 4 $ │ 5 % │ 6 ^  │ = +  │ \ |  │
├─────┼───┼────┼───┼────┼─────┼─────┼─────┼─────┼──────┼──────┼──────┤
│ ▼   │   │    │   │    │ (   │ )   │ 1 ! │ 2 @ │ 3 #  │ . >  │ ▼    │
├─────┼───┼────┼───┼────┼─────┼─────┼─────┼─────┼──────┼──────┼──────┤
│ ▼   │ ▼ │ ▼  │ ▼ │ ▼  │ ▼   │ ▼   │ ▼   │ 0 ) │ Scr- │ Scr+ │ Mute │
└─────┴───┴────┴───┴────┴─────┴─────┴─────┴─────┴──────┴──────┴──────┘
```

- `M0`: Macro | vim | save file | `Esc → :wa → Enter`
- `M1`: Macro | vim | search or replace | `Esc → :%s/`
- `M2`: Macro | vim | close file | `Esc → ␣bd`

#### Layer 2
```
┌────┬───┬───┬───┬───┬──────┬──────┬──────┬─────┬───┬─────┐
│ ▼  │   │   │   │   │      │      │      │     │   │ Del │
├────┼───┼───┼───┼───┼──────┼──────┼──────┼─────┼───┼─────┤
│ ▼  │   │   │   │   │ ←    │ ↓    │ ↑    │ →   │   │     │
├────┼───┼───┼───┼───┼──────┼──────┼──────┼─────┼───┼─────┤
│ ▼  │   │   │   │   │ Home │ PgDn │ PgUp │ End │   │     │
├────┼───┼───┼───┼───┼──────┼──────┼──────┼─────┼───┼─────┤
│ ▼  │ ▼ │ ▼ │ ▼ │ ▼ │ ▼    │ ▼    │ ▼    │ ▼   │ ▼ │ ▼   │
└────┴───┴───┴───┴───┴──────┴──────┴──────┴─────┴───┴─────┘
```

#### Layer 3
```
┌────┬────┬────┬────┬────┬────┬────┬────┬────┬─────┬─────┬─────┐
│ F1 │ F2 │ F3 │ F4 │ F5 │ F6 │ F7 │ F8 │ F9 │ F10 │ F11 │ F12 │
├────┼────┼────┼────┼────┼────┼────┼────┼────┼─────┼─────┼─────┤
│    │    │    │    │    │    │    │    │    │     │     │     │
├────┼────┼────┼────┼────┼────┼────┼────┼────┼─────┼─────┼─────┤
│    │    │    │    │    │    │    │    │    │     │     │     │
├────┼────┼────┼────┼────┼────┼────┼────┼────┼─────┼─────┼─────┤
│    │    │    │    │    │    │    │    │    │     │     │     │
└────┴────┴────┴────┴────┴────┴────┴────┴────┴─────┴─────┴─────┘
```

