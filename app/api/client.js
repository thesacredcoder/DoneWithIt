import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "http://192.168.1.6:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const result = await get(url, params, axiosConfig);

  if (result.ok) {
    cache.store(url, result.data);
    return result;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : result;
};

export default apiClient;
