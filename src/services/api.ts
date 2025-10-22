import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Routes API
export const routesApi = {
  getAll: () => api.get('/routes/'),
  getById: (id: number) => api.get(`/routes/${id}/`),
  create: (data: any) => api.post('/routes/', data),
  update: (id: number, data: any) => api.put(`/routes/${id}/`, data),
  delete: (id: number) => api.delete(`/routes/${id}/`),
  getStatistics: () => api.get('/routes/statistics/'),
};

// Areas API
export const areasApi = {
  getAll: () => api.get('/areas/'),
  getById: (id: number) => api.get(`/areas/${id}/`),
  getByRoute: (routeId: number) => api.get(`/areas/?route_id=${routeId}`),
  getAvailable: () => api.get('/areas/?route_id__isnull=true'),
  assignToRoute: (areaId: number, routeId: number) => api.patch(`/areas/${areaId}/`, { route_id: routeId }),
  removeFromRoute: (areaId: number) => api.patch(`/areas/${areaId}/`, { route_id: null }),
};

export default api;
