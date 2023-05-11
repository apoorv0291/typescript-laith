import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/Container/List';
import AddToList from './components/Container/AddToList';

export interface IPeopleState {
    people: {
        name: string;
        age: number;
        url: string;
        notes?: string;
    }[];
}

function App() {
    // const [number, setNumber] = useState<number | string>(10);

    // const changeNumber = () => {
    //     setNumber('10');
    // };
    // const [people, setPeople] = useState([
    //     {
    //         name: 'Lebron James',
    //         url: '',
    //         age: '36',
    //         notes: 'he is king',
    //     },
    //     {
    //         name: 'kobe James',
    //         url: '',
    //         age: '36',
    //     },
    // ]);
    const [people, setPeople] = useState<IPeopleState['people']>([
        {
            name: 'Lebron James',
            url: '',
            age: 36,
            notes: 'he is king',
        },
        {
            name: 'kobe James',
            url: '',
            age: 36,
        },
    ]);
    const cards = people.map((person) => {
        return {
            age: person.age,
            ss: person.name,
            notes: person.notes,
        };
    });

    return (
        <div className="App">
            <h1>People invited to party</h1>
            <List people={people} />
            <AddToList setPeople={setPeople} people={people} />
        </div>
    );
}

export default App;
