import { createPortal } from 'react-dom';

function Modal({ heading, children, setShowModal }) {
  return createPortal(
    <div
      onClick={() => setShowModal(false)}
      className={
        'flex w-screen h-screen bg-black/40 fixed top-0 left-0 justify-center'
      }
    >
      <div
        className=" h-max w-1/2 bg-white rounded-md mt-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between px-4 border-b-2 border-b-gray-200 py-6">
          <p className="text-2xl ">{heading}</p>
          <button
            className="text-2xl text-gray-500"
            onClick={() => setShowModal(false)}
          >
            &#10005;
          </button>
        </div>
        <div className="px-4 pt-8 flex-col">{children}</div>
      </div>
    </div>,
    document.getElementById('portal')
  );
}

export default Modal;
