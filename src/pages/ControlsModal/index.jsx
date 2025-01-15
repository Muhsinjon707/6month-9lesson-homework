import { useState } from "react";
import Modal from "../../component/Modal";

const ControlsModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full">
            <div className="App">
                <button className="btn btn-danger" onClick={() => setOpen(true)}>
                    Delete
                </button>

                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className="text-center w-56">
                        Trash
                        <div className="mx-auto my-4 w-48">
                            <h3 className="text-lg font-black text-gray-800">Confirm delete</h3>
                            <p className="text-sm text-gray-500">
                                Are you sure you want to delete this item?
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button className="btn btn-danger w-full">Delete</button>
                            <button onClick={() => setOpen(false)} className="btn btn-light w-full">Cancel</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default ControlsModal;