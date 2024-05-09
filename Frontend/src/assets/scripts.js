import { Modal } from 'flowbite';
export const close_modal = () => {
    const target = document.getElementById('static-modal');
    const options = {
        backdrop: 'static',
        placement: 'center'
    }
    const modal = new Modal(target, options)
    modal.hide();
}
export const open_modal = (title) => {
    const target = document.getElementById('static-modal');
    const options = {
        backdrop: 'static',
        placement: 'center'
    }
    const modal = new Modal(target, options)
    modal.show();
}