import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({children, open, onClose,className=''}) {
	const dialog = useRef();
	useEffect(() => {
		if (!dialog.current) return;
		if (open) {
			dialog.current.showModal();
		} else {
			dialog.current.close();
		}
	}, [open]);
	return (
		createPortal(
			<dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
				{children}</dialog>, 
			document.getElementById('modal'))
	);
}