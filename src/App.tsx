import { useEffect,useState } from 'react';
import api from './service/api';
import styles from './styles.module.scss';

interface Data {
  id: number;
  velocity: string;
  rpm: string;
  tanklevel: string;
  temperature: string;
}

function App() {
  const [data, setData] = useState({} as Data);

  useEffect(() => {
    const interval = setInterval(() => {
      api.get('carData/listLastOne').then(response =>setData(response.data));
      
    }, 100);
    return () => clearInterval(interval);
  }, []);

  console.log(data);
  return (
    <div className={styles.content} >
      <div className={styles.container2}>
        <div  className={styles.container}>
          {
            data.velocity 
          }
          
        </div>
        <p>velocidade</p>
      </div>
      <div className={styles.container2}>
        <div  className={styles.container}>
          {
            data.rpm
          }
          
        </div>
        <p>rpm</p>
      </div>
      <div className={styles.container2}>
      <div  className={styles.container}>
        {
          data.tanklevel
        }
        
      </div>
      <p>combustivel</p>
      </div>
      <div className={styles.container2}>
      <div  className={styles.container}>
        {
          data.temperature
        }
        
      </div>
      <p>temperatura</p>
      </div>
    </div>
  )
}

export default App;


