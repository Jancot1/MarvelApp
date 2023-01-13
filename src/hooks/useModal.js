import { useDispatch, useSelector } from 'react-redux';
import { onCloseTypeModal, onOpenTypeModal } from '../store/ui/uiSlice';

export const useModal = () => {

	const { isModalOpen } = useSelector(state => state.ui);
	const dispatch = useDispatch();

	const openTypeModal = () => {
		dispatch(onOpenTypeModal());
	};

	const closeTypeModal = () => {
		dispatch(onCloseTypeModal());
	};

	return {
		isModalOpen,

		openTypeModal,
		closeTypeModal
	};
};
