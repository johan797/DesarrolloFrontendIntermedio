import apiConfig from '../config/apiConfig';

const useApi = ({ apiName, token }) => {

    const {url, method, needToken} = apiConfig[apiName];
    
    const headers = {
        'Content-Type': 'application/json',
    };
      
    if (needToken && token) {
    headers['Authorization'] = `Bearer ${token}`;
    }

    const fetchData = async (payload) => {
        const response = await fetch(url, {
          method,
          headers,
          body: JSON.stringify(payload),
        });
        
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw new Error(`Error al obtener datos de la API ${apiName}`);
        }
    };

    return { fetchData };
    
};
  
export default useApi;

  
  