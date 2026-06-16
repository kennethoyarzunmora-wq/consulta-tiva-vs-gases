const SHEET_NAME = "respuestas";
const ADMIN_KEY = "CAMBIA_ESTA_CLAVE";

const HEADERS = [
  "id_anonimo",
  "fecha",
  "centro",
  "caso",
  "descripcion",
  "tecnica",
  "barrera"
];

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || "{}");
    if (body.action !== "submit") {
      return jsonResponse({ ok: false, error: "Accion no valida" });
    }

    const payload = validatePayload(body.payload);
    const sheet = getSheet();
    const rows = payload.respuestas.map(answer => [
      payload.id_anonimo,
      payload.fecha,
      payload.centro,
      answer.caso,
      answer.descripcion,
      answer.tecnica,
      answer.barrera || ""
    ]);

    sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, HEADERS.length).setValues(rows);
    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message });
  }
}

function doGet(e) {
  try {
    const params = e.parameter || {};
    if (params.action !== "list") {
      return jsonResponse({ ok: false, error: "Accion no valida" }, params.callback);
    }
    if (params.admin_key !== ADMIN_KEY) {
      return jsonResponse({ ok: false, error: "Clave de administracion invalida" }, params.callback);
    }

    return jsonResponse({ ok: true, responses: getResponses() }, params.callback);
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message }, e.parameter && e.parameter.callback);
  }
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeaders = HEADERS.every((header, index) => firstRow[index] === header);
  if (!hasHeaders) {
    sheet.clear();
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }

  return sheet;
}

function getResponses() {
  const sheet = getSheet();
  const values = sheet.getDataRange().getValues();
  const grouped = {};

  values.slice(1).forEach(row => {
    const [id, fecha, centro, caso, descripcion, tecnica, barrera] = row;
    if (!id) return;

    if (!grouped[id]) {
      grouped[id] = {
        id_anonimo: id,
        fecha,
        centro,
        respuestas: []
      };
    }

    grouped[id].respuestas.push({
      caso: Number(caso),
      descripcion,
      tecnica,
      barrera
    });
  });

  return Object.values(grouped).map(response => {
    response.respuestas.sort((a, b) => a.caso - b.caso);
    return response;
  });
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object") throw new Error("Payload no valido");
  if (!payload.id_anonimo) throw new Error("Falta id anonimo");
  if (!payload.fecha) throw new Error("Falta fecha");
  if (!payload.centro) throw new Error("Falta centro");
  if (!Array.isArray(payload.respuestas) || payload.respuestas.length !== 5) {
    throw new Error("Debe incluir 5 respuestas");
  }

  payload.respuestas.forEach(answer => {
    if (!answer.caso || !answer.descripcion || !answer.tecnica) {
      throw new Error("Respuesta incompleta");
    }
    if (answer.tecnica !== "TIVA" && !answer.barrera) {
      throw new Error("Falta barrera cuando no se selecciona TIVA");
    }
  });

  return payload;
}

function jsonResponse(data, callback) {
  const text = callback ? `${callback}(${JSON.stringify(data)});` : JSON.stringify(data);
  const output = ContentService.createTextOutput(text);
  output.setMimeType(callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON);
  return output;
}
