import React, { useState } from 'react';
import { IPeopleState as IPeopleProps } from '../../App';

interface IProps {
    people: IPeopleProps['people'];
    setPeople: React.Dispatch<React.SetStateAction<IPeopleProps['people']>>;
}

const AddToList: React.FC<IProps> = (props: IProps) => {
    const [formValues, setFormValues] = useState({
        name: '',
        age: '',
        note: '',
        url: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };
    const handleClick = () => {};
    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={formValues.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="text"
                placeholder="Age"
                className="AddToList-input"
                value={formValues.age}
                onChange={handleChange}
                name="age"
            />
            <input
                type="text"
                placeholder="Image url"
                className="AddToList-input"
                value={formValues.url}
                onChange={handleChange}
                name="image"
            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                value={formValues.note}
                name="notes"
            />
            <button className="ADDToList-btn" onClick={handleClick}>
                Save
            </button>
        </div>
    );
};

export default AddToList;
