const apiConfig = {
    getToken: {
      url: 'https://apiestudiantes.maosystems.dev/tokens',
      method: 'POST',
      needToken: false,
    },
    getEstudiantes: {
      url: 'https://apiestudiantes.maosystems.dev/estudiantes',
      method: 'GET',
      needToken: true,
    },    
  };
  
  export default apiConfig;