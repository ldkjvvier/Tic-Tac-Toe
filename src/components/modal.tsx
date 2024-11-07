import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

interface ModalProps {
  children: React.ReactNode;
  component: React.ReactNode;
}

export const Modal = ({ children, component }: ModalProps) => {
  const [open, setOpen] = useState(false); // Inicia el modal cerrado

  // Función para cerrar el modal
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <button
        className="border-2 p-3 rounded-lg border-gray-600 hover:bg-[#1B263B] transition-all"
        onClick={handleOpen}
      >
        {children}
      </button>
      <Dialog open={open} onClose={handleClose} className="relative z-10">
        <DialogBackdrop
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          // Las clases de transición ya están configuradas en las clases de Tailwind CSS
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-secondary-bg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <header className="p-4 border-b border-gray-400">
                <h2 className="text-lg font-bold text-white">{children}</h2>
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 text-white hover:text-gray-300 transition-all"
                  aria-label="Cerrar modal"
                  style={{ fontSize: '1.5rem' }}
                >
                  <span className="sr-only">Cerrar modal</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </header>
              {/* El contenido del modal */}
              {component}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
