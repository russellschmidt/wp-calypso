/**
 * Any new action type should be added to the set of exports below, with the
 * value mirroring its exported name.
 *
 * Please keep this list alphabetized!
 *
 * Unsure how to name an action type? Refer to our guidelines:
 *  - https://wpcalypso.wordpress.com/devdocs/docs/our-approach-to-data.md#actions
 */

export const CONNECTION_LOST = 'CONNECTION_LOST';
export const CONNECTION_RESTORED = 'CONNECTION_RESTORED';
export const COMMENTS_COUNT_RECEIVE = 'COMMENTS_COUNT_RECEIVE';
export const COMMENTS_ERROR = 'COMMENTS_ERROR';
export const COMMENTS_LIKE = 'COMMENTS_LIKE';
export const COMMENTS_LIKE_UPDATE = 'COMMENTS_LIKE_UPDATE';
export const COMMENTS_RECEIVE = 'COMMENTS_RECEIVE';
export const COMMENTS_REMOVE = 'COMMENTS_REMOVE';
export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_FAILURE = 'COMMENTS_REQUEST_FAILURE';
export const COMMENTS_UNLIKE = 'COMMENTS_UNLIKE';
export const CURRENT_USER_ID_SET = 'CURRENT_USER_ID_SET';
export const DESERIALIZE = 'DESERIALIZE';
export const EDITOR_CONTACT_FORM_CLEAR = 'EDITOR_CONTACT_FORM_CLEAR';
export const EDITOR_CONTACT_FORM_LOAD = 'EDITOR_CONTACT_FORM_LOAD';
export const EDITOR_CONTACT_FORM_FIELD_ADD = 'EDITOR_CONTACT_FORM_FIELD_ADD';
export const EDITOR_CONTACT_FORM_FIELD_REMOVE = 'EDITOR_CONTACT_FORM_FIELD_REMOVE';
export const EDITOR_CONTACT_FORM_FIELD_UPDATE = 'EDITOR_CONTACT_FORM_FIELD_UPDATE';
export const EDITOR_CONTACT_FORM_SETTINGS_UPDATE = 'EDITOR_CONTACT_FORM_SETTINGS_UPDATE';
export const EDITOR_MEDIA_EDIT_ITEM_SET = 'EDITOR_MEDIA_EDIT_ITEM_SET';
export const EDITOR_POST_ID_SET = 'EDITOR_POST_ID_SET';
export const EDITOR_SHOW_DRAFTS_TOGGLE = 'EDITOR_SHOW_DRAFTS_TOGGLE';
export const EXPORT_ADVANCED_SETTINGS_FETCH = 'EXPORT_ADVANCED_SETTINGS_FETCH';
export const EXPORT_ADVANCED_SETTINGS_FETCH_FAIL = 'EXPORT_ADVANCED_SETTINGS_FETCH_FAIL';
export const EXPORT_ADVANCED_SETTINGS_RECEIVE = 'EXPORT_ADVANCED_SETTINGS_RECEIVE';
export const EXPORT_CLEAR = 'EXPORT_CLEAR';
export const EXPORT_COMPLETE = 'EXPORT_COMPLETE';
export const EXPORT_FAILURE = 'EXPORT_FAILURE';
export const EXPORT_START_REQUEST = 'EXPORT_START_REQUEST';
export const EXPORT_STARTED = 'EXPORT_STARTED';
export const EXPORT_STATUS_FETCH = 'EXPORT_STATUS_FETCH';
export const FETCH_WPORG_PLUGIN_DATA = 'FETCH_WPORG_PLUGIN_DATA';
export const GOOGLE_APPS_USERS_FETCH = 'GOOGLE_APPS_USERS_FETCH';
export const GOOGLE_APPS_USERS_FETCH_COMPLETED = 'GOOGLE_APPS_USERS_FETCH_COMPLETED';
export const GOOGLE_APPS_USERS_FETCH_FAILED = 'GOOGLE_APPS_USERS_FETCH_FAILED';
export const JETPACK_CONNECT_CHECK_URL = 'JETPACK_CONNECT_CHECK_URL';
export const JETPACK_CONNECT_CHECK_URL_RECEIVE = 'JETPACK_CONNECT_CHECK_URL_RECEIVE';
export const JETPACK_CONNECT_DISMISS_URL_STATUS = 'JETPACK_CONNECT_DISMISS_URL_STATUS';
export const JETPACK_CONNECT_AUTHORIZE = 'JETPACK_CONNECT_AUTHORIZE';
export const JETPACK_CONNECT_AUTHORIZE_RECEIVE = 'JETPACK_CONNECT_AUTHORIZE_RECEIVE';
export const JETPACK_CONNECT_QUERY_SET = 'JETPACK_CONNECT_QUERY_SET';
export const JETPACK_CONNECT_QUERY_UPDATE = 'JETPACK_CONNECT_QUERY_UPDATE';
export const JETPACK_CONNECT_CREATE_ACCOUNT = 'JETPACK_CONNECT_CREATE_ACCOUNT';
export const JETPACK_CONNECT_CREATE_ACCOUNT_RECEIVE = 'JETPACK_CONNECT_CREATE_ACCOUNT_RECEIVE';
export const JETPACK_CONNECT_REDIRECT = 'JETPACK_CONNECT_REDIRECT';
export const NEW_NOTICE = 'NEW_NOTICE';
export const PAGE_LINK_ADD = 'PAGE_LINK_ADD';
export const PAGE_META_ADD = 'PAGE_META_ADD';
export const PAGE_TITLE_SET = 'PAGE_TITLE_SET';
export const PAGE_UNREAD_COUNT_SET = 'PAGE_UNREAD_COUNT_SET';
export const POST_COUNTS_RECEIVE = 'POST_COUNTS_RECEIVE';
export const POST_COUNTS_REQUEST = 'POST_COUNTS_REQUEST';
export const POST_COUNTS_REQUEST_FAILURE = 'POST_COUNTS_REQUEST_FAILURE';
export const POST_COUNTS_REQUEST_SUCCESS = 'POST_COUNTS_REQUEST_SUCCESS';
export const POST_EDIT = 'POST_EDIT';
export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_FAILURE = 'POST_REQUEST_FAILURE';
export const POST_TYPES_RECEIVE = 'POST_TYPES_RECEIVE';
export const POST_TYPES_REQUEST = 'POST_TYPES_REQUEST';
export const POST_TYPES_REQUEST_SUCCESS = 'POST_TYPES_REQUEST_SUCCESS';
export const POST_TYPES_REQUEST_FAILURE = 'POST_TYPES_REQUEST_FAILURE';
export const POSTS_RECEIVE = 'POSTS_RECEIVE';
export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_FAILURE = 'POSTS_REQUEST_FAILURE';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const PUBLICIZE_CONNECTIONS_RECEIVE = 'PUBLICIZE_CONNECTIONS_RECEIVE';
export const PUBLICIZE_CONNECTIONS_REQUEST = 'PUBLICIZE_CONNECTIONS_REQUEST';
export const PUBLICIZE_CONNECTIONS_REQUEST_FAILURE = 'PUBLICIZE_CONNECTIONS_REQUEST_FAILURE';
export const READER_FULLPOST_SHOW = 'READER_FULLPOST_SHOW';
export const READER_FULLPOST_HIDE = 'READER_FULLPOST_HIDE';
export const READER_LISTS_RECEIVE = 'READER_LISTS_RECEIVE';
export const READER_LISTS_REQUEST = 'READER_LISTS_REQUEST';
export const READER_LISTS_REQUEST_SUCCESS = 'READER_LISTS_REQUEST_SUCCESS';
export const READER_LISTS_REQUEST_FAILURE = 'READER_LISTS_REQUEST_FAILURE';
export const READER_SIDEBAR_LISTS_TOGGLE = 'READER_SIDEBAR_LISTS_TOGGLE';
export const READER_SIDEBAR_TAGS_TOGGLE = 'READER_SIDEBAR_TAGS_TOGGLE';
export const RECEIPT_FETCH = 'RECEIPT_FETCH';
export const RECEIPT_FETCH_COMPLETED = 'RECEIPT_FETCH_COMPLETED';
export const RECEIPT_FETCH_FAILED = 'RECEIPT_FETCH_FAILED';
export const REMOVE_NOTICE = 'REMOVE_NOTICE';
export const SELECTED_SITE_SET = 'SELECTED_SITE_SET';
export const SERIALIZE = 'SERIALIZE';
export const SERVER_DESERIALIZE = 'SERVER_DESERIALIZE';
export const SET_EXPORT_POST_TYPE = 'SET_EXPORT_POST_TYPE';
export const SET_ROUTE = 'SET_ROUTE';
export const SET_SECTION = 'SET_SECTION';
export const SITE_MEDIA_STORAGE_RECEIVE = 'SITE_MEDIA_STORAGE_RECEIVE';
export const SITE_MEDIA_STORAGE_REQUEST = 'SITE_MEDIA_STORAGE_REQUEST';
export const SITE_MEDIA_STORAGE_REQUEST_SUCCESS = 'SITE_MEDIA_STORAGE_REQUEST_SUCCESS';
export const SITE_MEDIA_STORAGE_REQUEST_FAILURE = 'SITE_MEDIA_STORAGE_REQUEST_FAILURE';
export const SITE_PLANS_FETCH = 'SITE_PLANS_FETCH';
export const SITE_PLANS_FETCH_COMPLETED = 'SITE_PLANS_FETCH_COMPLETED';
export const SITE_PLANS_FETCH_FAILED = 'SITE_PLANS_FETCH_FAILED';
export const SITE_PLANS_REMOVE = 'SITE_PLANS_REMOVE';
export const SITE_PLANS_TRIAL_CANCEL = 'SITE_PLANS_TRIAL_CANCEL';
export const SITE_PLANS_TRIAL_CANCEL_COMPLETED = 'SITE_PLANS_TRIAL_CANCEL_COMPLETED';
export const SITE_PLANS_TRIAL_CANCEL_FAILED = 'SITE_PLANS_TRIAL_CANCEL_FAILED';
export const SITE_RECEIVE = 'SITE_RECEIVE';
export const SUPPORT_USER_ACTIVATE = 'SUPPORT_USER_ACTIVATE';
export const SUPPORT_USER_ERROR = 'SUPPORT_USER_ERROR';
export const SUPPORT_USER_TOGGLE_DIALOG = 'SUPPORT_USER_TOGGLE_DIALOG';
export const SUPPORT_USER_TOKEN_FETCH = 'SUPPORT_USER_TOKEN_FETCH';
export const USER_RECEIVE = 'USER_RECEIVE';
export const WPORG_PLUGIN_DATA_RECEIVE = 'WPORG_PLUGIN_DATA_RECEIVE';
