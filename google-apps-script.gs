// ============================================
// ГАСТРОНОМИЧЕСКИЙ СПЕКТАКЛЬ — Google Apps Script v2
// FCM HTTP v1 API (современный способ без Legacy Server Key)
// ============================================
//
// ИНСТРУКЦИЯ ПО УСТАНОВКЕ:
// 1. Откройте Google Таблицу → Расширения → Apps Script
// 2. Удалите весь старый код и вставьте этот файл целиком
// 3. Сохраните (Ctrl+S)
// 4. Запустите функцию initialSetup → ▶️ Run → Разрешите доступ
// 5. Запустите функцию setupFirebaseServiceAccount
//    (попросит ввести client_email и private_key из JSON-файла)
// 6. Разверните как веб-приложение:
//    Развернуть → Новое развертывание
//    - Тип: Веб-приложение
//    - Выполнять от: Я
//    - Кто имеет доступ: Anyone
// 7. Скопируйте URL веб-приложения
// ============================================

var STATUS_NEW = 'Новый';
var STATUS_ACCEPTED = 'Принят';
var STATUS_COOKING = 'Готовится';
var STATUS_DELIVERY = 'В доставке';
var STATUS_DONE = 'Доставлен';
var VALID_STATUSES = [STATUS_NEW, STATUS_ACCEPTED, STATUS_COOKING, STATUS_DELIVERY, STATUS_DONE];

var FIREBASE_PROJECT_ID = 'gastrospektakl';

// ============================================
// НАСТРОЙКА
// ============================================

function initialSetup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var ordersSheet = ss.getSheetByName('Заказы');
  if (!ordersSheet) {
    ordersSheet = ss.insertSheet('Заказы');
  }

  var headers = ['Timestamp', 'OrderID', 'Name', 'Phone', 'Address', 'Comment', 'Items', 'TotalPrice', 'Status'];
  var firstRow = ordersSheet.getRange(1, 1, 1, headers.length).getValues()[0];

  if (!firstRow[0]) {
    ordersSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    ordersSheet.getRange(1, 1, 1, headers.length)
      .setBackground('#1a1a1a')
      .setFontColor('#D4AF37')
      .setFontWeight('bold')
      .setHorizontalAlignment('center');
    ordersSheet.setColumnWidth(1, 160);
    ordersSheet.setColumnWidth(2, 120);
    ordersSheet.setColumnWidth(3, 150);
    ordersSheet.setColumnWidth(4, 140);
    ordersSheet.setColumnWidth(5, 200);
    ordersSheet.setColumnWidth(6, 200);
    ordersSheet.setColumnWidth(7, 300);
    ordersSheet.setColumnWidth(8, 100);
    ordersSheet.setColumnWidth(9, 100);
  }

  var tokensSheet = ss.getSheetByName('Push Tokens');
  if (!tokensSheet) {
    tokensSheet = ss.insertSheet('Push Tokens');
  }
  var tokenHeaders = ['Token', 'Platform', 'AddedAt'];
  var tokenFirstRow = tokensSheet.getRange(1, 1, 1, tokenHeaders.length).getValues()[0];
  if (!tokenFirstRow[0]) {
    tokensSheet.getRange(1, 1, 1, tokenHeaders.length).setValues([tokenHeaders]);
    tokensSheet.getRange(1, 1, 1, tokenHeaders.length)
      .setBackground('#1a1a1a')
      .setFontColor('#D4AF37')
      .setFontWeight('bold');
    tokensSheet.setColumnWidth(1, 300);
    tokensSheet.setColumnWidth(2, 100);
    tokensSheet.setColumnWidth(3, 160);
  }

  var webPushSheet = ss.getSheetByName('Web Push Subscriptions');
  if (!webPushSheet) {
    webPushSheet = ss.insertSheet('Web Push Subscriptions');
  }
  var webPushHeaders = ['Endpoint', 'P256DH', 'Auth', 'AddedAt'];
  var wpFirstRow = webPushSheet.getRange(1, 1, 1, webPushHeaders.length).getValues()[0];
  if (!wpFirstRow[0]) {
    webPushSheet.getRange(1, 1, 1, webPushHeaders.length).setValues([webPushHeaders]);
    webPushSheet.getRange(1, 1, 1, webPushHeaders.length)
      .setBackground('#1a1a1a')
      .setFontColor('#D4AF37')
      .setFontWeight('bold');
    webPushSheet.setColumnWidth(1, 400);
    webPushSheet.setColumnWidth(2, 200);
    webPushSheet.setColumnWidth(3, 200);
    webPushSheet.setColumnWidth(4, 160);
  }

  PropertiesService.getScriptProperties().setProperty('SPREADSHEET_ID', ss.getId());
  Logger.log('Setup complete! Spreadsheet: ' + ss.getName());
  Logger.log('Spreadsheet ID: ' + ss.getId());
  Logger.log('Now run: setupFirebaseServiceAccount()');
}

function setupFirebaseServiceAccount() {
  var ui = SpreadsheetApp.getUi();
  var emailResponse = ui.prompt('Firebase Service Account', 'Вставьте client_email из JSON-файла:', ui.ButtonSet.OK_CANCEL);
  if (emailResponse.getSelectedButton() !== ui.Button.OK) return;

  var keyResponse = ui.prompt('Firebase Service Account', 'Вставьте private_key из JSON-файла (целиком, с BEGIN/END):', ui.ButtonSet.OK_CANCEL);
  if (keyResponse.getSelectedButton() !== ui.Button.OK) return;

  var props = PropertiesService.getScriptProperties();
  props.setProperty('FIREBASE_CLIENT_EMAIL', emailResponse.getResponseText().trim());
  props.setProperty('FIREBASE_PRIVATE_KEY', keyResponse.getResponseText().trim());

  Logger.log('Firebase service account saved.');
  Logger.log('client_email: ' + emailResponse.getResponseText().trim());

  try {
    var token = getAccessToken();
    Logger.log('OAuth token obtained successfully! Length: ' + token.length);
    Logger.log('Firebase push is ready!');
  } catch (e) {
    Logger.log('ERROR getting token: ' + e.toString());
    Logger.log('Try alternative: setupFirebaseManual()');
  }
}

// АЛЬТЕРНАТИВА: Если промпт ломает ключ — вставьте значения сюда напрямую
// Замените ЗНАЧЕНИЯ КАВЫЧЕК на свои и запустите setupFirebaseManual()
function setupFirebaseManual() {
  var CLIENT_EMAIL = 'firebase-adminsdk-fbsvc@gastrospektakl.iam.gserviceaccount.com';
  var PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nВСТАВЬТЕ_СЮДА_КЛЮЧ_ИЗ_JSON\n-----END PRIVATE KEY-----';

  var props = PropertiesService.getScriptProperties();
  props.setProperty('FIREBASE_CLIENT_EMAIL', CLIENT_EMAIL);
  props.setProperty('FIREBASE_PRIVATE_KEY', PRIVATE_KEY);

  Logger.log('Manual setup done. Running token test...');

  try {
    var token = getAccessToken();
    Logger.log('OAuth token obtained! Length: ' + token.length);
    Logger.log('Firebase push is ready!');
  } catch (e) {
    Logger.log('ERROR: ' + e.toString());
  }
}

// ============================================
// OAUTH2 — Получение токена для FCM HTTP v1
// ============================================

function base64UrlEncode(bytes) {
  return Utilities.base64Encode(bytes)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function getAccessToken() {
  var props = PropertiesService.getScriptProperties();
  var clientEmail = props.getProperty('FIREBASE_CLIENT_EMAIL');
  var privateKey = props.getProperty('FIREBASE_PRIVATE_KEY');

  if (!clientEmail || !privateKey) {
    throw new Error('Firebase credentials not set. Run setupFirebaseServiceAccount() first.');
  }

  // Fix newlines that get lost in UI prompt
  privateKey = privateKey.replace(/\\n/g, '\n').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  var cached = props.getProperty('FCM_ACCESS_TOKEN');
  var cachedExpiry = props.getProperty('FCM_TOKEN_EXPIRY');
  if (cached && cachedExpiry && Date.now() < parseInt(cachedExpiry)) {
    return cached;
  }

  var now = Math.floor(Date.now() / 1000);

  var header = base64UrlEncode(Utilities.newBlob(JSON.stringify({
    alg: 'RS256',
    typ: 'JWT'
  })).getBytes());

  var claimSet = base64UrlEncode(Utilities.newBlob(JSON.stringify({
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/firebase.messaging',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  })).getBytes());

  var signatureInput = header + '.' + claimSet;
  var signature = base64UrlEncode(Utilities.computeRsaSha256Signature(signatureInput, privateKey));
  var jwt = signatureInput + '.' + signature;

  var response = UrlFetchApp.fetch('https://oauth2.googleapis.com/token', {
    method: 'post',
    contentType: 'application/x-www-form-urlencoded',
    payload: {
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    },
    muteHttpExceptions: true
  });

  var json = JSON.parse(response.getContentText());

  if (!json.access_token) {
    throw new Error('Failed to get access token: ' + response.getContentText());
  }

  props.setProperty('FCM_ACCESS_TOKEN', json.access_token);
  props.setProperty('FCM_TOKEN_EXPIRY', String(Date.now() + 55 * 60 * 1000));

  Logger.log('OAuth access token obtained.');
  return json.access_token;
}

// ============================================
// PUSH УВЕДОМЛЕНИЯ — FCM HTTP v1
// ============================================

function sendPushToAllDevices(title, body, data) {
  var tokens = getAllPushTokens();

  if (tokens.length === 0) {
    Logger.log('No push tokens registered. Skipping notification.');
    return;
  }

  var accessToken;
  try {
    accessToken = getAccessToken();
  } catch (e) {
    Logger.log('Cannot get access token: ' + e.toString());
    return;
  }

  for (var i = 0; i < tokens.length; i++) {
    try {
      sendPushToDevice(accessToken, tokens[i], title, body, data);
    } catch (e) {
      Logger.log('Push failed for token ' + tokens[i].substring(0, 20) + '...: ' + e.toString());
    }
  }

  Logger.log('Push notifications sent to ' + tokens.length + ' device(s).');
}

function sendPushToDevice(accessToken, token, title, body, data) {
  var message = {
    message: {
      token: token,
      notification: {
        title: title,
        body: body
      },
      data: data || {},
      android: {
        priority: 'high',
        notification: {
          sound: 'default',
          channel_id: 'orders'
        }
      },
      webpush: {
        headers: {
          TTL: '86400'
        },
        notification: {
          title: title,
          body: body,
          icon: '/icons/icon-192.png',
          badge: '/icons/icon-192.png'
        },
        fcm_options: {
          link: '/'
        }
      },
      apns: {
        payload: {
          aps: {
            sound: 'default',
            badge: 1
          }
        }
      }
    }
  };

  var response = UrlFetchApp.fetch(
    'https://fcm.googleapis.com/v1/projects/' + FIREBASE_PROJECT_ID + '/messages:send',
    {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      payload: JSON.stringify(message),
      muteHttpExceptions: true
    }
  );

  var result = JSON.parse(response.getContentText());
  if (result.error) {
    Logger.log('FCM error: ' + JSON.stringify(result.error));
  }
}

// ============================================
// PUSH TOKENS — Управление
// ============================================

function getAllPushTokens() {
  var sheet = getSheetByName('Push Tokens');
  if (!sheet) return [];

  var data = sheet.getDataRange().getValues();
  var tokens = [];

  for (var i = 1; i < data.length; i++) {
    if (data[i][0]) {
      tokens.push(String(data[i][0]));
    }
  }

  return tokens;
}

function getOrdersSheet() {
  return getSheetByName('Заказы');
}

function getSheetByName(name) {
  var props = PropertiesService.getScriptProperties();
  var ssId = props.getProperty('SPREADSHEET_ID');
  if (ssId) {
    try {
      var ss = SpreadsheetApp.openById(ssId);
      return ss.getSheetByName(name);
    } catch (e) {
      Logger.log('Cannot open by ID: ' + e.toString());
    }
  }
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(name) || ss.getSheets()[0];
}

function getSheet() {
  return getOrdersSheet();
}

function generateOrderId() {
  var now = new Date();
  var date = Utilities.formatDate(now, 'Europe/Moscow', 'yyMMdd');
  var random = Math.floor(Math.random() * 900 + 100);
  return 'GS-' + date + '-' + random;
}

// ============================================
// FIREBASE WEB APP — Управление (для PWA push)
// ============================================

function getManagementAccessToken() {
  var props = PropertiesService.getScriptProperties();
  var clientEmail = props.getProperty('FIREBASE_CLIENT_EMAIL');
  var privateKey = props.getProperty('FIREBASE_PRIVATE_KEY');

  if (!clientEmail || !privateKey) {
    throw new Error('Firebase credentials not set.');
  }

  privateKey = privateKey.replace(/\\n/g, '\n').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  var cached = props.getProperty('MGMT_ACCESS_TOKEN');
  var cachedExpiry = props.getProperty('MGMT_TOKEN_EXPIRY');
  if (cached && cachedExpiry && Date.now() < parseInt(cachedExpiry)) {
    return cached;
  }

  var now = Math.floor(Date.now() / 1000);

  var header = base64UrlEncode(Utilities.newBlob(JSON.stringify({
    alg: 'RS256',
    typ: 'JWT'
  })).getBytes());

  var claimSet = base64UrlEncode(Utilities.newBlob(JSON.stringify({
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/firebase',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  })).getBytes());

  var signatureInput = header + '.' + claimSet;
  var signature = base64UrlEncode(Utilities.computeRsaSha256Signature(signatureInput, privateKey));
  var jwt = signatureInput + '.' + signature;

  var response = UrlFetchApp.fetch('https://oauth2.googleapis.com/token', {
    method: 'post',
    contentType: 'application/x-www-form-urlencoded',
    payload: {
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    },
    muteHttpExceptions: true
  });

  var json = JSON.parse(response.getContentText());
  if (!json.access_token) {
    throw new Error('Failed to get management token: ' + response.getContentText());
  }

  props.setProperty('MGMT_ACCESS_TOKEN', json.access_token);
  props.setProperty('MGMT_TOKEN_EXPIRY', String(Date.now() + 55 * 60 * 1000));
  return json.access_token;
}

function getOrCreateFirebaseWebApp() {
  var props = PropertiesService.getScriptProperties();
  var token = getManagementAccessToken();
  var projectId = FIREBASE_PROJECT_ID;

  var cachedConfig = props.getProperty('FIREBASE_WEB_CONFIG');
  if (cachedConfig) {
    return JSON.parse(cachedConfig);
  }

  var listResponse = UrlFetchApp.fetch(
    'https://firebase.googleapis.com/v1beta1/projects/' + projectId + '/webApps',
    {
      headers: { 'Authorization': 'Bearer ' + token },
      muteHttpExceptions: true
    }
  );

  var apps = JSON.parse(listResponse.getContentText());
  if (apps.apps && apps.apps.length > 0) {
    var webApp = apps.apps[0];
    var config = {
      apiKey: webApp.apiKey,
      authDomain: webApp.authDomain,
      projectId: webApp.projectId,
      storageBucket: webApp.storageBucket,
      messagingSenderId: webApp.messagingSenderId,
      appId: webApp.appId
    };

    if (webApp.messagingSenderId) {
      props.setProperty('FIREBASE_WEB_CONFIG', JSON.stringify(config));
    }
    return config;
  }

  var createResponse = UrlFetchApp.fetch(
    'https://firebase.googleapis.com/v1beta1/projects/' + projectId + '/webApps',
    {
      method: 'post',
      contentType: 'application/json',
      headers: { 'Authorization': 'Bearer ' + token },
      payload: JSON.stringify({
        displayName: 'Гастрономический Спектакль Web'
      }),
      muteHttpExceptions: true
    }
  );

  var result = JSON.parse(createResponse.getContentText());
  if (result.error) {
    throw new Error('Failed to create web app: ' + JSON.stringify(result.error));
  }

  var config = {
    apiKey: result.apiKey,
    authDomain: result.authDomain,
    projectId: result.projectId,
    storageBucket: result.storageBucket,
    messagingSenderId: result.messagingSenderId,
    appId: result.appId
  };

  props.setProperty('FIREBASE_WEB_CONFIG', JSON.stringify(config));
  Logger.log('Firebase Web App created: ' + JSON.stringify(config));
  return config;
}

// ============================================
// HTTP HANDLERS
// ============================================

function doGet(e) {
  var action = e.parameter ? e.parameter.action : '';

  if (action === 'orders') return doGetOrders(e);
  if (action === 'stats') return doGetStats(e);
  if (action === 'updateStatus') return doUpdateStatus(e);
  if (action === 'webConfig') return doGetWebConfig(e);

  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Gastro Spektakl API v2.0' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doGetOrders(e) {
  try {
    var sheet = getOrdersSheet();
    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'ok', orders: [] })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'ok', orders: [] })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var headers = data[0];
    var orders = [];

    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      var order = {};
      for (var j = 0; j < headers.length; j++) {
        order[headers[j]] = row[j];
      }
      try { order.Items = JSON.parse(order.Items || '[]'); } catch (err) { order.Items = []; }
      order.rowIndex = i + 1;
      orders.push(order);
    }

    var statusFilter = e.parameter ? e.parameter.status : '';
    var filteredOrders = orders;
    if (statusFilter && VALID_STATUSES.indexOf(statusFilter) !== -1) {
      filteredOrders = orders.filter(function(o) { return o.Status === statusFilter; });
    }

    filteredOrders.sort(function(a, b) {
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'ok', orders: filteredOrders })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: e.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGetStats(e) {
  try {
    var sheet = getOrdersSheet();
    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'ok', stats: {
          today: { revenue: 0, orders: 0, avg: 0 },
          week: { revenue: 0, orders: 0, avg: 0 },
          month: { revenue: 0, orders: 0, avg: 0 }
        }})
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'ok', stats: {
          today: { revenue: 0, orders: 0, avg: 0 },
          week: { revenue: 0, orders: 0, avg: 0 },
          month: { revenue: 0, orders: 0, avg: 0 }
        }})
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var headers = data[0];
    var now = new Date();
    var todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay() + 1);
    weekStart.setHours(0, 0, 0, 0);
    var monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    var todayRevenue = 0, todayCount = 0;
    var weekRevenue = 0, weekCount = 0;
    var monthRevenue = 0, monthCount = 0;

    var totalIdx = headers.indexOf('TotalPrice');
    var dateIdx = headers.indexOf('Timestamp');

    for (var i = 1; i < data.length; i++) {
      var rowDate = new Date(data[i][dateIdx]);
      var price = parseFloat(data[i][totalIdx]) || 0;

      if (rowDate >= todayStart) { todayRevenue += price; todayCount++; }
      if (rowDate >= weekStart) { weekRevenue += price; weekCount++; }
      if (rowDate >= monthStart) { monthRevenue += price; monthCount++; }
    }

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'ok', stats: {
        today: { revenue: todayRevenue, orders: todayCount, avg: todayCount > 0 ? Math.round(todayRevenue / todayCount) : 0 },
        week: { revenue: weekRevenue, orders: weekCount, avg: weekCount > 0 ? Math.round(weekRevenue / weekCount) : 0 },
        month: { revenue: monthRevenue, orders: monthCount, avg: monthCount > 0 ? Math.round(monthRevenue / monthCount) : 0 }
      }})
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: e.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doUpdateStatus(e) {
  try {
    var orderId = e.parameter.orderId;
    var newStatus = e.parameter.status;

    if (!orderId || !newStatus) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'error', message: 'orderId and status required' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (VALID_STATUSES.indexOf(newStatus) === -1) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'error', message: 'Invalid status' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = getOrdersSheet();
    var data = sheet.getDataRange().getValues();
    var orderIdIdx = data[0].indexOf('OrderID');
    var statusIdx = data[0].indexOf('Status');

    for (var i = 1; i < data.length; i++) {
      if (data[i][orderIdIdx] === orderId) {
        sheet.getRange(i + 1, statusIdx + 1).setValue(newStatus);

        if (newStatus === STATUS_DONE) {
          sheet.getRange(i + 1, statusIdx + 1).setBackground('#C8E6C9');
        } else if (newStatus === STATUS_NEW) {
          sheet.getRange(i + 1, statusIdx + 1).setBackground('#FFE082').setFontColor('#000000');
        }

        return ContentService.createTextOutput(
          JSON.stringify({ status: 'ok', message: 'Status updated to: ' + newStatus })
        ).setMimeType(ContentService.MimeType.JSON);
      }
    }

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'Order not found: ' + orderId })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: e.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGetWebConfig(e) {
  try {
    var config = getOrCreateFirebaseWebApp();
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'ok', config: config })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: e.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// --- POST ---

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);

    if (body.action === 'registerToken') {
      return doRegisterToken(body);
    }

    if (body.action === 'removeToken') {
      return doRemoveToken(body);
    }

    if (body.action === 'registerWebPush') {
      return doRegisterWebPush(body);
    }

    if (body.action === 'removeWebPush') {
      return doRemoveWebPush(body);
    }

    if (!body.name || !body.phone || !body.address) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'error', message: 'name, phone, address are required' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = getOrdersSheet();
    var orderId = generateOrderId();
    var timestamp = Utilities.formatDate(new Date(), 'Europe/Moscow', 'dd.MM.yyyy HH:mm:ss');
    var items = JSON.stringify(body.items || []);
    var totalPrice = body.totalPrice || 0;
    var comment = body.comment || '';

    sheet.appendRow([timestamp, orderId, body.name, body.phone, body.address, comment, items, totalPrice, STATUS_NEW]);

    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 9).setBackground('#FFE082').setFontColor('#000000');

    var notifBody = body.name + ' — ' + totalPrice + ' ₽';

    sendPushToAllDevices('Новый заказ! ' + orderId, notifBody, {
      orderId: orderId,
      name: body.name,
      total: String(totalPrice)
    });

    Logger.log('Order created: ' + orderId + ' from ' + body.name);

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'ok', orderId: orderId, message: 'Заказ принят!' })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    Logger.log('POST error: ' + e.toString());
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: e.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doRegisterToken(body) {
  var token = body.token;
  var platform = body.platform || 'unknown';

  if (!token) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'token is required' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  var sheet = getSheetByName('Push Tokens');
  if (!sheet) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'Push Tokens sheet not found. Run initialSetup().' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === token) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'ok', message: 'Token already registered' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
  }

  var timestamp = Utilities.formatDate(new Date(), 'Europe/Moscow', 'dd.MM.yyyy HH:mm:ss');
  sheet.appendRow([token, platform, timestamp]);

  Logger.log('Push token registered: ' + token.substring(0, 20) + '... (' + platform + ')');

  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Token registered' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doRemoveToken(body) {
  var token = body.token;
  if (!token) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'token is required' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  var sheet = getSheetByName('Push Tokens');
  if (!sheet) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'Push Tokens sheet not found' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === token) {
      sheet.deleteRow(i + 1);
      Logger.log('Push token removed.');
      break;
    }
  }

  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Token removed' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doRegisterWebPush(body) {
  var endpoint = body.endpoint;
  var p256dh = body.p256dh;
  var auth = body.auth;

  if (!endpoint) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'endpoint is required' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  var sheet = getSheetByName('Web Push Subscriptions');
  if (!sheet) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'Web Push Subscriptions sheet not found. Run initialSetup().' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === endpoint) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'ok', message: 'Subscription already registered' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
  }

  var timestamp = Utilities.formatDate(new Date(), 'Europe/Moscow', 'dd.MM.yyyy HH:mm:ss');
  sheet.appendRow([endpoint, p256dh || '', auth || '', timestamp]);

  Logger.log('Web Push subscription registered: ' + endpoint.substring(0, 60) + '...');

  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Web Push subscription registered' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doRemoveWebPush(body) {
  var endpoint = body.endpoint;
  if (!endpoint) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'endpoint is required' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  var sheet = getSheetByName('Web Push Subscriptions');
  if (!sheet) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'Web Push Subscriptions sheet not found' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === endpoint) {
      sheet.deleteRow(i + 1);
      Logger.log('Web Push subscription removed.');
      break;
    }
  }

  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Web Push subscription removed' })
  ).setMimeType(ContentService.MimeType.JSON);
}
