# `ejabberd-api-client`

`@appunto/ejabberd-api-client` is a simple client library created to access ejabberd administration REST API.

You can find more information on [ejabberd API here](https://docs.ejabberd.im/developer/ejabberd-api/admin-api).


## Installation

```
npm install @appunto/ejabberd-api-client
```

## Usage

```
const Client = require('@appunto/ejabberd-api-client');

const client = new Client('localhost', 5443);

client.status().then(
  result => console.log(result);
);
// This prints:
// The node ejabberd@1cb0f68fe610 is started. Status: startedejabberd 19.8.0 is running in that node

client.registeredUsers('localhost').then(
  result => console.log(result.join(', ')):
);
// This prints:
// user1, user2, ...

```
## API

### `Client(host, port)`

Creates a new client. If not specified, following default values apply:

`host = localhost`
`port = 5443`;

### `client.changePassword(user, host, newpass)`
executes:
```
POST /api/change_password
{
  "user" : <some_value>,
  "host" : <some_value>,
  "newpass" : <some_value>
}
```

### `client.changeRoomOption(name, service, option, value)`
executes:
```
POST /api/change_room_option
{
  "name" : <some_value>,
  "service" : <some_value>,
  "option" : <some_value>,
  "value" : <some_value>
}
```

### `client.checkAccount(user, host)`
executes:
```
POST /api/check_account
{
  "user" : <some_value>,
  "host" : <some_value>
}
```

### `client.checkPassword(user, host, password)`
executes:
```
POST /api/check_password
{
  "user" : <some_value>,
  "host" : <some_value>,
  "password" : <some_value>
}
```

### `client.connectedUsers()`
executes:
```
POST /api/connected_users
{

}
```

### `client.connectedUsersInfo()`
executes:
```
POST /api/connected_users_info
{

}
```

### `client.connectedUsersNumber()`
executes:
```
POST /api/connected_users_number
{

}
```

### `client.connectedUsersVhost(host)`
executes:
```
POST /api/connected_users_vhost
{
  "host" : <some_value>
}
```

### `client.createRoom(name, service, host)`
executes:
```
POST /api/create_room
{
  "name" : <some_value>,
  "service" : <some_value>,
  "host" : <some_value>
}
```

### `client.createRoomWithOpts(name, service, host, options)`
executes:
```
POST /api/create_room_with_opts
{
  "name" : <some_value>,
  "service" : <some_value>,
  "host" : <some_value>,
  "options" : <some_value>
}
```

### `client.deleteExpiredMessages()`
executes:
```
POST /api/delete_expired_messages
{

}
```

### `client.deleteOldMamMessages(type, days)`
executes:
```
POST /api/delete_old_mam_messages
{
  "type" : <some_value>,
  "days" : <some_value>
}
```

### `client.deleteOldMessages(days)`
executes:
```
POST /api/delete_old_messages
{
  "days" : <some_value>
}
```

### `client.deleteOldPushSessions(days)`
executes:
```
POST /api/delete_old_push_sessions
{
  "days" : <some_value>
}
```

### `client.deleteOldUsers(days)`
executes:
```
POST /api/delete_old_users
{
  "days" : <some_value>
}
```

### `client.deleteOldUsersVhost(host, days)`
executes:
```
POST /api/delete_old_users_vhost
{
  "host" : <some_value>,
  "days" : <some_value>
}
```

### `client.deleteRosteritem(localuser, localserver, user, server)`
executes:
```
POST /api/delete_rosteritem
{
  "localuser" : <some_value>,
  "localserver" : <some_value>,
  "user" : <some_value>,
  "server" : <some_value>
}
```

### `client.destroyRoom(name, service)`
executes:
```
POST /api/destroy_room
{
  "name" : <some_value>,
  "service" : <some_value>
}
```

### `client.getLast(user, host)`
executes:
```
POST /api/get_last
{
  "user" : <some_value>,
  "host" : <some_value>
}
```

### `client.getLoglevel()`
executes:
```
POST /api/get_loglevel
{

}
```

### `client.getOfflineCount(user, server)`
executes:
```
POST /api/get_offline_count
{
  "user" : <some_value>,
  "server" : <some_value>
}
```

### `client.getPresence(user, server)`
executes:
```
POST /api/get_presence
{
  "user" : <some_value>,
  "server" : <some_value>
}
```

### `client.getRoomAffiliation(name, service, jid)`
executes:
```
POST /api/get_room_affiliation
{
  "name" : <some_value>,
  "service" : <some_value>,
  "jid" : <some_value>
}
```

### `client.getRoomAffiliations(name, service)`
executes:
```
POST /api/get_room_affiliations
{
  "name" : <some_value>,
  "service" : <some_value>
}
```

### `client.getRoomOccupants(name, service)`
executes:
```
POST /api/get_room_occupants
{
  "name" : <some_value>,
  "service" : <some_value>
}
```

### `client.getRoomOccupantsNumber(name, service)`
executes:
```
POST /api/get_room_occupants_number
{
  "name" : <some_value>,
  "service" : <some_value>
}
```

### `client.getRoomOptions(name, service)`
executes:
```
POST /api/get_room_options
{
  "name" : <some_value>,
  "service" : <some_value>
}
```

### `client.getRoster(user, server)`
executes:
```
POST /api/get_roster
{
  "user" : <some_value>,
  "server" : <some_value>
}
```

### `client.getSubscribers(name, service)`
executes:
```
POST /api/get_subscribers
{
  "name" : <some_value>,
  "service" : <some_value>
}
```

### `client.getUserRooms(user, host)`
executes:
```
POST /api/get_user_rooms
{
  "user" : <some_value>,
  "host" : <some_value>
}
```

### `client.getVcard(user, host, name)`
executes:
```
POST /api/get_vcard
{
  "user" : <some_value>,
  "host" : <some_value>,
  "name" : <some_value>
}
```

### `client.getVcard2(user, host, name, subname)`
executes:
```
POST /api/get_vcard2
{
  "user" : <some_value>,
  "host" : <some_value>,
  "name" : <some_value>,
  "subname" : <some_value>
}
```

### `client.getVcard2Multi(user, host, name, subname)`
executes:
```
POST /api/get_vcard2_multi
{
  "user" : <some_value>,
  "host" : <some_value>,
  "name" : <some_value>,
  "subname" : <some_value>
}
```

### `client.kickSession(user, host, resource, reason)`
executes:
```
POST /api/kick_session
{
  "user" : <some_value>,
  "host" : <some_value>,
  "resource" : <some_value>,
  "reason" : <some_value>
}
```

### `client.kickUser(user, host)`
executes:
```
POST /api/kick_user
{
  "user" : <some_value>,
  "host" : <some_value>
}
```

### `client.mucOnlineRooms(host)`
executes:
```
POST /api/muc_online_rooms
{
  "host" : <some_value>
}
```

### `client.mucOnlineRoomsByRegex(host, regex)`
executes:
```
POST /api/muc_online_rooms_by_regex
{
  "host" : <some_value>,
  "regex" : <some_value>
}
```

### `client.mucRegisterNick(nick, jid, serverhost)`
executes:
```
POST /api/muc_register_nick
{
  "nick" : <some_value>,
  "jid" : <some_value>,
  "serverhost" : <some_value>
}
```

### `client.mucUnregisterNick(jid, serverhost)`
executes:
```
POST /api/muc_unregister_nick
{
  "jid" : <some_value>,
  "serverhost" : <some_value>
}
```

### `client.numActiveUsers(host, days)`
executes:
```
POST /api/num_active_users
{
  "host" : <some_value>,
  "days" : <some_value>
}
```

### `client.numResources(user, host)`
executes:
```
POST /api/num_resources
{
  "user" : <some_value>,
  "host" : <some_value>
}
```

### `client.oauthIssueToken(jid, ttl, scopes)`
executes:
```
POST /api/oauth_issue_token
{
  "jid" : <some_value>,
  "ttl" : <some_value>,
  "scopes" : <some_value>
}
```

### `client.oauthListTokens()`
executes:
```
POST /api/oauth_list_tokens
{

}
```

### `client.oauthRevokeToken(token)`
executes:
```
POST /api/oauth_revoke_token
{
  "token" : <some_value>
}
```

### `client.privacySet(user, host, xmlquery)`
executes:
```
POST /api/privacy_set
{
  "user" : <some_value>,
  "host" : <some_value>,
  "xmlquery" : <some_value>
}
```

### `client.privateGet(user, host, element, ns)`
executes:
```
POST /api/private_get
{
  "user" : <some_value>,
  "host" : <some_value>,
  "element" : <some_value>,
  "ns" : <some_value>
}
```

### `client.privateSet(user, host, element)`
executes:
```
POST /api/private_set
{
  "user" : <some_value>,
  "host" : <some_value>,
  "element" : <some_value>
}
```

### `client.pushAlltoall(host, group)`
executes:
```
POST /api/push_alltoall
{
  "host" : <some_value>,
  "group" : <some_value>
}
```

### `client.register(user, host, password)`
executes:
```
POST /api/register
{
  "user" : <some_value>,
  "host" : <some_value>,
  "password" : <some_value>
}
```

### `client.registeredUsers(host)`
executes:
```
POST /api/registered_users
{
  "host" : <some_value>
}
```

### `client.registeredVhosts()`
executes:
```
POST /api/registered_vhosts
{

}
```

### `client.removeMamForUser(user, server)`
executes:
```
POST /api/remove_mam_for_user
{
  "user" : <some_value>,
  "server" : <some_value>
}
```

### `client.removeMamForUserWithPeer(user, server, with)`
executes:
```
POST /api/remove_mam_for_user_with_peer
{
  "user" : <some_value>,
  "server" : <some_value>,
  "with" : <some_value>
}
```

### `client.resourceNum()`
executes:
```
POST /api/resource_num
{

}
```

### `client.roomsUnusedDestroy(host, days)`
executes:
```
POST /api/rooms_unused_destroy
{
  "host" : <some_value>,
  "days" : <some_value>
}
```

### `client.roomsUnusedList(host, days)`
executes:
```
POST /api/rooms_unused_list
{
  "host" : <some_value>,
  "days" : <some_value>
}
```

### `client.sendDirectInvitation(name, service, password, reason, users)`
executes:
```
POST /api/send_direct_invitation
{
  "name" : <some_value>,
  "service" : <some_value>,
  "password" : <some_value>,
  "reason" : <some_value>,
  "users" : <some_value>
}
```

### `client.sendMessage(type, from, to, subject, body)`
executes:
```
POST /api/send_message
{
  "type" : <some_value>,
  "from" : <some_value>,
  "to" : <some_value>,
  "subject" : <some_value>,
  "body" : <some_value>
}
```

### `client.sendStanza(from, to, stanza)`
executes:
```
POST /api/send_stanza
{
  "from" : <some_value>,
  "to" : <some_value>,
  "stanza" : <some_value>
}
```

### `client.setNickname(user, host, nickname)`
executes:
```
POST /api/set_nickname
{
  "user" : <some_value>,
  "host" : <some_value>,
  "nickname" : <some_value>
}
```

### `client.setPresence(user, host, resource, type, show, status, priority)`
executes:
```
POST /api/set_presence
{
  "user" : <some_value>,
  "host" : <some_value>,
  "resource" : <some_value>,
  "type" : <some_value>,
  "show" : <some_value>,
  "status" : <some_value>,
  "priority" : <some_value>
}
```

### `client.setRoomAffiliation(name, server, jid, affiliation)`
executes:
```
POST /api/set_room_affiliation
{
  "name" : <some_value>,
  "server" : <some_value>,
  "jid" : <some_value>,
  "affiliation" : <some_value>
}
```

### `client.setVcard(user, host, name, content)`
executes:
```
POST /api/set_vcard
{
  "user" : <some_value>,
  "host" : <some_value>,
  "name" : <some_value>,
  "content" : <some_value>
}
```

### `client.setVcard2(user, host, name, subname, content)`
executes:
```
POST /api/set_vcard2
{
  "user" : <some_value>,
  "host" : <some_value>,
  "name" : <some_value>,
  "subname" : <some_value>,
  "content" : <some_value>
}
```

### `client.setVcard2Multi(user, host, name, subname, contents)`
executes:
```
POST /api/set_vcard2_multi
{
  "user" : <some_value>,
  "host" : <some_value>,
  "name" : <some_value>,
  "subname" : <some_value>,
  "contents" : <some_value>
}
```

### `client.srgCreate(group, host, name, description, display)`
executes:
```
POST /api/srg_create
{
  "group" : <some_value>,
  "host" : <some_value>,
  "name" : <some_value>,
  "description" : <some_value>,
  "display" : <some_value>
}
```

### `client.srgDelete(group, host)`
executes:
```
POST /api/srg_delete
{
  "group" : <some_value>,
  "host" : <some_value>
}
```

### `client.srgGetInfo(group, host)`
executes:
```
POST /api/srg_get_info
{
  "group" : <some_value>,
  "host" : <some_value>
}
```

### `client.srgGetMembers(group, host)`
executes:
```
POST /api/srg_get_members
{
  "group" : <some_value>,
  "host" : <some_value>
}
```

### `client.srgList(host)`
executes:
```
POST /api/srg_list
{
  "host" : <some_value>
}
```

### `client.srgUserAdd(user, host, group, grouphost)`
executes:
```
POST /api/srg_user_add
{
  "user" : <some_value>,
  "host" : <some_value>,
  "group" : <some_value>,
  "grouphost" : <some_value>
}
```

### `client.srgUserDel(user, host, group, grouphost)`
executes:
```
POST /api/srg_user_del
{
  "user" : <some_value>,
  "host" : <some_value>,
  "group" : <some_value>,
  "grouphost" : <some_value>
}
```

### `client.stats(name)`
executes:
```
POST /api/stats
{
  "name" : <some_value>
}
```

### `client.statsHost(name, host)`
executes:
```
POST /api/stats_host
{
  "name" : <some_value>,
  "host" : <some_value>
}
```

### `client.status()`
executes:
```
POST /api/status
{

}
```

### `client.statusList(status)`
executes:
```
POST /api/status_list
{
  "status" : <some_value>
}
```

### `client.statusListHost(host, status)`
executes:
```
POST /api/status_list_host
{
  "host" : <some_value>,
  "status" : <some_value>
}
```

### `client.statusNum(status)`
executes:
```
POST /api/status_num
{
  "status" : <some_value>
}
```

### `client.statusNumHost(host, status)`
executes:
```
POST /api/status_num_host
{
  "host" : <some_value>,
  "status" : <some_value>
}
```

### `client.subscribeRoom(user, nick, room, nodes)`
executes:
```
POST /api/subscribe_room
{
  "user" : <some_value>,
  "nick" : <some_value>,
  "room" : <some_value>,
  "nodes" : <some_value>
}
```

### `client.unregister(user, host)`
executes:
```
POST /api/unregister
{
  "user" : <some_value>,
  "host" : <some_value>
}
```

### `client.unsubscribeRoom(user, room)`
executes:
```
POST /api/unsubscribe_room
{
  "user" : <some_value>,
  "room" : <some_value>
}
```

### `client.userResources(user, host)`
executes:
```
POST /api/user_resources
{
  "user" : <some_value>,
  "host" : <some_value>
}
```

### `client.userSessionsInfo(user, host)`
executes:
```
POST /api/user_sessions_info
{
  "user" : <some_value>,
  "host" : <some_value>
}
```

## Licence

MIT
