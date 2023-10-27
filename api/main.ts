// deno-lint-ignore-file
type req = RequestInit & {
  data?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
};

export class axios {
  constructor(protected url: string, protected config?: req) {}

  async get(url: string, config?: req) {
    url = this.url + url;
    config = Object.assign({}, this.config || {}, config) || {};
    if (config.body || config.data) {
      config.body = JSON.stringify(config.body || config.data);
    }
    return new Promise(async (resolve, reject) => {
      config = Object.assign({}, config, { method: "GET" });
      try {
        let response = await fetch(url, config);
        let data = await response.json();
        if (response.ok) {
          resolve(data);
        } else {
          reject(Error(data));
        }
      } catch (error) {
        reject(new Error(error));
      }
    });
  }
  async delete(url: string, config?: req) {
    url = this.url + url;
    config = Object.assign({}, this.config || {}, config) || {};
    if (config.body || config.data) {
      config.body = JSON.stringify(config.body || config.data);
    }
    return new Promise(async (resolve, reject) => {
      config = Object.assign({}, config, { method: "DELETE" });
      try {
        let response = await fetch(url, config);
        let data = await response.json();
        if (response.ok) {
          resolve(data);
        } else {
          reject(new Error(data));
        }
      } catch (error) {
        reject(new Error(error));
      }
    });
  }

  async post(url: string, data: any, config?: req) {
    url = this.url + url;
    config = Object.assign({}, this.config || {}, config) || {};
    config = Object.assign({}, config, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return new Promise(async (resolve, reject) => {
      try {
        let response = await fetch(url, config);
        let data = await response.json();
        if (response.ok) {
          resolve(data);
        } else {
          reject(new Error(data));
        }
      } catch (error) {
        reject(new Error(error));
      }
    });
  }
  async PUT(url: string, data: any, config?: req) {
    url = this.url + url;
    config = Object.assign({}, this.config || {}, config) || {};
    config = Object.assign({}, config, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    return new Promise(async (resolve, reject) => {
      try {
        let response = await fetch(url, config);
        let data = await response.json();
        if (response.ok) {
          resolve(data);
        } else {
          reject(new Error(data));
        }
      } catch (error) {
        reject(new Error(error));
      }
    });
  }
  async patch(url: string, data: any, config?: req) {
    url = this.url + url;
    config = Object.assign({}, this.config || {}, config) || {};
    config = Object.assign({}, config, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
    return new Promise(async (resolve, reject) => {
      try {
        let response = await fetch(url, config);
        let data = await response.json();
        if (response.ok) {
          resolve(data);
        } else {
          reject(new Error(data));
        }
      } catch (error) {
        reject(new Error(error));
      }
    });
  }
}
