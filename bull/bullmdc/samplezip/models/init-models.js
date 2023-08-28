var DataTypes = require("sequelize").DataTypes;


var _app_messages_appchat = require("./appMessagesAppchat");
var _app_messages_appmessage = require("./appMessagesAppmessage");
var _artist = require("./artist");
var _artist_accent = require("./artistAccent");
var _artist_accent_link = require("./artistAccentLink");
var _artist_acting_style = require("./artistActingStyle");
var _artist_acting_style_link = require("./artistActingStyleLink");
var _artist_attachment = require("./artistAttachment");
var _artist_availability = require("./artistAvailability");
var _artist_county = require("./artistCounty");
var _artist_county_link = require("./artistCountyLink");
var _artist_credit = require("./artistCredit");
var _artist_cup_size = require("./artistCupSize");
var _artist_dance_skill = require("./artistDanceSkill");
var _artist_dance_skill_link = require("./artistDanceSkillLink");
var _artist_division_link = require("./artistDivisionLink");
var _artist_dress_size = require("./artistDressSize");
var _artist_ethnicity = require("./artistEthnicity");
var _artist_ethnicity_link = require("./artistEthnicityLink");
var _artist_experience = require("./artistExperience");
var _artist_eye_colour = require("./artistEyeColour");
var _artist_hair_colour = require("./artistHairColour");
var _artist_heritage = require("./artistHeritage");
var _artist_heritage_link = require("./artistHeritageLink");
var _artist_language = require("./artistLanguage");
var _artist_language_level = require("./artistLanguageLevel");
var _artist_language_link = require("./artistLanguageLink");
var _artist_nationality = require("./artistNationality");
var _artist_other_job_type = require("./artistOtherJobType");
var _artist_project_link = require("./artistProjectLink");
var _artist_rating = require("./artistRating");
var _artist_rating_link = require("./artistRatingLink");
var _artist_skill = require("./artistSkill");
var _artist_skill_level = require("./artistSkillLevel");
var _artist_skill_link = require("./artistSkillLink");
var _artist_wardrobe = require("./artistWardrobe");
var _artist_wardrobe_link = require("./artistWardrobeLink");
var _artist_work_rating = require("./artistWorkRating");
var _attachment_type = require("./attachmentType");
var _auth_group = require("./authGroup");
var _auth_group_permissions = require("./authGroupPermissions");
var _auth_permission = require("./authPermission");
var _auth_user = require("./authUser");
var _auth_user_groups = require("./authUserGroups");
var _auth_user_user_permissions = require("./authUserUserPermissions");
var _authtoken_token = require("./authtokenToken");
var _briefing = require("./briefing");
var _briefing_entry_attachment = require("./briefingEntryAttachment");
var _briefing_new = require("./briefingNew");
var _castr_entry_shortlists = require("./castrEntryShortlists");
var _castr_ignored_enquiry = require("./castrIgnoredEnquiry");
var _castr_maddog_settings = require("./castrMaddogSettings");
var _castr_saved_shortlists = require("./castrSavedShortlists");
var _castr_settings = require("./castrSettings");
var _castr_shortlist_meta = require("./castrShortlistMeta");
var _chits2_chitsartistcheckin = require("./chits2Chitsartistcheckin");
var _chits2_chitsbbcrates = require("./chits2Chitsbbcrates");
var _chits2_chitsfaarates = require("./chits2Chitsfaarates");
var _chits2_chitsmessagetemplate = require("./chits2Chitsmessagetemplate");
var _chits2_chitsproject = require("./chits2Chitsproject");
var _chits2_chitsproject_production_user = require("./chits2ChitsprojectProductionUser");
var _chits2_chitsshootday = require("./chits2Chitsshootday");
var _chits2_chitsshootday_production_user = require("./chits2ChitsshootdayProductionUser");
var _chits2_chitssubmission = require("./chits2Chitssubmission");
var _chits2_chitstextpage = require("./chits2Chitstextpage");
var _chits2_chitsuser = require("./chits2Chitsuser");
var _chits_chitsartistcheckin = require("./chitsChitsartistcheckin");
var _chits_chitsfaarates = require("./chitsChitsfaarates");
var _chits_chitsmessagetemplate = require("./chitsChitsmessagetemplate");
var _chits_chitsproject = require("./chitsChitsproject");
var _chits_chitsproject_production_user = require("./chitsChitsprojectProductionUser");
var _chits_chitsshootday = require("./chitsChitsshootday");
var _chits_chitsshootday_production_user = require("./chitsChitsshootdayProductionUser");
var _chits_chitssubmission = require("./chitsChitssubmission");
var _chits_chitstextpage = require("./chitsChitstextpage");
var _chits_chitsuser = require("./chitsChitsuser");
var _client_company = require("./clientCompany");
var _division = require("./division");
var _division_attachment_tag = require("./divisionAttachmentTag");
var _django_admin_log = require("./djangoAdminLog");
var _django_content_type = require("./djangoContentType");
var _django_migrations = require("./djangoMigrations");
var _django_session = require("./djangoSession");
var _dummy_data = require("./dummyData")
var _enquiry = require("./enquiry");
var _enquiry_artist = require("./enquiryArtist");
var _enquiry_artist_answer = require("./enquiryArtistAnswer");
var _enquiry_log = require("./enquiryLog");
var _enquiry_question = require("./enquiryQuestion");
var _enquiry_question_option = require("./enquiryQuestionOption");
var _enquiry_question_type = require("./enquiryQuestionType");
var _enquiry_type = require("./enquiryType");
var _govtalk_dps_response = require("./govtalkDpsResponse");
var _govtalk_dps_rtinot = require("./govtalkDpsRtinot");
var _govtalk_error = require("./govtalkError");
var _govtalk_error_code = require("./govtalkErrorCode");
var _govtalk_request = require("./govtalkRequest");
var _invoice = require("./invoice");
var _invoice_item = require("./invoiceItem");
var _job = require("./job");
var _job_new = require("./jobNew");
var _job_state = require("./jobState");
var _job_template = require("./jobTemplate");
var _ledger = require("./ledger");
var _ledger_account = require("./ledgerAccount");
var _lookbook_template = require("./lookbookTemplate");
var _message = require("./message");
var _message_recipient = require("./messageRecipient");
var _message_status = require("./messageStatus");
var _message_type = require("./messageType");
var _news = require("./news");
var _office = require("./office");
var _payroll = require("./payroll");
var _payroll_rti = require("./payrollRti");
var _payroll_tax = require("./payrollTax");
var _period = require("./period");
var _photoshoot_active = require("./photoshootActive");
var _photoshoot_queue = require("./photoshootQueue");
var _project = require("./project");
var _project_type = require("./projectType");
var _registration_slot = require("./registrationSlot");
var _registration_slot_link = require("./registrationSlotLink");
var _shortlist = require("./shortlist");
var _shortlist_access = require("./shortlistAccess");
var _shortlist_entry = require("./shortlistEntry");
var _shortlist_entry_attachment = require("./shortlistEntryAttachment");
var _shortlist_inactive = require("./shortlistInactive");
var _shortlist_open = require("./shortlistOpen");
var _silk_profile = require("./silkProfile");
var _silk_profile_queries = require("./silkProfileQueries");
var _silk_request = require("./silkRequest");
var _silk_response = require("./silkResponse");
var _silk_sqlquery = require("./silkSqlquery");
var _tax_period = require("./taxPeriod");
var _two_factor_auth = require("./twoFactorAuth");
var _user = require("./user");
var _user_access = require("./userAccess");
var _user_dev_temp = require("./userDevTemp");
var _user_history = require("./userHistory");
var _user_restore_temp = require("./userRestoreTemp");
var _zope_user = require("./zopeUser");
var _artist_branch_registration =require("./artistBranchRegistration");

function initModels(sequelize) {
  var app_messages_appchat = _app_messages_appchat(sequelize, DataTypes);
  var app_messages_appmessage = _app_messages_appmessage(sequelize, DataTypes);
  var artist = _artist(sequelize, DataTypes);
  var artist_accent = _artist_accent(sequelize, DataTypes);
  var artist_accent_link = _artist_accent_link(sequelize, DataTypes);
  var artist_acting_style = _artist_acting_style(sequelize, DataTypes);
  var artist_acting_style_link = _artist_acting_style_link(sequelize, DataTypes);
  var artist_attachment = _artist_attachment(sequelize, DataTypes);
  var artist_availability = _artist_availability(sequelize, DataTypes);
  var artist_county = _artist_county(sequelize, DataTypes);
  var artist_county_link = _artist_county_link(sequelize, DataTypes);
  var artist_credit = _artist_credit(sequelize, DataTypes);
  var artist_cup_size = _artist_cup_size(sequelize, DataTypes);
  var artist_dance_skill = _artist_dance_skill(sequelize, DataTypes);
  var artist_dance_skill_link = _artist_dance_skill_link(sequelize, DataTypes);
  var artist_division_link = _artist_division_link(sequelize, DataTypes);
  var artist_dress_size = _artist_dress_size(sequelize, DataTypes);
  var artist_ethnicity = _artist_ethnicity(sequelize, DataTypes);
  var artist_ethnicity_link = _artist_ethnicity_link(sequelize, DataTypes);
  var artist_experience = _artist_experience(sequelize, DataTypes);
  var artist_eye_colour = _artist_eye_colour(sequelize, DataTypes);
  var artist_hair_colour = _artist_hair_colour(sequelize, DataTypes);
  var artist_heritage = _artist_heritage(sequelize, DataTypes);
  var artist_heritage_link = _artist_heritage_link(sequelize, DataTypes);
  var artist_language = _artist_language(sequelize, DataTypes);
  var artist_language_level = _artist_language_level(sequelize, DataTypes);
  var artist_language_link = _artist_language_link(sequelize, DataTypes);
  var artist_nationality = _artist_nationality(sequelize, DataTypes);
  var artist_other_job_type = _artist_other_job_type(sequelize, DataTypes);
  var artist_project_link = _artist_project_link(sequelize, DataTypes);
  var artist_rating = _artist_rating(sequelize, DataTypes);
  var artist_rating_link = _artist_rating_link(sequelize, DataTypes);
  var artist_skill = _artist_skill(sequelize, DataTypes);
  var artist_skill_level = _artist_skill_level(sequelize, DataTypes);
  var artist_skill_link = _artist_skill_link(sequelize, DataTypes);
  var artist_wardrobe = _artist_wardrobe(sequelize, DataTypes);
  var artist_wardrobe_link = _artist_wardrobe_link(sequelize, DataTypes);
  var artist_work_rating = _artist_work_rating(sequelize, DataTypes);
  var attachment_type = _attachment_type(sequelize, DataTypes);
  var auth_group = _auth_group(sequelize, DataTypes);
  var auth_group_permissions = _auth_group_permissions(sequelize, DataTypes);
  var auth_permission = _auth_permission(sequelize, DataTypes);
  var auth_user = _auth_user(sequelize, DataTypes);
  var auth_user_groups = _auth_user_groups(sequelize, DataTypes);
  var auth_user_user_permissions = _auth_user_user_permissions(sequelize, DataTypes);
  var authtoken_token = _authtoken_token(sequelize, DataTypes);
  var briefing = _briefing(sequelize, DataTypes);
  var briefing_entry_attachment = _briefing_entry_attachment(sequelize, DataTypes);
  var briefing_new = _briefing_new(sequelize, DataTypes);
  var castr_entry_shortlists = _castr_entry_shortlists(sequelize, DataTypes);
  var castr_ignored_enquiry = _castr_ignored_enquiry(sequelize, DataTypes);
  var castr_maddog_settings = _castr_maddog_settings(sequelize, DataTypes);
  var castr_saved_shortlists = _castr_saved_shortlists(sequelize, DataTypes);
  var castr_settings = _castr_settings(sequelize, DataTypes);
  var castr_shortlist_meta = _castr_shortlist_meta(sequelize, DataTypes);
  var chits2_chitsartistcheckin = _chits2_chitsartistcheckin(sequelize, DataTypes);
  var chits2_chitsbbcrates = _chits2_chitsbbcrates(sequelize, DataTypes);
  var chits2_chitsfaarates = _chits2_chitsfaarates(sequelize, DataTypes);
  var chits2_chitsmessagetemplate = _chits2_chitsmessagetemplate(sequelize, DataTypes);
  var chits2_chitsproject = _chits2_chitsproject(sequelize, DataTypes);
  var chits2_chitsproject_production_user = _chits2_chitsproject_production_user(sequelize, DataTypes);
  var chits2_chitsshootday = _chits2_chitsshootday(sequelize, DataTypes);
  var chits2_chitsshootday_production_user = _chits2_chitsshootday_production_user(sequelize, DataTypes);
  var chits2_chitssubmission = _chits2_chitssubmission(sequelize, DataTypes);
  var chits2_chitstextpage = _chits2_chitstextpage(sequelize, DataTypes);
  var chits2_chitsuser = _chits2_chitsuser(sequelize, DataTypes);
  var chits_chitsartistcheckin = _chits_chitsartistcheckin(sequelize, DataTypes);
  var chits_chitsfaarates = _chits_chitsfaarates(sequelize, DataTypes);
  var chits_chitsmessagetemplate = _chits_chitsmessagetemplate(sequelize, DataTypes);
  var chits_chitsproject = _chits_chitsproject(sequelize, DataTypes);
  var chits_chitsproject_production_user = _chits_chitsproject_production_user(sequelize, DataTypes);
  var chits_chitsshootday = _chits_chitsshootday(sequelize, DataTypes);
  var chits_chitsshootday_production_user = _chits_chitsshootday_production_user(sequelize, DataTypes);
  var chits_chitssubmission = _chits_chitssubmission(sequelize, DataTypes);
  var chits_chitstextpage = _chits_chitstextpage(sequelize, DataTypes);
  var chits_chitsuser = _chits_chitsuser(sequelize, DataTypes);
  var client_company = _client_company(sequelize, DataTypes);
  var division = _division(sequelize, DataTypes);
  var division_attachment_tag = _division_attachment_tag(sequelize, DataTypes);
  var django_admin_log = _django_admin_log(sequelize, DataTypes);
  var django_content_type = _django_content_type(sequelize, DataTypes);
  var django_migrations = _django_migrations(sequelize, DataTypes);
  var django_session = _django_session(sequelize, DataTypes);
  var dummy_data = _dummy_data(sequelize,DataTypes)
  var enquiry = _enquiry(sequelize, DataTypes);
  var enquiry_artist = _enquiry_artist(sequelize, DataTypes);
  var enquiry_artist_answer = _enquiry_artist_answer(sequelize, DataTypes);
  var enquiry_log = _enquiry_log(sequelize, DataTypes);
  var enquiry_question = _enquiry_question(sequelize, DataTypes);
  var enquiry_question_option = _enquiry_question_option(sequelize, DataTypes);
  var enquiry_question_type = _enquiry_question_type(sequelize, DataTypes);
  var enquiry_type = _enquiry_type(sequelize, DataTypes);
  var govtalk_dps_response = _govtalk_dps_response(sequelize, DataTypes);
  var govtalk_dps_rtinot = _govtalk_dps_rtinot(sequelize, DataTypes);
  var govtalk_error = _govtalk_error(sequelize, DataTypes);
  var govtalk_error_code = _govtalk_error_code(sequelize, DataTypes);
  var govtalk_request = _govtalk_request(sequelize, DataTypes);
  var invoice = _invoice(sequelize, DataTypes);
  var invoice_item = _invoice_item(sequelize, DataTypes);
  var job = _job(sequelize, DataTypes);
  var job_new = _job_new(sequelize, DataTypes);
  var job_state = _job_state(sequelize, DataTypes);
  var job_template = _job_template(sequelize, DataTypes);
  var ledger = _ledger(sequelize, DataTypes);
  var ledger_account = _ledger_account(sequelize, DataTypes);
  var lookbook_template = _lookbook_template(sequelize, DataTypes);
  var message = _message(sequelize, DataTypes);
  var message_recipient = _message_recipient(sequelize, DataTypes);
  var message_status = _message_status(sequelize, DataTypes);
  var message_type = _message_type(sequelize, DataTypes);
  var news = _news(sequelize, DataTypes);
  var office = _office(sequelize, DataTypes);
  var payroll = _payroll(sequelize, DataTypes);
  var payroll_rti = _payroll_rti(sequelize, DataTypes);
  var payroll_tax = _payroll_tax(sequelize, DataTypes);
  var period = _period(sequelize, DataTypes);
  var photoshoot_active = _photoshoot_active(sequelize, DataTypes);
  var photoshoot_queue = _photoshoot_queue(sequelize, DataTypes);
  var project = _project(sequelize, DataTypes);
  var project_type = _project_type(sequelize, DataTypes);
  var registration_slot = _registration_slot(sequelize, DataTypes);
  var registration_slot_link = _registration_slot_link(sequelize, DataTypes);
  var shortlist = _shortlist(sequelize, DataTypes);
  var shortlist_access = _shortlist_access(sequelize, DataTypes);
  var shortlist_entry = _shortlist_entry(sequelize, DataTypes);
  var shortlist_entry_attachment = _shortlist_entry_attachment(sequelize, DataTypes);
  var shortlist_inactive = _shortlist_inactive(sequelize, DataTypes);
  var shortlist_open = _shortlist_open(sequelize, DataTypes);
  var silk_profile = _silk_profile(sequelize, DataTypes);
  var silk_profile_queries = _silk_profile_queries(sequelize, DataTypes);
  var silk_request = _silk_request(sequelize, DataTypes);
  var silk_response = _silk_response(sequelize, DataTypes);
  var silk_sqlquery = _silk_sqlquery(sequelize, DataTypes);
  var tax_period = _tax_period(sequelize, DataTypes);
  var two_factor_auth = _two_factor_auth(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_access = _user_access(sequelize, DataTypes);
  var user_dev_temp = _user_dev_temp(sequelize, DataTypes);
  var user_history = _user_history(sequelize, DataTypes);
  var user_restore_temp = _user_restore_temp(sequelize, DataTypes);
  var zope_user = _zope_user(sequelize, DataTypes);
  var artist_branch_registration = _artist_branch_registration(sequelize, DataTypes)
  // removeing id column in sequlize model
  artist_heritage_link.removeAttribute('id')
  message_recipient.removeAttribute('id')
  artist_accent_link.removeAttribute('id')
  artist_county_link.removeAttribute('id')
  artist_ethnicity_link.removeAttribute('id')
  artist_language_link.removeAttribute('id')
  artist_wardrobe_link.removeAttribute('id')
  artist_ethnicity_link.removeAttribute('id')
  artist_skill_link.removeAttribute('id')
  enquiry_artist_answer.removeAttribute('id')
 
  // artist_attachment.removeAttribute('attachment_type_id')
  
  app_messages_appmessage.belongsTo(app_messages_appchat, { as: "chat", foreignKey: "chat_id"});
  app_messages_appchat.hasMany(app_messages_appmessage, { as: "app_messages_appmessages", foreignKey: "chat_id"});
  app_messages_appchat.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasOne(app_messages_appchat, { as: "app_messages_appchat", foreignKey: "artist_id"});
  artist_attachment.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(artist_attachment, { as: "artist_attachments", foreignKey: "artist_id"});
  artist_county_link.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(artist_county_link, { as: "artist_county_links", foreignKey: "artist_id"});
  artist_heritage_link.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(artist_heritage_link, {  foreignKey: "artist_id"});
  artist_accent_link.belongsTo(artist, { as: "artist1", foreignKey: "artist_id"});
  artist.hasMany(artist_accent_link, {  foreignKey: "artist_id"});

  artist_wardrobe_link.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(artist_wardrobe_link, { as: "artist_wardrobe_links", foreignKey: "artist_id"});
  briefing_entry_attachment.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(briefing_entry_attachment, { as: "briefing_entry_attachments", foreignKey: "artist_id"});
  castr_entry_shortlists.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(castr_entry_shortlists, { as: "castr_entry_shortlists", foreignKey: "artist_id"});
  castr_maddog_settings.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasOne(castr_maddog_settings, { as: "castr_maddog_setting", foreignKey: "artist_id"});
  chits2_chitssubmission.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(chits2_chitssubmission, { as: "chits2_chitssubmissions", foreignKey: "artist_id"});
  chits_chitssubmission.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(chits_chitssubmission, { as: "chits_chitssubmissions", foreignKey: "artist_id"});
  enquiry_artist.belongsTo(artist, {foreignKey: "artist_id"});
  artist.hasMany(enquiry_artist, {foreignKey: "artist_id"});
  enquiry_artist_answer.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(enquiry_artist_answer, { as: "enquiry_artist_answers", foreignKey: "artist_id"});
  ledger.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(ledger, { as: "ledgers", foreignKey: "artist_id"});
  message_recipient.belongsTo(artist, {  foreignKey: "artist_id"});
  artist.hasMany(message_recipient, {  foreignKey: "artist_id"});
  payroll_tax.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(payroll_tax, { as: "payroll_taxes", foreignKey: "artist_id"});
  photoshoot_active.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(photoshoot_active, { as: "photoshoot_actives", foreignKey: "artist_id"});
  photoshoot_queue.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(photoshoot_queue, { as: "photoshoot_queues", foreignKey: "artist_id"});
  registration_slot_link.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(registration_slot_link, { as: "registration_slot_links", foreignKey: "artist_id"});
  shortlist_entry_attachment.belongsTo(artist, { as: "artist", foreignKey: "artist_id"});
  artist.hasMany(shortlist_entry_attachment, { as: "shortlist_entry_attachments", foreignKey: "artist_id"});
  artist_accent_link.belongsTo(artist_accent, { as: "accent", foreignKey: "accent_id"});
  artist_accent.hasMany(artist_accent_link, { as: "artist_accent_links", foreignKey: "accent_id"});
  artist_acting_style_link.belongsTo(artist_accent, { as: "acting_style", foreignKey: "acting_style_id"});
  artist_accent.hasMany(artist_acting_style_link, { as: "artist_acting_style_links", foreignKey: "acting_style_id"});
  artist_project_link.belongsTo(artist_accent, { as: "project", foreignKey: "project_id"});
  artist_accent.hasMany(artist_project_link, { as: "artist_project_links", foreignKey: "project_id"});
  artist_rating_link.belongsTo(artist_accent, { as: "rating", foreignKey: "rating_id"});
  artist_accent.hasMany(artist_rating_link, { as: "artist_rating_links", foreignKey: "rating_id"});
  artist_skill_link.belongsTo(artist_accent, { as: "skill", foreignKey: "skill_id"});
  artist_accent.hasMany(artist_skill_link, { as: "artist_skill_links", foreignKey: "skill_id"});
  shortlist_entry.belongsTo(artist_accent, { as: "artist", foreignKey: "artist_id"});
  artist_accent.hasMany(shortlist_entry, { as: "shortlist_entries", foreignKey: "artist_id"});
  artist_ethnicity_link.belongsTo(artist_acting_style, { as: "ethnicity", foreignKey: "ethnicity_id"});
  artist_acting_style.hasMany(artist_ethnicity_link, { as: "artist_ethnicity_links", foreignKey: "ethnicity_id"});
  briefing_entry_attachment.belongsTo(artist_attachment, { as: "attachment", foreignKey: "attachment_id"});
  artist_attachment.hasMany(briefing_entry_attachment, { as: "briefing_entry_attachments", foreignKey: "attachment_id"});
  shortlist_entry.belongsTo(artist_attachment, { as: "attachment", foreignKey: "attachment_id"});
  artist_attachment.hasMany(shortlist_entry, { as: "shortlist_entries", foreignKey: "attachment_id"});
  shortlist_entry_attachment.belongsTo(artist_attachment, { as: "attachment", foreignKey: "attachment_id"});
  artist_attachment.hasMany(shortlist_entry_attachment, { as: "shortlist_entry_attachments", foreignKey: "attachment_id"});
  artist.belongsTo(artist_county, { as: "county", foreignKey: "county_id"});
  artist_county.hasMany(artist, { as: "artists", foreignKey: "county_id"});
  artist_county_link.belongsTo(artist_county, { as: "county", foreignKey: "county_id"});
  artist_county.hasMany(artist_county_link, { as: "artist_county_links", foreignKey: "county_id"});
  artist.belongsTo(artist_cup_size, { as: "cup_size_artist_cup_size", foreignKey: "cup_size"});
  artist_cup_size.hasMany(artist, { as: "artists", foreignKey: "cup_size"});
  artist.belongsTo(artist_dance_skill, { as: "office", foreignKey: "office_id"});
  artist_dance_skill.hasMany(artist, { as: "artists", foreignKey: "office_id"});
  artist_language_link.belongsTo(artist_dance_skill, { as: "language", foreignKey: "language_id"});
  artist_dance_skill.hasMany(artist_language_link, { as: "artist_language_links", foreignKey: "language_id"});
  artist.belongsTo(artist_dress_size, { as: "dress_size_artist_dress_size", foreignKey: "dress_size"});
  artist_dress_size.hasMany(artist, { as: "artists", foreignKey: "dress_size"});
  job.belongsTo(artist_dress_size, { as: "payroll", foreignKey: "payroll_id"});
  artist_dress_size.hasMany(job, { as: "jobs", foreignKey: "payroll_id"});
  artist.belongsTo(artist_eye_colour, { as: "eye_colour_artist_eye_colour", foreignKey: "eye_colour"});
  artist_eye_colour.hasMany(artist, { as: "artists", foreignKey: "eye_colour"});
  artist.belongsTo(artist_hair_colour, { as: "hair_colour_artist_hair_colour", foreignKey: "hair_colour"});
  artist_hair_colour.hasMany(artist, { as: "artists", foreignKey: "hair_colour"});
  job.belongsTo(artist_hair_colour, { as: "state", foreignKey: "state_id"});
  artist_hair_colour.hasMany(job, { as: "jobs", foreignKey: "state_id"});
  artist_heritage.belongsTo(artist_heritage, { as: "parent", foreignKey: "parent_id"});
  artist_heritage.hasMany(artist_heritage, { as: "artist_heritages", foreignKey: "parent_id"});
  artist_heritage_link.belongsTo(artist_heritage, { as: "heritage", foreignKey: "heritage_id"});
  artist_heritage.hasMany(artist_heritage_link, { as: "artist_heritage_links1", foreignKey: "heritage_id"});
  artist_dance_skill_link.belongsTo(artist_language_level, { as: "level", foreignKey: "level_id"});
  artist_language_level.hasMany(artist_dance_skill_link, { as: "artist_dance_skill_links", foreignKey: "level_id"});
  artist_skill_link.belongsTo(artist_language_level, { as: "level", foreignKey: "level_id"});
  artist_language_level.hasMany(artist_skill_link, { as: "artist_skill_links", foreignKey: "level_id"});
  artist.belongsTo(artist_nationality, { as: "nationality1", foreignKey: "nationality_id"});
  artist_nationality.hasMany(artist, { as: "artists", foreignKey: "nationality_id"});
  artist_nationality.belongsTo(artist_nationality, { as: "parent", foreignKey: "parent_id"});
  artist_nationality.hasMany(artist_nationality, { as: "artist_nationalities", foreignKey: "parent_id"});
  artist.belongsTo(artist_other_job_type, { as: "other_job_type", foreignKey: "other_job_type_id"});
  artist_other_job_type.hasMany(artist, { as: "artists", foreignKey: "other_job_type_id"});
  artist_division_link.belongsTo(artist_rating, { as: "division", foreignKey: "division_id"});
  artist_rating.hasMany(artist_division_link, { as: "artist_division_links", foreignKey: "division_id"});
  shortlist.belongsTo(artist_rating, { as: "client", foreignKey: "client_id"});
  artist_rating.hasMany(shortlist, { as: "shortlists", foreignKey: "client_id"});
  user.belongsTo(artist_rating, { as: "office", foreignKey: "office_id"});
  artist_rating.hasMany(user, { as: "users", foreignKey: "office_id"});
  artist_wardrobe_link.belongsTo(artist_wardrobe, { as: "wardrobe", foreignKey: "wardrobe_id"});
  artist_wardrobe.hasMany(artist_wardrobe_link, { as: "artist_wardrobe_links", foreignKey: "wardrobe_id"});
  artist.belongsTo(artist_work_rating, { as: "work_rating_artist_work_rating", foreignKey: "work_rating"});
  artist_work_rating.hasMany(artist, { as: "artists", foreignKey: "work_rating"});
  auth_group_permissions.belongsTo(auth_group, { as: "group", foreignKey: "group_id"});
  auth_group.hasMany(auth_group_permissions, { as: "auth_group_permissions", foreignKey: "group_id"});
  auth_user_groups.belongsTo(auth_group, { as: "group", foreignKey: "group_id"});
  auth_group.hasMany(auth_user_groups, { as: "auth_user_groups", foreignKey: "group_id"});
  auth_group_permissions.belongsTo(auth_permission, { as: "permission", foreignKey: "permission_id"});
  auth_permission.hasMany(auth_group_permissions, { as: "auth_group_permissions", foreignKey: "permission_id"});
  auth_user_user_permissions.belongsTo(auth_permission, { as: "permission", foreignKey: "permission_id"});
  auth_permission.hasMany(auth_user_user_permissions, { as: "auth_user_user_permissions", foreignKey: "permission_id"});
  auth_user_groups.belongsTo(auth_user, { as: "user", foreignKey: "user_id"});
  auth_user.hasMany(auth_user_groups, { as: "auth_user_groups", foreignKey: "user_id"});
  auth_user_user_permissions.belongsTo(auth_user, { as: "user", foreignKey: "user_id"});
  auth_user.hasMany(auth_user_user_permissions, { as: "auth_user_user_permissions", foreignKey: "user_id"});
  authtoken_token.belongsTo(auth_user, { as: "user", foreignKey: "user_id"});
  auth_user.hasOne(authtoken_token, { as: "authtoken_token", foreignKey: "user_id"});
  chits2_chitsartistcheckin.belongsTo(auth_user, { as: "checked_in_by", foreignKey: "checked_in_by_id"});
  auth_user.hasMany(chits2_chitsartistcheckin, { as: "chits2_chitsartistcheckins", foreignKey: "checked_in_by_id"});
  chits2_chitsproject_production_user.belongsTo(auth_user, { as: "user", foreignKey: "user_id"});
  auth_user.hasMany(chits2_chitsproject_production_user, { as: "chits2_chitsproject_production_users", foreignKey: "user_id"});
  chits2_chitsshootday_production_user.belongsTo(auth_user, { as: "user", foreignKey: "user_id"});
  auth_user.hasMany(chits2_chitsshootday_production_user, { as: "chits2_chitsshootday_production_users", foreignKey: "user_id"});
  chits2_chitsuser.belongsTo(auth_user, { as: "user", foreignKey: "user_id"});
  auth_user.hasOne(chits2_chitsuser, { as: "chits2_chitsuser", foreignKey: "user_id"});
  chits_chitsartistcheckin.belongsTo(auth_user, { as: "checked_in_by", foreignKey: "checked_in_by_id"});
  auth_user.hasMany(chits_chitsartistcheckin, { as: "chits_chitsartistcheckins", foreignKey: "checked_in_by_id"});
  chits_chitsproject_production_user.belongsTo(auth_user, { as: "user", foreignKey: "user_id"});
  auth_user.hasMany(chits_chitsproject_production_user, { as: "chits_chitsproject_production_users", foreignKey: "user_id"});
  chits_chitsshootday_production_user.belongsTo(auth_user, { as: "user", foreignKey: "user_id"});
  auth_user.hasMany(chits_chitsshootday_production_user, { as: "chits_chitsshootday_production_users", foreignKey: "user_id"});
  chits_chitsuser.belongsTo(auth_user, { as: "user", foreignKey: "user_id"});
  auth_user.hasOne(chits_chitsuser, { as: "chits_chitsuser", foreignKey: "user_id"});
  django_admin_log.belongsTo(auth_user, { as: "user", foreignKey: "user_id"});
  auth_user.hasMany(django_admin_log, { as: "django_admin_logs", foreignKey: "user_id"});
  briefing_entry_attachment.belongsTo(briefing, { as: "briefing", foreignKey: "briefing_id"});
  briefing.hasMany(briefing_entry_attachment, { as: "briefing_entry_attachments", foreignKey: "briefing_id"});
  chits2_chitsshootday.belongsTo(briefing, { as: "briefing", foreignKey: "briefing_id"});
  briefing.hasMany(chits2_chitsshootday, { as: "chits2_chitsshootdays", foreignKey: "briefing_id"});
  chits2_chitssubmission.belongsTo(briefing, { as: "zope_briefing", foreignKey: "zope_briefing_id"});
  briefing.hasMany(chits2_chitssubmission, { as: "chits2_chitssubmissions", foreignKey: "zope_briefing_id"});
  chits_chitsshootday.belongsTo(briefing, { as: "briefing", foreignKey: "briefing_id"});
  briefing.hasOne(chits_chitsshootday, { as: "chits_chitsshootday", foreignKey: "briefing_id"});
  chits_chitssubmission.belongsTo(briefing, { as: "zope_briefing", foreignKey: "zope_briefing_id"});
  briefing.hasMany(chits_chitssubmission, { as: "chits_chitssubmissions", foreignKey: "zope_briefing_id"});
  enquiry.belongsTo(briefing, { as: "briefing", foreignKey: "briefing_id"});
  briefing.hasMany(enquiry, { as: "enquiries", foreignKey: "briefing_id"});
  job_template.belongsTo(briefing, { as: "briefing", foreignKey: "briefing_id"});
  briefing.hasMany(job_template, { as: "job_templates", foreignKey: "briefing_id"});
  // castr_entry_shortlists.belongsTo(castr_saved_shortlists, { as: "shortlist", foreignKey: "shortlist_id"});
  // castr_saved_shortlists.hasMany(castr_entry_shortlists, { as: "castr_entry_shortlists", foreignKey: "shortlist_id"});
  chits2_chitssubmission.belongsTo(chits2_chitsartistcheckin, { as: "check_in", foreignKey: "check_in_id"});
  chits2_chitsartistcheckin.hasMany(chits2_chitssubmission, { as: "chits2_chitssubmissions", foreignKey: "check_in_id"});
  chits2_chitsproject.belongsTo(chits2_chitsbbcrates, { as: "rates_bbc", foreignKey: "rates_bbc_id"});
  chits2_chitsbbcrates.hasMany(chits2_chitsproject, { as: "chits2_chitsprojects", foreignKey: "rates_bbc_id"});
  chits2_chitsproject.belongsTo(chits2_chitsfaarates, { as: "rate", foreignKey: "rates_id"});
  chits2_chitsfaarates.hasMany(chits2_chitsproject, { as: "chits2_chitsprojects", foreignKey: "rates_id"});
  chits2_chitsproject_production_user.belongsTo(chits2_chitsproject, { as: "chitsproject", foreignKey: "chitsproject_id"});
  chits2_chitsproject.hasMany(chits2_chitsproject_production_user, { as: "chits2_chitsproject_production_users", foreignKey: "chitsproject_id"});
  chits2_chitsshootday.belongsTo(chits2_chitsproject, { as: "chits_project", foreignKey: "chits_project_id"});
  chits2_chitsproject.hasMany(chits2_chitsshootday, { as: "chits2_chitsshootdays", foreignKey: "chits_project_id"});
  chits2_chitsartistcheckin.belongsTo(chits2_chitsshootday, { as: "shoot_day", foreignKey: "shoot_day_id"});
  chits2_chitsshootday.hasMany(chits2_chitsartistcheckin, { as: "chits2_chitsartistcheckins", foreignKey: "shoot_day_id"});
  chits2_chitsshootday_production_user.belongsTo(chits2_chitsshootday, { as: "chitsshootday", foreignKey: "chitsshootday_id"});
  chits2_chitsshootday.hasMany(chits2_chitsshootday_production_user, { as: "chits2_chitsshootday_production_users", foreignKey: "chitsshootday_id"});
  chits2_chitssubmission.belongsTo(chits2_chitsshootday, { as: "shoot_day", foreignKey: "shoot_day_id"});
  chits2_chitsshootday.hasMany(chits2_chitssubmission, { as: "chits2_chitssubmissions", foreignKey: "shoot_day_id"});
  chits_chitssubmission.belongsTo(chits_chitsartistcheckin, { as: "check_in", foreignKey: "check_in_id"});
  chits_chitsartistcheckin.hasMany(chits_chitssubmission, { as: "chits_chitssubmissions", foreignKey: "check_in_id"});
  chits_chitsproject.belongsTo(chits_chitsfaarates, { as: "rate", foreignKey: "rates_id"});
  chits_chitsfaarates.hasMany(chits_chitsproject, { as: "chits_chitsprojects", foreignKey: "rates_id"});
  chits_chitsproject_production_user.belongsTo(chits_chitsproject, { as: "chitsproject", foreignKey: "chitsproject_id"});
  chits_chitsproject.hasMany(chits_chitsproject_production_user, { as: "chits_chitsproject_production_users", foreignKey: "chitsproject_id"});
  chits_chitsshootday.belongsTo(chits_chitsproject, { as: "chits_project", foreignKey: "chits_project_id"});
  chits_chitsproject.hasMany(chits_chitsshootday, { as: "chits_chitsshootdays", foreignKey: "chits_project_id"});
  chits_chitsartistcheckin.belongsTo(chits_chitsshootday, { as: "shoot_day", foreignKey: "shoot_day_id"});
  chits_chitsshootday.hasMany(chits_chitsartistcheckin, { as: "chits_chitsartistcheckins", foreignKey: "shoot_day_id"});
  chits_chitsshootday_production_user.belongsTo(chits_chitsshootday, { as: "chitsshootday", foreignKey: "chitsshootday_id"});
  chits_chitsshootday.hasMany(chits_chitsshootday_production_user, { as: "chits_chitsshootday_production_users", foreignKey: "chitsshootday_id"});
  chits_chitssubmission.belongsTo(chits_chitsshootday, { as: "shoot_day", foreignKey: "shoot_day_id"});
  chits_chitsshootday.hasMany(chits_chitssubmission, { as: "chits_chitssubmissions", foreignKey: "shoot_day_id"});
  project.belongsTo(client_company, { as: "invoice_company", foreignKey: "invoice_company_id"});
  client_company.hasMany(project, { as: "projects", foreignKey: "invoice_company_id"});
  // project.belongsTo(client_company, { as: "production_company", foreignKey: "production_company_id"});
  // client_company.hasMany(project, { as: "production_company_projects", foreignKey: "production_company_id"});
  artist_accent_link.belongsTo(division, { as: "artist", foreignKey: "artist_id"});
  division.hasMany(artist_accent_link, { as: "artist_accent_links", foreignKey: "artist_id"});
  artist_credit.belongsTo(division, { as: "artist", foreignKey: "artist_id"});
  division.hasMany(artist_credit, { as: "artist_credits", foreignKey: "artist_id"});
  artist_division_link.belongsTo(division, { as: "artist", foreignKey: "artist_id"});
  division.hasMany(artist_division_link, { as: "artist_division_links", foreignKey: "artist_id"});
  briefing.belongsTo(division, { as: "division", foreignKey: "division_id"});
  division.hasMany(briefing, { as: "briefings", foreignKey: "division_id"});
  artist_attachment.belongsTo(division_attachment_tag, {foreignKey: "tag_id"});
  division_attachment_tag.hasOne(artist_attachment, {  foreignKey: "tag_id"});
  // attachment_type.hasOne()
  briefing_entry_attachment.belongsTo(division_attachment_tag, { as: "tag", foreignKey: "tag_id"});
  division_attachment_tag.hasMany(briefing_entry_attachment, { as: "briefing_entry_attachments", foreignKey: "tag_id"});
  shortlist_entry_attachment.belongsTo(division_attachment_tag, { as: "tag", foreignKey: "tag_id"});
  division_attachment_tag.hasMany(shortlist_entry_attachment, { as: "shortlist_entry_attachments", foreignKey: "tag_id"});
  auth_permission.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(auth_permission, { as: "auth_permissions", foreignKey: "content_type_id"});
  django_admin_log.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(django_admin_log, { as: "django_admin_logs", foreignKey: "content_type_id"});
  enquiry_artist.belongsTo(enquiry, { as: "enquiry", foreignKey: "enquiry_id"});
  enquiry.hasMany(enquiry_artist, { as: "enquiry_artists", foreignKey: "enquiry_id"});
  enquiry_log.belongsTo(enquiry, { as: "enquiry", foreignKey: "enquiry_id"});
  enquiry.hasMany(enquiry_log, { as: "enquiry_logs", foreignKey: "enquiry_id"});
  enquiry_question.belongsTo(enquiry, { as: "enquiry", foreignKey: "enquiry_id"});
  enquiry.hasMany(enquiry_question, { as: "enquiry_questions", foreignKey: "enquiry_id"});
  message.belongsTo(enquiry, { as: "enquiry", foreignKey: "enquiry_id"});
  enquiry.hasMany(message, { as: "messages", foreignKey: "enquiry_id"});
  enquiry_log.belongsTo(enquiry_artist, { as: "enquiry_artist", foreignKey: "enquiry_artist_id"});
  enquiry_artist.hasMany(enquiry_log, { as: "enquiry_logs", foreignKey: "enquiry_artist_id"});
  message_recipient.belongsTo(enquiry_artist, { as: "enquiry_artist", foreignKey: "enquiry_artist_id"});
  enquiry_artist.hasMany(message_recipient, { as: "message_recipients", foreignKey: "enquiry_artist_id"});
  enquiry_artist_answer.belongsTo(enquiry_question, { as: "question", foreignKey: "question_id"});
  enquiry_question.hasMany(enquiry_artist_answer, { as: "enquiry_artist_answers", foreignKey: "question_id"});
  // enquiry_question_option.belongsTo(enquiry_question, { as: "question", foreignKey: "question_id"});
  // enquiry_question.hasMany(enquiry_question_option, { as: "enquiry_question_options", foreignKey: "question_id"});
  enquiry_question.belongsTo(enquiry_question_type, { as: "type", foreignKey: "type_id"});
  enquiry_question_type.hasMany(enquiry_question, { as: "enquiry_questions", foreignKey: "type_id"});
  govtalk_dps_rtinot.belongsTo(govtalk_dps_response, { as: "govtalk_dp", foreignKey: "govtalk_dps_id"});
  govtalk_dps_response.hasMany(govtalk_dps_rtinot, { as: "govtalk_dps_rtinots", foreignKey: "govtalk_dps_id"});
  govtalk_error.belongsTo(govtalk_request, { as: "govtalk_message", foreignKey: "govtalk_message_id"});
  govtalk_request.hasMany(govtalk_error, { as: "govtalk_errors", foreignKey: "govtalk_message_id"});
  payroll_rti.belongsTo(govtalk_request, { as: "govtalk_message", foreignKey: "govtalk_message_id"});
  govtalk_request.hasMany(payroll_rti, { as: "payroll_rtis", foreignKey: "govtalk_message_id"});
  artist_dance_skill_link.belongsTo(invoice, { as: "artist", foreignKey: "artist_id"});
  invoice.hasMany(artist_dance_skill_link, { as: "artist_dance_skill_links", foreignKey: "artist_id"});
  artist_skill_link.belongsTo(invoice, { as: "artist", foreignKey: "artist_id"});
  invoice.hasMany(artist_skill_link, { as: "artist_skill_links", foreignKey: "artist_id"});
  job.belongsTo(invoice, { as: "invoice", foreignKey: "invoice_id"});
  invoice.hasMany(job, { as: "jobs", foreignKey: "invoice_id"});
  shortlist.belongsTo(invoice, { as: "owner", foreignKey: "owner_id"});
  invoice.hasMany(shortlist, { as: "shortlists", foreignKey: "owner_id"});
  // shortlist_entry.belongsTo(invoice, { as: "shortlist", foreignKey: "shortlist_id"});
  // invoice.hasMany(shortlist_entry, { as: "shortlist_entries", foreignKey: "shortlist_id"});
  artist_language_link.belongsTo(job_state, { as: "level", foreignKey: "level_id"});
  job_state.hasMany(artist_language_link, { as: "artist_language_links", foreignKey: "level_id"});
  ledger.belongsTo(ledger_account, { as: "cr_account", foreignKey: "cr_account_id"});
  ledger_account.hasMany(ledger, { as: "ledgers", foreignKey: "cr_account_id"});
  ledger.belongsTo(ledger_account, { as: "dr_account", foreignKey: "dr_account_id"});
  ledger_account.hasMany(ledger, { as: "dr_account_ledgers", foreignKey: "dr_account_id"});
  message_recipient.belongsTo(message, { as: "message", foreignKey: "message_id"});
  message.hasMany(message_recipient, {  foreignKey: "message_id"});
  message.belongsTo(message_status, { as: "status_message_status", foreignKey: "status"});
  message_status.hasMany(message, { as: "messages", foreignKey: "status"});
  message.belongsTo(message_type, { as: "type_message_type", foreignKey: "type"});
  message_type.hasMany(message, { as: "messages", foreignKey: "type"});
  artist.belongsTo(office, { as: "period", foreignKey: "period_id"});
  office.hasMany(artist, { as: "artists", foreignKey: "period_id"});
  artist_county.belongsTo(office, { as: "office", foreignKey: "office_id"});
  office.hasMany(artist_county, { as: "artist_counties", foreignKey: "office_id"});
  job.belongsTo(office, { as: "artist", foreignKey: "artist_id"});
  office.hasMany(job, { as: "jobs", foreignKey: "artist_id"});
  period.belongsTo(office, { as: "office", foreignKey: "office_id"});
  office.hasMany(period, { as: "periods", foreignKey: "office_id"});
  registration_slot.belongsTo(office, { as: "office", foreignKey: "office_id"});
  office.hasMany(registration_slot, { as: "registration_slots", foreignKey: "office_id"});
  payroll_rti.belongsTo(payroll, { as: "payroll", foreignKey: "payroll_id"});
  payroll.hasMany(payroll_rti, { as: "payroll_rtis", foreignKey: "payroll_id"});
  payroll_tax.belongsTo(payroll, { as: "payroll", foreignKey: "payroll_id"});
  payroll.hasMany(payroll_tax, { as: "payroll_taxes", foreignKey: "payroll_id"});
  artist.belongsTo(period, { as: "prev_period", foreignKey: "prev_period_id"});
  period.hasMany(artist, { as: "artists", foreignKey: "prev_period_id"});
  job.belongsTo(period, { as: "briefing", foreignKey: "briefing_id"});
  period.hasMany(job, { as: "jobs", foreignKey: "briefing_id"});
  artist_acting_style_link.belongsTo(project, { as: "artist", foreignKey: "artist_id"});
  project.hasMany(artist_acting_style_link, { as: "artist_acting_style_links", foreignKey: "artist_id"});
  artist_dance_skill_link.belongsTo(project, { as: "skill", foreignKey: "skill_id"});
  project.hasMany(artist_dance_skill_link, { as: "artist_dance_skill_links", foreignKey: "skill_id"});
  chits2_chitsproject.belongsTo(project, { as: "zope_project", foreignKey: "zope_project_id"});
  project.hasMany(chits2_chitsproject, { as: "chits2_chitsprojects", foreignKey: "zope_project_id"});
  chits_chitsproject.belongsTo(project, { as: "zope_project", foreignKey: "zope_project_id"});
  project.hasMany(chits_chitsproject, { as: "chits_chitsprojects", foreignKey: "zope_project_id"});
  attachment_type.hasOne(division_attachment_tag,{foreignKey: "attachment_type_id"})
  division_attachment_tag.belongsTo(attachment_type, {  foreignKey: "attachment_type_id"});
  
  project.hasMany(division_attachment_tag, { as: "division_attachment_tags", foreignKey: "attachment_type_id"});
  enquiry.belongsTo(project, { as: "project", foreignKey: "project_id"});
  project.hasMany(enquiry, { as: "enquiries", foreignKey: "project_id"});
  ledger.belongsTo(project, { as: "project", foreignKey: "project_id"});
  project.hasMany(ledger, { as: "ledgers", foreignKey: "project_id"});
  payroll_tax.belongsTo(project, { as: "project", foreignKey: "project_id"});
  project.hasMany(payroll_tax, { as: "payroll_taxes", foreignKey: "project_id"});
  enquiry.belongsTo(project_type, { as: "project_type", foreignKey: "project_type_id"});
  project_type.hasMany(enquiry, { as: "enquiries", foreignKey: "project_type_id"});
  // project.belongsTo(project_type, { as: "type", foreignKey: "type_id"});
  // project_type.hasMany(project, { as: "projects", foreignKey: "type_id"});
  registration_slot_link.belongsTo(registration_slot, { as: "slot", foreignKey: "slot_id"});
  registration_slot.hasMany(registration_slot_link, { as: "registration_slot_links", foreignKey: "slot_id"});
  artist_experience.belongsTo(shortlist, { as: "artist", foreignKey: "artist_id"});
  shortlist.hasMany(artist_experience, { as: "artist_experiences", foreignKey: "artist_id"});
  briefing.belongsTo(shortlist, { as: "project", foreignKey: "project_id"});
  shortlist.hasMany(briefing, { as: "briefings", foreignKey: "project_id"});
  invoice.belongsTo(shortlist, { as: "project", foreignKey: "project_id"});
  shortlist.hasMany(invoice, { as: "invoices", foreignKey: "project_id"});
  invoice_item.belongsTo(shortlist, { as: "invoice", foreignKey: "invoice_id"});
  shortlist.hasMany(invoice_item, { as: "invoice_items", foreignKey: "invoice_id"});
  project.belongsTo(shortlist, { as: "manager", foreignKey: "manager_id"});
  shortlist.hasMany(project, { as: "projects", foreignKey: "manager_id"});
  // project.belongsTo(shortlist, { as: "shortlists", foreignKey: "shortlist_id"});
  // shortlist.hasMany(project, { as: "shortlist_projects", foreignKey: "shortlist_id"});
  // shortlist.belongsTo(shortlist, { as: "parent", foreignKey: "parent_id"});
  // shortlist.hasMany(shortlist, { as: "shortlists", foreignKey: "parent_id"});
  shortlist_access.belongsTo(shortlist, {  foreignKey: "shortlist_id"});
  shortlist.hasMany(shortlist_access, {  foreignKey: "shortlist_id"});
  
  // shortlist_entry_attachment.belongsTo(shortlist, { as: "shortlist", foreignKey: "shortlist_id"});
  // shortlist.hasMany(shortlist_entry_attachment, { as: "shortlist_entry_attachments", foreignKey: "shortlist_id"});
  // user.belongsTo(shortlist, {foreignKey: "client_id"});
  // shortlist.hasMany(user, {  foreignKey: "user_id"});



  silk_profile_queries.belongsTo(silk_profile, { as: "profile", foreignKey: "profile_id"});
  silk_profile.hasMany(silk_profile_queries, { as: "silk_profile_queries", foreignKey: "profile_id"});
  silk_profile.belongsTo(silk_request, { as: "request", foreignKey: "request_id"});
  silk_request.hasMany(silk_profile, { as: "silk_profiles", foreignKey: "request_id"});
  silk_response.belongsTo(silk_request, { as: "request", foreignKey: "request_id"});
  silk_request.hasOne(silk_response, { as: "silk_response", foreignKey: "request_id"});
  silk_sqlquery.belongsTo(silk_request, { as: "request", foreignKey: "request_id"});
  silk_request.hasMany(silk_sqlquery, { as: "silk_sqlqueries", foreignKey: "request_id"});
  silk_profile_queries.belongsTo(silk_sqlquery, { as: "sqlquery", foreignKey: "sqlquery_id"});
  silk_sqlquery.hasMany(silk_profile_queries, { as: "silk_profile_queries", foreignKey: "sqlquery_id"});
  ledger.belongsTo(tax_period, { as: "tax_period", foreignKey: "tax_period_id"});
  tax_period.hasMany(ledger, { as: "ledgers", foreignKey: "tax_period_id"});
  payroll.belongsTo(tax_period, { as: "tax_period", foreignKey: "tax_period_id"});
  tax_period.hasMany(payroll, { as: "payrolls", foreignKey: "tax_period_id"});
  castr_saved_shortlists.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(castr_saved_shortlists, { as: "castr_saved_shortlists", foreignKey: "user_id"});
  castr_settings.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasOne(castr_settings, { as: "castr_setting", foreignKey: "user_id"});
  chits2_chitsproject.belongsTo(user, { as: "project_manager", foreignKey: "project_manager_id"});
  user.hasMany(chits2_chitsproject, { as: "chits2_chitsprojects", foreignKey: "project_manager_id"});
  chits2_chitsuser.belongsTo(user, { as: "zope_user", foreignKey: "zope_user_id"});
  user.hasOne(chits2_chitsuser, { as: "chits2_chitsuser", foreignKey: "zope_user_id"});
  chits_chitsproject.belongsTo(user, { as: "project_manager", foreignKey: "project_manager_id"});
  user.hasMany(chits_chitsproject, { as: "chits_chitsprojects", foreignKey: "project_manager_id"});
  chits_chitsuser.belongsTo(user, { as: "zope_user", foreignKey: "zope_user_id"});
  user.hasOne(chits_chitsuser, { as: "chits_chitsuser", foreignKey: "zope_user_id"});
  enquiry.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(enquiry, { as: "enquiries", foreignKey: "user_id"});
  govtalk_request.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(govtalk_request, { as: "govtalk_requests", foreignKey: "user_id"});
  lookbook_template.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(lookbook_template, { as: "lookbook_templates", foreignKey: "user_id"});
  message.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(message, { as: "messages", foreignKey: "user_id"});
  news.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(news, { as: "newss", foreignKey: "user_id"});
  photoshoot_queue.belongsTo(user, { as: "user_add_user", foreignKey: "user_add"});
  user.hasMany(photoshoot_queue, { as: "photoshoot_queues", foreignKey: "user_add"});
  shortlist_access.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(shortlist_access, { as: "shortlist_accesses", foreignKey: "user_id"});
  shortlist_inactive.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(shortlist_inactive, { as: "shortlist_inactives", foreignKey: "user_id"});
  shortlist_open.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(shortlist_open, { as: "shortlist_opens", foreignKey: "user_id"});
  artist_availability.belongsTo(user_access, { as: "artist", foreignKey: "artist_id"});
  user_access.hasMany(artist_availability, { as: "artist_availabilities", foreignKey: "artist_id"});
  artist_ethnicity_link.belongsTo(user_access, { as: "artist", foreignKey: "artist_id"});
  user_access.hasMany(artist_ethnicity_link, { as: "artist_ethnicity_links", foreignKey: "artist_id"});
  artist_language_link.belongsTo(user_access, { as: "artist", foreignKey: "artist_id"});
  user_access.hasMany(artist_language_link, { as: "artist_language_links", foreignKey: "artist_id"});
  artist_project_link.belongsTo(user_access, { as: "artist", foreignKey: "artist_id"});
  user_access.hasMany(artist_project_link, { as: "artist_project_links", foreignKey: "artist_id"});
  artist_rating_link.belongsTo(user_access, { as: "artist", foreignKey: "artist_id"});
  user_access.hasMany(artist_rating_link, { as: "artist_rating_links", foreignKey: "artist_id"});
  division_attachment_tag.belongsTo(user_access, { as: "division", foreignKey: "division_id"});
  user_access.hasMany(division_attachment_tag, { as: "division_attachment_tags", foreignKey: "division_id"});

  return {
    app_messages_appchat,
    app_messages_appmessage,
    artist,
    artist_accent,
    artist_accent_link,
    artist_acting_style,
    artist_acting_style_link,
    artist_attachment,
    artist_availability,
    artist_county,
    artist_county_link,
    artist_credit,
    artist_cup_size,
    artist_dance_skill,
    artist_dance_skill_link,
    artist_division_link,
    artist_dress_size,
    artist_ethnicity,
    artist_ethnicity_link,
    artist_experience,
    artist_eye_colour,
    artist_hair_colour,
    artist_heritage,
    artist_heritage_link,
    artist_language,
    artist_language_level,
    artist_language_link,
    artist_nationality,
    artist_other_job_type,
    artist_project_link,
    artist_rating,
    artist_rating_link,
    artist_skill,
    artist_skill_level,
    artist_skill_link,
    artist_wardrobe,
    artist_wardrobe_link,
    artist_work_rating,
    attachment_type,
    auth_group,
    auth_group_permissions,
    auth_permission,
    auth_user,
    auth_user_groups,
    auth_user_user_permissions,
    authtoken_token,
    briefing,
    briefing_entry_attachment,
    briefing_new,
    castr_entry_shortlists,
    castr_ignored_enquiry,
    castr_maddog_settings,
    castr_saved_shortlists,
    castr_settings,
    castr_shortlist_meta,
    chits2_chitsartistcheckin,
    chits2_chitsbbcrates,
    chits2_chitsfaarates,
    chits2_chitsmessagetemplate,
    chits2_chitsproject,
    chits2_chitsproject_production_user,
    chits2_chitsshootday,
    chits2_chitsshootday_production_user,
    chits2_chitssubmission,
    chits2_chitstextpage,
    chits2_chitsuser,
    chits_chitsartistcheckin,
    chits_chitsfaarates,
    chits_chitsmessagetemplate,
    chits_chitsproject,
    chits_chitsproject_production_user,
    chits_chitsshootday,
    chits_chitsshootday_production_user,
    chits_chitssubmission,
    chits_chitstextpage,
    chits_chitsuser,
    client_company,
    division,
    division_attachment_tag,
    django_admin_log,
    django_content_type,
    django_migrations,
    django_session,
    dummy_data,
    enquiry,
    enquiry_artist,
    enquiry_artist_answer,
    enquiry_log,
    enquiry_question,
    enquiry_question_option,
    enquiry_question_type,
    enquiry_type,
    govtalk_dps_response,
    govtalk_dps_rtinot,
    govtalk_error,
    govtalk_error_code,
    govtalk_request,
    invoice,
    invoice_item,
    job,
    job_new,
    job_state,
    job_template,
    ledger,
    ledger_account,
    lookbook_template,
    message,
    message_recipient,
    message_status,
    message_type,
    news,
    office,
    payroll,
    payroll_rti,
    payroll_tax,
    period,
    photoshoot_active,
    photoshoot_queue,
    project,
    project_type,
    registration_slot,
    registration_slot_link,
    shortlist,
    shortlist_access,
    shortlist_entry,
    shortlist_entry_attachment,
    shortlist_inactive,
    shortlist_open,
    silk_profile,
    silk_profile_queries,
    silk_request,
    silk_response,
    silk_sqlquery,
    tax_period,
    two_factor_auth,
    user,
    user_access,
    user_dev_temp,
    user_history,
    user_restore_temp,
    zope_user,
    artist_branch_registration
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
