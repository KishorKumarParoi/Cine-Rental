import { useState } from 'react';
import { initialTravelPlan } from './places';

function PlaceTree({ Id, parentId, placesById, onComplete }) {
    const place = placesById[Id];
    const childIds = place.childIds;

    return (
        <>
            <li>
                {place.title}
                <button onClick={() => onComplete(Id, parentId)}>Complete</button>
                {childIds.length > 0 && (
                    <ol>
                        {
                            childIds.map((childId) => (
                                <PlaceTree key={childId} Id={childId} parentId={Id} placesById={placesById} onComplete={onComplete} />
                            )
                            )
                        }
                    </ol>
                )
                }
            </li>
        </>
    )
}

export default function Planets() {
    const [plan, updatePlan] = useState(initialTravelPlan);
    const planetIds = plan[0].childIds;

    function handleComplete(childId, parentId) {
        console.log('completing...');
        const parent = plan[parentId];
        const nextParent = {
            ...parent,
            childIds: parent.childIds.filter(id => id !== childId)
        }

        updatePlan({
            ...plan,
            [parentId]: nextParent,
        })
    }
    return (
        <>
            <h1 className='text-3xl bg-yellow-400 '>Places to visit</h1>
            <ol>
                {
                    planetIds.map((id) => (
                        <PlaceTree key={id} Id={id} parentId={0} placesById={plan} onComplete={handleComplete} />
                    ))
                }
            </ol>
        </>
    )
}

