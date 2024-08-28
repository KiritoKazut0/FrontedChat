

export default function formatTimestamp(timestamp) {
    if (!timestamp) return "Asegurate de mandar el timestamp"; 

    const date = new Date(timestamp);

    if (isNaN(date.getTime())) {
      return "Fecha inválida"; 
    }

    const options = { 
      weekday: 'long',  
      hour: 'numeric',  
      minute: 'numeric', 
      hour12: true    
    };
    
    return new Intl.DateTimeFormat('es-MX', options).format(date);
  }
