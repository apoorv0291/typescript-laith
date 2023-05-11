import React from 'react';
import { IPeopleState as IProps } from '../../App';

interface IPeopleProps {
    people: {
        name: string;
        age: number;
        url: string;
        notes?: string;
    }[];
}

const List: React.FC<IProps> = ({ people }) => {
    const renderPeople = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.url} alt="dd" />
                        <h2>{person.name}</h2>
                        <h2>{person.age} years old</h2>
                        <p className="List-note">{person.notes}</p>
                    </div>
                </li>
            );
        });
    };
    return <ul>{renderPeople()}</ul>;
};

export default List;
