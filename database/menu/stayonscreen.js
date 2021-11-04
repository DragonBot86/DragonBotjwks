const stayonscreen = (prefix, ownerBot, botName) => {
        return `
「 *${DragonBot}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${Dragon}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *MENU*
  │
  └─ ❏ ${prefix}afk`
}
exports.stayonscreen = stayonscreen
