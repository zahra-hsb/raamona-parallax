import React from 'react';

function Progress({ percentage, value, text }) { 

    return (
        <div class="relative w-40 h-40">
            <svg class="w-full h-full" viewBox="0 0 100 100">
                {/* <!-- Background circle --> */}
                <circle
                    class="text-gray-200 stroke-current"
                    stroke-width="20"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                ></circle>
                {/* <!-- Progress circle --> */}
                <circle
                    class="text-blue progress-ring__circle stroke-current"
                    stroke-width="20"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke-dashoffset={`calc(${value} - (400 * 45) / 100)`}
                ></circle>

                {/* <!-- Center text --> */}
                <text x="50" y="50" font-size="18" text-anchor="middle" alignment-baseline="middle" color='blue'>{percentage}%</text>

            </svg>
            <p className='text-center pt-5'>{text}</p>
        </div>
    );
}

export default Progress;  