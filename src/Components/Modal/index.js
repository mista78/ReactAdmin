import React, {useState, useRef, Fragment}  from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
const Modaldiv = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em 1em;
  z-index: 999999;
  box-sizing: border-box;

&.modal-fade {
  animation: fade-in .5s 1 linear;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translateY(20px);
}

& > .modal-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.modal-close {
  position: absolute;
  right: 0px;
  top: 0;
    transform: translate(100%,-100%);;
  color: #5e5e5e;
  cursor: pointer;
  font-size: 1.25em;
  padding: 7px;
  background: rgba(255, 255, 255, 0.749);
  border: 1px solid #c3c0c0;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.989);
}

& > .modal-body {
  z-index: 2;
  position: relative;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 3px;
  /* overflow-x: hidden; */
  overflow-y: auto;
  max-height: 90%;
  padding: 15px 20px;
  color: #000;
  width: 100%;
  max-Width: ${props => props.size ? props.size : "765px"};
}


@keyframes fade-in {
  0% {
    animation-timing-function: cubic-bezier(0.2242, 0.7499, 0.3142, 0.8148);
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
`;
const ModalContainer = ({ children, size = "765px", close, defaultOpened = false, fade = false }) => {

    return ReactDOM.createPortal(
        defaultOpened && <Modaldiv size={size} className={`${fade ? 'modal-fade' : ''}`}>
            <div className="modal-overlay" onClick={close} />

            <div className="modal-body">
                <div className="modal-body__header"></div>
                <span role="button" className="modal-close" aria-label="close" onClick={close}>
                    x
                </span>
                {children}
            </div>
        </Modaldiv>,
        document.body
    )
};
const Modal = ({ children,icons, click, ...rest}) => {
    const [isOpen, setIsOpen] = useState(false);
    return <Fragment>
        <ModalContainer {...rest} fade={true} close={() => setIsOpen(false)} defaultOpened={isOpen}>{children}</ModalContainer>
        <a href="#" onClick={e => {
            e.preventDefault();
            setIsOpen(true);
            click && click()
        }}><span className='bt-play' dangerouslySetInnerHTML={{ __html: icons ? `<i class="fa fa-${icons}"></i>` : "show"}} /></a>
    </Fragment>
};
export default Modal;