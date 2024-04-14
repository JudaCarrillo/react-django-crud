import styled from 'styled-components';
import { ButtonModal } from './buttonmodal';


export function ModalParaUpdate({ title, showModalContent, onClose, onCreate , onUpdate}) {
    const handleCloseModal = () => {
        onClose();
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        await onUpdate();
        onClose();
    };

    return (
        <Container>
            <div className="modal-overlay">
                <form onSubmit={handleUpdate}>
                    <div className="modal">
                        <div className="cabeza">
                            <h2>{title}</h2>
                        </div>
                        {showModalContent(handleCloseModal)}
                        <div className="separacion">
                            <ul>
                                <li>
                                    <ButtonModal type="button" onClick={handleCloseModal} name="cerrar" />
                                </li>
                                <li>
                                    <ButtonModal type="submit" name="Actualizar" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    );
}

const Container = styled.div`


.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    .modal {
        background-color: ${(props) => props.theme.bg};
        padding: 20px;
        border-radius: 2rem;
        display: flex;
        gap: 30px;
        flex-direction: column;
        align-items: center;
        width: 300px;
        height: 560px;
        position: relative;
        justify-content: center;
        .cabeza{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            
            h2{
                color: ${(props) => props.theme.text};
                font-size: 20px;
                font-weight: 800;
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
            }
        }
        
      }

      .separacion{
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: relative;
        justify-content: center;
        ul{
            display: flex; 
            gap: 20px;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            position: relative;
            li{
                list-style: none;
            }
        }
      }


      
      .modal-close-btn {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 20px;
        padding: 5px;
      }
  }
  

`;