
export function SpreadHeader({ spreadThem, clearSpread }: { spreadThem: any; clearSpread: any }) {


    return (
        <div className="spread-header-container">
            <button onClick={spreadThem}>Spread Them</button>
            <button onClick={clearSpread}>Clear Spread</button>
        </div>
    );
}

// props: { spreadThem, clearSpread }

// <div className="spread-header-container">
//             <button onClick="">Spread Them</button>
//             <button onClick="">Clear Spread</button>
//         </div>

