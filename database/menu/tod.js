const tod = (prefix, ownerBot, botName) => {
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
◪ *TOD*
  │
  ├─ ❏ ${prefix}trust
  └─ ❏ ${prefix}dare`
}
exports.tod = tod
