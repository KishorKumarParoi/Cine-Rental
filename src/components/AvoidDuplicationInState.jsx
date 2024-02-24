import { useState } from "react";

const initialItems = [
    { title: 'pretzels', id: 10 },
    { title: 'crispy seaweed', id: 11 },
    { title: 'granola bar', id: 12 },
];

function AvoidDuplicationInState() {
    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState(10);
    const [isChoosed, setIsChoosed] = useState(false);

    const selectedItem = items.find(item => item.id === selectedId);
    console.log(selectedItem);

    function handleItemChange(id, e) {
        e.preventDefault();
        setItems(items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    title: e.target.value
                }
            } else {
                return item;
            }
        }));
    }

    function handleChoose(id) {
        setSelectedId(id);
        setIsChoosed(true);
    }

    return (
        <>
            <h2 className='text-5xl'>What's your travel snack?</h2>
            <ul className='space-y-3'>
                {items.map(item => (
                    <li key={item.id}>
                        {isChoosed ? <input type="text" value={item.title} onChange={(e) => handleItemChange(item.id, e)} /> : item.title}
                        {' '}
                        <button className='bg-purple-400 rounded-lg p-2 ' onClick={() => {
                            handleChoose(item.id);
                        }}> Choose</button>
                    </li>
                ))}
            </ul>
            <p className='mt-4'>You picked <span className='font-bold text-2xl'>{selectedItem.title}</span>.</p>
        </>
    );
}

export default AvoidDuplicationInState;