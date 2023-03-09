const indexDay = () => {
	const date = new Date();
	var datum = Date.parse(date.toISOString().split('T')[0]);
	return datum / 1000;
}

export const Cookie = (function () {
	const self = {};
	self.store = () => {
		const data = [];
		for (let index = 0; index < localStorage.length; index++) {
			let id = localStorage.key(index);
			data.push({
				id,
				value: self.get(id)
			});
		}
		return data;
	};
	self.set = (id, value) => {
		if (typeof value === "object")
			value = JSON.stringify(value);
		localStorage.setItem(id, value);
	};
	self.get = (id) => {
		const value = localStorage.getItem(id);
		try {
			return JSON.parse(value);
		} catch (e) {
			return value;
		}
	};
	self.del = (id) => localStorage.removeItem(id);
	return self;
})();
export const Database = function () {
	this.db = null;
	this.info = {
		versions: indexDay()
	};
};

Database.prototype.init = function (name, data) {
	// indexedDB.deleteDatabase(name);
	const request = indexedDB.open(name.toLowerCase(), this.info.versions);
	let db;

	request.onupgradeneeded = function () {
		// The database did not previously exist, so create object stores and indexes.
		this.db = request.result;
		if (this.db.objectStoreNames.contains(name)) {
			this.db.deleteObjectStore(name);
		}
		const store = this.db.createObjectStore(name, {
			keyPath: "id"
		});
		data.map(item => store.add(item))
	};

	request.onsuccess = function () {
		this.db = request.result;
	};

	request.onblocked = function (event) {
		// If some other tab is loaded with the database, then it needs to be closed
		// before we can proceed.
		alert("Please close all other tabs with this site open!");
	};
}

Database.prototype.getAll = function (name, cb) {
	if(Cookie.get(name) == this.info.versions) {
		const request = indexedDB.open(name.toLowerCase(), this.info.versions);
		request.onsuccess = function (event) {
			this.db = event.target.result;
			this.db.transaction(name).objectStore(name).getAll().onsuccess = function (event) {
				cb(event.target.result)
			};
		};
	} else {
		cb([]);
	}
}

