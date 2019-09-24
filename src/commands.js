module.exports = {
  // add_rosteritem: {},
  // backup: {},
  // ban_account: {},
  change_password: {
    arguments : ['user', 'host', 'newpass']
  },
  change_room_option: {
    arguments : ['name', 'service', 'option', 'value']
  },
  check_account: {
    arguments : ['user', 'host']
  },
  check_password: {
    arguments : ['user', 'host', 'password']
  },
  // check_password_hash: {},
  // clear_cache: {},
  // compile: {},
  connected_users: {},
  connected_users_info: {},
  connected_users_number: {},
  connected_users_vhost: {
    arguments : ['host']
  },
  // convert_to_scram: {},
  // convert_to_yaml: {},
  create_room: {
    arguments : ['name', 'service', 'host']
  },
  create_room_with_opts: {
    arguments : ['name', 'service', 'host', 'options']
  },
  // create_rooms_file: {},
  delete_expired_messages: {},
  // delete_mnesia: {},
  delete_old_mam_messages: {
    arguments : ['type', 'days']
  },
  delete_old_messages: {
    arguments : ['days']
  },
  delete_old_push_sessions: {
    arguments : ['days']
  },
  delete_old_users: {
    arguments : ['days']
  },
  delete_old_users_vhost: {
    arguments : ['host', 'days']
  },
  delete_rosteritem: {
    arguments : ['localuser', 'localserver', 'user', 'server']
  },
  destroy_room: {
    arguments : ['name', 'service']
  },
  // destroy_rooms_file: {},
  // dump: {},
  // dump_table: {},
  // export2sql: {},
  // export_piefxis: {},
  // export_piefxis_host: {},
  // gen_html_doc_for_commands: {},
  // gen_markdown_doc_for_commands: {},
  // get_certificates: {},
  // get_cookie: {},
  get_last: {
    arguments : ['user', 'host']
  },
  get_loglevel: {},
  get_offline_count: {
    arguments : ['user', 'server']
  },
  get_presence: {
    arguments : ['user', 'server']
  },
  get_room_affiliation: {
    arguments : ['name', 'service', 'jid']
  },
  get_room_affiliations: {
    arguments : ['name', 'service']
  },
  get_room_occupants: {
    arguments : ['name', 'service']
  },
  get_room_occupants_number: {
    arguments : ['name', 'service']
  },
  get_room_options: {
    arguments : ['name', 'service']
  },
  get_roster: {
    arguments : ['user', 'server']
  },
  get_subscribers: {
    arguments : ['name', 'service']
  },
  get_user_rooms: {
    arguments : ['user', 'host']
  },
  get_vcard: {
    arguments : ['user', 'host', 'name']
  },
  get_vcard2: {
    arguments : ['user', 'host', 'name', 'subname']
  },
  get_vcard2_multi: {
    arguments : ['user', 'host', 'name', 'subname']
  },
  // import_dir: {},
  // import_file: {},
  // import_piefxis: {},
  // import_prosody: {},
  // incoming_s2s_number: {},
  // install_fallback: {},
  // join_cluster: {},
  kick_session: {
    arguments : ['user', 'host', 'resource', 'reason']
  },
  kick_user: {
    arguments : ['user', 'host']
  },
  // leave_cluster: {},
  // list_certificates: {},
  // list_cluster: {},
  // load: {},
  // mnesia_change_nodename: {},
  // module_check: {},
  // module_install: {},
  // module_uninstall: {},
  // module_upgrade: {},
  // modules_available: {},
  // modules_installed: {},
  // modules_update_specs: {},
  muc_online_rooms: {
    arguments : ['host']
  },
  muc_online_rooms_by_regex: {
    arguments : ['host', 'regex']
  },
  muc_register_nick: {
    arguments : ['nick', 'jid', 'serverhost']
  },
  muc_unregister_nick: {
    arguments : ['jid', 'serverhost']
  },
  num_active_users: {
    arguments : ['host', 'days']
  },
  num_resources: {
    arguments : ['user', 'host']
  },
  oauth_issue_token: {
    arguments : ['jid', 'ttl', 'scopes']
  },
  oauth_list_tokens: {},
  oauth_revoke_token: {
    arguments : ['token']
  },
  // outgoing_s2s_number: {},
  privacy_set: {
    arguments : ['user', 'host', 'xmlquery']
  },
  private_get: {
    arguments : ['user', 'host', 'element', 'ns']
  },
  private_set: {
    arguments : ['user', 'host', 'element']
  },
  // process_rosteritems: {},
  push_alltoall: {
    arguments : ['host', 'group']
  },
  // push_roster: {},
  // push_roster_all: {},
  register: {
    arguments : ['user', 'host', 'password']
  },
  registered_users: {
    arguments : ['host']
  },
  registered_vhosts: {},
  // reload_config: {},
  remove_mam_for_user: {
    arguments : ['user', 'server']
  },
  remove_mam_for_user_with_peer: {
    arguments : ['user', 'server', 'with']
  },
  // renew_certificates: {},
  // reopen_log: {},
  resource_num: {
    argument : ['user', 'host', 'num']
  },
  // restart: {},
  // restart_module: {},
  // restore: {},
  // revoke_certificate: {},
  rooms_unused_destroy: {
    arguments : ['host', 'days']
  },
  rooms_unused_list: {
    arguments : ['host', 'days']
  },
  // rotate_log: {},
  send_direct_invitation: {
    arguments : ['name', 'service', 'password', 'reason', 'users']
  },
  send_message: {
    arguments : ['type', 'from', 'to', 'subject', 'body']
  },
  send_stanza: {
    arguments : ['from', 'to', 'stanza']
  },
  // send_stanza_c2s: {},
  // set_last: {},
  // set_loglevel: {},
  // set_master: {},
  set_nickname: {
    arguments : ['user', 'host', 'nickname']
  },
  set_presence: {
    arguments : ['user', 'host', 'resource', 'type', 'show', 'status', 'priority']
  },
  set_room_affiliation: {
    arguments : ['name', 'server', 'jid', 'affiliation']
  },
  set_vcard: {
    arguments : ['user', 'host', 'name', 'content']
  },
  set_vcard2: {
    arguments : ['user', 'host', 'name', 'subname', 'content']
  },
  set_vcard2_multi: {
    arguments : ['user', 'host', 'name', 'subname', 'contents']
  },
  srg_create: {
    arguments : ['group', 'host', 'name', 'description', 'display']
  },
  srg_delete: {
    arguments : ['group', 'host']
  },
  srg_get_info: {
    arguments : ['group', 'host']
  },
  srg_get_members: {
    arguments : ['group', 'host']
  },
  srg_list: {
    arguments : ['host']
  },
  srg_user_add: {
    arguments : ['user', 'host', 'group', 'grouphost']
  },
  srg_user_del: {
    arguments : ['user', 'host', 'group', 'grouphost']
  },
  stats: {
    arguments : ['name']
  },
  stats_host: {
    arguments : ['name', 'host']
  },
  status: {},
  status_list: {
    arguments : ['status']
  },
  status_list_host: {
    arguments : ['host', 'status']
  },
  status_num: {
    arguments : ['status']
  },
  status_num_host: {
    arguments : ['host', 'status']
  },
  // stop: {},
  // stop_kindly: {},
  // stop_s2s_connections: {},
  subscribe_room: {
    arguments : ['user', 'nick', 'room', 'nodes']
  },
  unregister: {
    arguments : ['user', 'host']
  },
  unsubscribe_room: {
    arguments : ['user', 'room']
  },
  // update: {},
  // update_list: {},
  // update_sql: {},
  user_resources: {
    arguments : ['user', 'host']
  },
  user_sessions_info: {
    arguments : ['user', 'host']    
  },

}
