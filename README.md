![Logo](https://www.joestrusz.com/images/logo_small.png)
# Discord-Blockchain-Bot
```css
Author { Joe Strusz }
Description { A bot for retrieving blockchain information from various explorer APIs. }
```


## Features
- [x] Stand Alone, Self Host Bot
- [x] Linux/Windows/OSX Support
- [x] Updateable Bootstrap from GitHub
- [x] Get Bot Host Statistics (CPU, Memory, other Resources and Process Lists)



## Requirements
* Ubuntu 16.04 or Greater
* Node.js 8.x or Greater
* Basic Node, Blockchain, and Linux Knowledge



## Installation
1. Decide where you want to store the files. For all of my examples I use `/storage` in the root filesystem. 
2. Login as root, and create our storage location: `mkdir /storage` and now change to that location with: `cd /storage`
3. Checkout this repository with: `git clone --recursive https://github.com/joestrusz/discord-blockchain-bot.git`
4. Now, change into our newly check out source directory with: `cd /storage/discord-blockchain-bot` 
5. We will need to copy the example config to the actual config location with: `cp config.json.example config.json`
6. Now we need to open this file and change some basic options. I use nano editor: `nano config.json`
7. You need to replace the following items, minimal to get the bot working:
```json
{
"bot_prefix" : "Your Bot's Token",
"bot_admin_id" : "Your User's Discord ID",
"bot_token" : "Your BOT's Token",
"bot_web_port" : "A web Port to access the Bot Statistics",
"discord_server_id" : "The Server ID you want the Bot to Join",
}
```

8. Once that is complete, you can now issue and update the required Node modules with `npm update`. 



## Help and Contact Information
> Website: https://www.joestrusz.com

> Discord: https://discord.gg/3RaHZFj

