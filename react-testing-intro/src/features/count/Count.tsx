import React from 'react'

interface IProps {
    count: number;
    incrementCount: () => void;
}

const Count: React.FC<IProps> = ({count, incrementCount}) => {
    
    return (
        <div>
            <p>
                {count}
            </p>
            <p>
                <button id="incrementCountButton" onClick={incrementCount}>Increment</button>
            </p>
        </div>
    )
}

export default Count;