import './ExploreContainer.css';
import { IonAlert,IonButton } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <strong>Hola Mundo Ionic</strong>
      <p>¿Estás Preparado? <a target="_blank" rel="noopener noreferrer" href="https://ionic.io/">Comienza con Ionic</a></p>
      <IonButton id="alerta" color="warning">Click Me</IonButton>
      <IonAlert
        trigger="alerta"
        header="Hola Mundo Ionic"
        subHeader="Mensaje Importante!!!"
        message="¿Listo para Aprender?"
        buttons={['OK']}
      ></IonAlert>
    </div>
  );
};

export default ExploreContainer;
