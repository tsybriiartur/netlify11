function doGet(e) {
  const action = e.parameter.action;
  const store = getStore();

  if (action === "getLights") {
    return send(store, e.parameter.callback);
  }

  if (action === "setLight") {
    let direction = e.parameter.direction?.toLowerCase().trim(); // normalize direction
    const color = e.parameter.color;

    if (!store.lights[direction] || !store.stats[direction]) {
      return send({ error: "Invalid direction" }, e.parameter.callback);
    }

    // Update light and stats correctly
    store.lights[direction] = color;
    store.stats[direction][color] = (store.stats[direction][color] || 0) + 1;

    saveStore(store);
    return send({ success: true, store }, e.parameter.callback);
  }

  return send({ error: "Invalid action" }, e.parameter.callback);
}


/* ------------------- STORAGE ------------------- */

function getStore() {
  const prop = PropertiesService.getScriptProperties().getProperty("trafficStore");

  if (!prop) {
    const initial = {
      lights: {
        vertical: "red",
        horizontal: "red",
      },
      stats: {
        vertical: { red: 0, yellow: 0, green: 0 },
        horizontal: { red: 0, yellow: 0, green: 0 },
      },
    };
    saveStore(initial);
    return initial;
  }
  return JSON.parse(prop);
}

function saveStore(obj) {
  PropertiesService.getScriptProperties().setProperty("trafficStore", JSON.stringify(obj));
}

/* ------------------- RESPONSE ------------------- */
function send(obj, callback) {
  const payload = JSON.stringify(obj);
  if (callback) {
    // JSONP response
    return ContentService.createTextOutput(callback + "(" + payload + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(payload)
    .setMimeType(ContentService.MimeType.JSON);
}
