import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddTaskModal.css';

const AddTaskModal = ({ isOpen, onClose, onAdd }) => {
    const [task, setTask] = useState({ title: '', description: '', deadline: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(task);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" onChange={e => setTask({ ...task, title: e.target.value })} />
                <input type="text" placeholder="Description" onChange={e => setTask({ ...task, description: e.target.value })} />
                <button type="submit">Add Task</button>
            </form>
        </Modal>
    );
};

export default AddTaskModal;
