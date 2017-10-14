function log(msg) {
    console.log("[" + new Date().toISOString() + "]" + " " + msg)
}

function err(msg) {
    console.error("[" + new Date().toISOString() + "]" + " " + msg)
}

module.exports = {
	log: log,
	err: err
}